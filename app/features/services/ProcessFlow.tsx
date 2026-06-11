import { RiPencilRuler2Line, RiCodeSSlashLine, RiRocket2Line } from "react-icons/ri";

interface ProcessPhase {
    id: string;
    phaseNumber: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    vectors: string[];
    accentColor: "cyan" | "pink" | "green";
}

export default function ProcessFlow() {

    const phases: ProcessPhase[] = [
        {
            id: "01",
            phaseNumber: "Phase 1",
            icon: RiPencilRuler2Line,
            title: "Design",
            description: "We begin by understanding your brand, audience, and goals. Our design process combines creativity with strategy to create experiences that motivate and inspire.",
            vectors: [
                "Brand identity & style guide development",
                "Wireframing & interactive prototyping",
                "UI/UX design focused on user experience",
                "Responsive design for all devices"
            ],
            accentColor: "cyan"
        },
        {
            id: "02",
            phaseNumber: "Phase 2",
            icon: RiCodeSSlashLine,
            title: "Development",
            description: "Clean, efficient code transforms your design into a powerful digital experience. We build with modern frameworks an best practices to ensure performace and scalability.",
            vectors: [
                "Front-end development with React and modern frameworks",
                "Custom functionality & third-party integrations",
                "Performance optimization & SEO implementation",
                "Comprehensive quality assurance & testing"
            ],
            accentColor: "pink"
        },
        {
            id: "03",
            phaseNumber: "Phase 3",
            icon: RiRocket2Line,
            title: "Deployment",
            description: "We handle every technical detail to ensure a smoothly successful launch. From domain setup to ongoing support, we're with you every step of the way.",
            vectors: [
                "Server configuration & domain mapping",
                "Secure hosting setup with SSL certificates",
                "Analytics & tracking implementation",
                "Ongoing maintenance & support packages"
            ],
            accentColor: "green"
        }
    ];

    return (
        <div className="w-full text-white mt-24 md:mt-32">

            {/* Section Subheading */}
            <div className="mb-12 text-center md:text-left">
                <span className="font-header text-xs tracking-[0.25em] text-neon-pink uppercase block mb-2">
                    // Operational Principles
                </span>
                <h3 className="font-header text-xl sm:text-2xl uppercase italic tracking-tight text-whit/90">
                    The <span className="text-neon-pink drop-shadow-[0_0_8px_rgab(255, 0,229,0.3)]">Three-Phase Process</span>
                </h3>
            </div>

            <div className="space-y-6 w-full">
                {phases.map((phase) => {
                    const IconComponent = phase.icon;

                    let themeStyles = {
                        borderGlow: "hover:border-neon-cyan/30",
                        textGlow: "text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]",
                        bulletColor: "text-neon-cyan",
                        squareBox: "bg-neon-cyan text-black shadow-[0_0_12px_rgba(0,242,255,0.3)]"
                    };

                    if (phase.accentColor === "pink") {
                        themeStyles = {
                            borderGlow: "hover:border-neon-pink/30",
                            textGlow: "text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(255,0,229,0.4)]",
                            bulletColor: "text-neon-pink",
                            squareBox: "bg-neon-pink text-black shadow-[0_0_12px_rgba(255,0,229,0.3)]"
                        };
                    } else if (phase.accentColor === "green") {
                        themeStyles = {
                            borderGlow: "hover:border-emerald-500/30",
                            textGlow: "text-neon-green group-hover:drop-shadow-[0_0_8px_rgba(52, 211, 153, 0.4)]",
                            bulletColor: "text-neon-green",
                            squareBox: "bg-neon-green text-black shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                        };
                    }

                    return (
                        <div
                            key={phase.id}
                            className={`group relative bg-white/1 border border-white/5 rounded-lg p-6 md:p-8 transition-all duration-300 hover:bg-white/2 ${themeStyles.borderGlow}`}
                        >

                            <div className={`absolute top-4 right-4 w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center font-header text-xs sm:text-xm font-bold select-none ${themeStyles.squareBox}`}>
                                {phase.id}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 items-start pr-8 md:pr-12">

                                <div className="md:col-span-1 flex items-center justify-start md:justify-center">
                                    <div className={`p-3 rounded-lg bg-white/2 border border-white/5 group-hover:bg-black/20 transition-all duration-300 ${themeStyles.textGlow}`}>
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="md:col-span-11">
                                    <div className="mb-2">
                                        <span className="font-header text-[10px] tracking-widest text-white/30 uppercase block mb-0.5">
                                            {phase.phaseNumber}
                                        </span>
                                        <h4 className="font-header text-lg uppercase tracking-tight text-white">
                                            {phase.title}
                                        </h4>
                                    </div>

                                    <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
                                        {phase.description}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 border-t border-white/5 pt-5">
                                        {phase.vectors.map((vector, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2.5 font-body text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300"
                                            >
                                                <span className={`text-sm leading-none select-none ${themeStyles.bulletColor}`}>
                                                    ▹
                                                </span>
                                                <span>{vector}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}