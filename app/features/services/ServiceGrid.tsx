interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    deliverables: string[];
    accentColor: "cyan" | "pink";
}

export default function ServiceGrid() {

    const services: ServiceItem[] = [
        {
            id: "svc-01",
            title: "Custom Web Applications",
            subtitle: "Full-Stack Single Page Architecture",
            description: "Engineering tailored, data-driven platforms designed to automate internal business systems, manage dynamic client metrics, and scale with your user base natively.",
            deliverables: ["React / Next.js / Vite / Remix Ecosystems", "Application State Engines", "Secure Relational Database Design", "Performance-Optimized Codebases"],
            accentColor: "cyan"
        },
        {
            id: "svc-02",
            title: "Custom Web Design Systems",
            subtitle: "User-Centric Architecture & Prototyping",
            description: "Engineering cohesive digital blueprints where your brand identity is systematically integrated into every layout token, interactive pattern, and component variable.",
            deliverables: ["Figma Component UI Systems", "Framer Interacitve Prototyping", "Wix Studio Platform Scaling", "Bespoke Wordpress Content Architectures"],
            accentColor: "pink"
        },
        {
            id: "svc-03",
            title: "High-Performance Interfaces",
            subtitle: "Premium Brand Conversion Engines",
            description: "Translating sophisticated concepts into ultra-fast, user-centric front end applications. Focussed heavily on premium web vitals, absolute layout responsiveness, and pixel-perfect design continuity.",
            deliverables: ["Fluid Interfaces", "SEO & COre Web Vitals Optimization", "Atomic UI Component Frameworks", "Immersive Animation Frameworks"],
            accentColor: "cyan"
        }
    ];

    return (
        <div className="w-full text-white mt-12">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                    const textGlow = service.accentColor === "cyan"
                        ? "group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                        : "group-hover:text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(255,0,229,0.4)]";
                    
                    const lineMarker = service.accentColor === "cyan"
                        ? "text-neon-cyan"
                        : "text-neon-pink";

                    return (
                        <div
                            key={service.id}
                            className="group relative flex flex-col justify-between bg-white/1 border border-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-white/2 hover:border-white/10"
                        >
                            <div>
                                <div className="flex justify-between item-baseline mb-4">
                                    <span className="font-header text-[10px] tracking-widest text-white/20 uppercase">
                                        // {service.id}
                                    </span>
                                    <span className="font-body text-[10px] text-white/30 tracking-tight">
                                        [Active Engine]
                                    </span>
                                </div>

                                <h3 className={`font-header text-lg uppercase tracking-tight text-white mb-1 transition-colors duration-300 ${textGlow}`}>
                                    {service.title}
                                </h3>

                                <p className="font-body text-xs text-white/40 italic mb-4 block">
                                    {service.subtitle}
                                </p>

                                <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>

                            <div className="border-t border-white/5 pt-4 mt-auto">
                                <span className="font-header text-[10px] tracking-wider text-white/30 uppercase block mb-3">
                                    // Primary Capabilities
                                </span>
                                <ul className="space-y-2">
                                    {service.deliverables.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 font-body text-xs text-white/50 leading-normal transition-aolors duration-300 group-hover:text-white/70"
                                        >
                                            <span className={`text-sm leading-none select-none ${lineMarker}`}>
                                                ▹
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}