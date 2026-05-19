import { Link } from "react-router";
import Section from "~/components/layout/Section";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export default function OurProcess() {
    const steps: ProcessStep[] = [
        {
            number: "01",
            title: "Discovery & Design",
            description: "We deep dive into your business logic, mapping out every technical constraint and user flow before a single line of code is written."
        },
        {
            number: "02",
            title: "Development & Precision Engineering",
            description: "Building with a clean compiler strategy. We construct scalable, highly performant systems engineered with clean design patterns."
        },
        {
            number: "03",
            title: "Deploy & Maintain",
            description: "Launching into production environments with absolute stability, optimized caching layers, and bulletproof infrastructure."
        }
    ];

    return (
        <Section id="process" className="bg-cyber-bg border-t border-white/5">
                
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/5 pb-8">
                <div className="max-w-2xl">
                    <h2 className="font-header text-4xl md:text-6xl text-white uppercase italic leading-none tracking-tight">
                        Our <span className="text-neon-pink drop-shadow-[0_0_15px_rgba(255,0,229,0.3)]">Process</span>
                    </h2>
                    <p className="font-body text-white/40 mt-4 max-w-md italic text-sm md:text-base leading-relaxed">
                        A systematic breakdown of how we translate complex ideas into clean digital execution.
                    </p>
                </div>

                <Link
                    to="/services"
                    className="font-header text-xs tracking-[0.3em] text-white/60 hover:text-neon-pink transition-all border-b border-white/10 hover:border-neon-pink pb-2 uppercase shrink-0 default-focus">
                    View All Services →
                </Link>
            </div>

            {/* Process Step Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                {steps.map((step) => (
                    <div 
                        key={step.number} 
                        className="group relative flex flex-col bg-card-bg border border-white/5 p-8 transition-all duration-500 hover:border-neon-cyan/30"
                    >
                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-500 group-hover:w-full" />
                        
                        <span className="font-header text-5xl md:text-6xl text-white/10 group-hover:text-neon-cyan transition-colors duration-500 block mb-4 tracking-tighter">
                            {step.number}
                        </span>
                        
                        <div className="flex flex-col gap-3 grow">
                            <h3 className="font-header text-xl text-white tracking-tight group-hover:text-neon-cyan transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="font-body text-sm text-white/50 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </Section>
    );
}