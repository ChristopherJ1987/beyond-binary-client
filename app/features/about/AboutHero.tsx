interface MetricItem {
    value: string;
    label:string;
}

export default function AboutHero() {
    
    // Structural matrix for your performance metrics
    const metrics: MetricItem[] = [
        { value: "5+", label: "Years Developing" },
        { value: "20+", label: "Systems Deployed" },
        { value: "100%", label: "Uptime Commitment" },
    ]

    return (
        <div className="w-full text-white">
            {/* Main Responsive Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 lg:items-center items-start">

                {/* Portrait Container Layer */}
                <div className="lg:col-span-4 w-full flex justify-center">
                    <div className="relative group w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-white/5 bg-linear-to-b from-white/5 to-transparent p-1">

                        {/* Interactive Neon Glitch Glow Frame */}
                        <div className="absolute inset-0 bg-linear-to-br from-neon-cyan/20 via-transparent to-neon-pink/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Image Chassis */}
                        <div className="w-full h-full relative rounded-md overflow-hidden bg-black/40 flex items-center justify-center">
                            <img src="/images/avatar.jpeg" alt="Christopher Jones Avatar Image" className="w-full h-full object-cover" />
                        </div>

                        {/* Outer Geometric Wireframe Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-cyan" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-pink" />
                    </div>
                </div>

                {/* Biography Content Chassis */}
                <div className="lg:col-span-8 flex flex-col justify-center lg:py-6">
                    <h2 className="font-header text-2xl sm:text-3xl uppercase italic tracking-tight mb-6">
                        From <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]">
                            Healing Animals
                        </span> to building{" "}
                        <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]">
                            Digital Experiences
                        </span>
                    </h2>

                    <div className="font-body text-white/70 space-y-4 text-sm sm:text-base leading-relaxed max-w-3xl">
                        <p>
                            For years my focus was rooted in veterinary medicine, dedicating my days to basic pet care, routine diagnostics and surgeries, and managing emergency situations. I learned how to analyze complex biological systems, identify core anomalies, and complete operational procedures under intense pressure.
                        </p>
                        <p>
                            Today, I channel that same forensic problem-solving matrix into writing code. I swapped the medical charts for IDE's, but the core objective remains unchanged: taking fractured, complex architectures and engineering them into healthy, efficient, and beautifully optimized living systems.
                        </p>
                        <p className="italic text-white/40">
                            Whether building specialized business websites or creating high-performance user spaces and software, I architect, design, and engineer applications with principles that I have learned to rely on to build strong foundations.
                        </p>
                    </div>

                    {/* Metrics Dashboard Row */}
                    <div className="relative grid grid-cols-3 gap-4 border-t border-white/5 py-8 mt-10 group/metrics">
                        {metrics.map((metric, i) => (
                            <div key={i} className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
                                <span className="font-header text-3xl sm:text-4xl text-white font-black tracking-tight leading-none block mb-1">
                                    {metric.value}
                                </span>
                                <span className="font-body text-[10px] sm:text-xs text-white/40 uppercase tracking-widest block">
                                    {metric.label}
                                </span>
                            </div>
                        ))}

                        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-neon-cyan drop-shadow-[0_0_4px_rgba(0,242,255,0.4)]" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-neon-pink drop-shadow-[0_0_6px_rgba(255,0,229,0.6)] scale-x-0 origin-left group-hover/metrics:scale-x-100 transition-transform duration-500 ease-out" />
                    </div>

                </div>
                
            </div>
        </div>
    );
}