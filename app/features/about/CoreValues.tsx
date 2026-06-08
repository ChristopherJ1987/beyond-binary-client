import { RiFocus2Line, RiFlashlightLine, RiHandHeartLine, RiShieldCheckLine } from "react-icons/ri";

interface Valueitem {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    accentColor: "cyan" | "pink";
}

export default function CoreValues() {

    // Core Operational Principles Array
    const values: ValueItem[] = [
        {
            id: "01",
            icon: RiFocus2Line,
            title: "Results First",
            description: "We bypass cosmetic vanity metrics to engineer stable, resilient code architectures that drive measurable product performance.",
            accentColor: "pink",
        },
        {
            id: "02",
            icon: RiFlashlightLine,
            title: "Technical Intensity",
            description: "Approaching every project with deep analytical focus, diving underneath the interface layer to optimize memory loops and data flows.",
            accentColor: "pink",
        },
        {
            id: "03",
            icon: RiHandHeartLine,
            title: "Deep Partnership",
            description: "We operate as an embedded extension of your executive or engineering team, aligning every script directly with core business objectives.",
            accentColor: "cyan",
        },
        {
            id: "04",
            icon: RiShieldCheckLine,
            title: "Excellence Unblocked",
            description: "No cutting corners. From zero-warning compilation loops to robust responsive design testing, every system must deploy flawlessly.",
            accentColor: "pink",
        },
    ];

    return (
        <div className="w-full text-white mt-24 md:mt-32">

            {/* Section Subheading */}
            <div className="mb-12 text-center md:text-left">
                <span className="font-header text-xs tracking-[0.25em] text-neon-pink uppercase block mb-2">
                    // Operational Principles
                </span>
                <h3 className="font-header text-xl sm:text-2xl uppercase italic tracking-tight text-white/90">
                    Our Guiding <span className="text-neon-pink drop-shadow-[0_0_8px_rgba(255,0,229,0.3)]">Framework</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((item) => {
                    const IconComponent = item.icon;

                    const glowClass = item.accentColor === "cyan"
                        ? "bg-neon-cyan drop-shadow-[0_0_6px_rgba(0,242,255,0.7)]"
                        : "bg-neon-pink drop-shadow-[0_0_6px_rgba(255,0,229,0.7)]";

                    const textGlowClass = item.accentColor === "cyan"
                        ? "text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                        : "text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(255,0,229,0.4)]";

                    return (
                        <div
                            key={item.id}
                            className="group relative flex flex-xol justify-between bg-white/]0.02] border border-white/5 rounded-lg p-6 overflow-hidden transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10"
                        >
                            <div className={`absolute top-0 left-0 w-full h-px scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out ${glowClass}`} />

                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    
                                    <div className={`p-2 rounded-md bg-white/[0.03] border border-white/5 transition-colors duration-300 group-hover:bg-black/20 ${textGlowClass}`}>
                                        <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                                    </div>

                                    <span className="font-header text-xs text-white/20 tracking-widest group-hover:text-white/40 transition-colors duration-300">
                                        [{item.id}]
                                    </span>
                                </div>

                                <h4 className="font-header text-lg uppercase tracking-tight text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                                    {item.title}
                                </h4>

                                <p className="font-body text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>

                            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white/5 group-hover:bg-neon-cyan/40 transition-colors duration-300 rounded-tl-[3px]" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}