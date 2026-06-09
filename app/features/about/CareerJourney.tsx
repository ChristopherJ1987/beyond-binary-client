interface TimelineEvent {
    id: string;
    period: string;
    role: string;
    organization: string;
    location: string;
    description:string,
    milestones:string[];
    accentColor: "cyan" | "pink";
}

export default function CareerJourney() {
    const journeyData: TimelineEvent[] = [
        {
            id: "exp-01",
            period: "2020 - Present",
            role: "Full Stack Developer",
            organization: "Beyond Binary",
            location: "North Texas",
            description: "Architecting high-performance client web applications, custom management software, and dynamic user platforms.",
            milestones: [
                "Engineered scalable full-stack application with lightning-fast runtime environments.",
                "Designed and integrated predictable backend data pipelines for specialized local businesses.",
                "Formulated design system component libraries translating abstract layouts to robust code tracks."
            ],
            accentColor: "cyan"
        },
        {
            id: "exp-02",
            period: "2022 - Present",
            role: "Full Stack Developer",
            organization: "BeeDev Services",
            location: "Remote / Texas",
            description: "BeeDev Services was built for business owners who care deeply about what they're creating, but feel their online presence hasn't caught up yet.",
            milestones: [
                "Designed websites for clients to review before work began on developing their applications.",
                "Developed designs using modern architectures and frameworks to ensure speed and reliability for clients.",
                "Deployed client applications with runtime monitors."
            ],
            accentColor: "pink"
        },
        {
            id: "exp-03",
            period: "Prior Tenure",
            role: "Veterinary Technician",
            organization: "Clinics and Hospitals all over North Texas",
            location: "North Texas",
            description: "Executed high-stakes diagnostic IoAnalyticsSharp, surgical assistance, and complex patient management within fast-paced, high-pressure emergency veterinary hospitals and clinics.",
            milestones: [
                "Analyzed highly intricate biological data systems to isolate core operational anomalies rapidly.",
                "Maintained procedural accuracy and structural integrity.",
                "Managed multifaceted communications bridging specialized technical terminology with empathetic care."
            ],
            accentColor: "cyan"
        }
    ];

    return (
        <div className="w-full text-white mt-24 md:mt-32">

            {/* Section Subheading */}
            <div className="mb-16 text-center md:text-left">
                <span className="font-header text-xs tracking-[0.25em] text-neon-cyan uppercase block mb-2">
                    // Historical Matrix
                </span>
                <h3 className="font-header text-xl sm:text-2xl uppercase italic tracking-tight text-white/90">
                    The Professional <span className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">Timeline</span>
                </h3>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative border-l border-white/5 md:border-l-0 pl-6 md:pl-0 space-y-12 md:space-y-16">
                <div className="hidden md:block absolute left-[16.666%] top-2 bottom-2 w-px bg-linear-to-b from-white/10 via-white/5 to-transparent" />

                {journeyData.map((item) => {
                    const nodeGlow = item.accentColor === "cyan"
                        ? "bg-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)] border-neon-cyan"
                        : "bg-neon-pink shadow-[0_0_10px_rgba(255,0,229,0.8)] border-neon-pink";

                    const badgeStyle = item.accentColor === "cyan"
                        ? "text-neon-cyan bg-neon-cyan/5 border-neon-cyan/20"
                        : "text-neon-pink bg-neon-pink/5 border-neon-pink/20";

                    return (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8 relative group">
                            <div className={`md:hidden absolute -left-7.75 top-1.5 w-2 h-2 rounded-full border ${nodeGlow}`} />

                            <div className="md:col-span-2 md:text-right flex flex-col justify-start pt-1 md:pt-1.5">
                                <span className="font-header text-sm tracking-wider text-white/40 group-hover:text-white transition-colors duration-300">
                                    {item.period}
                                </span>
                                <span className="font-body text-[10px] text-white/20 uppercase tracking-widest mt-0.5 md:mt-1">
                                    {item.location}
                                </span>
                            </div>

                            <div className="hidden md:col-span-1 md:flex justify-center relative pt-2">
                                <div className={`w-2.5 h-2.5 rounded-full border-transition-all duration-500 transform group-hover:scale-125 ${nodeGlow}`} />
                            </div>

                            <div className="md:col-span-9 bg-white/1 border border-white/5 hover:border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/2">

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h4 className="font-header text-lg uppercase tracking-tight text-white group-hover:text-neon-cyan transition-colors duration-300">
                                            {item.role}
                                        </h4>
                                        <p className="font-body text-sm text-white/40 italic">
                                            {item.organization}
                                        </p>
                                    </div>

                                    <span className={`font-header text-[10px] tracking-widest uppercase px-2.5 py-1 rounded border self-start sm:self-center ${badgeStyle}`}>
                                        {item.id}
                                    </span>
                                </div>

                                <p className="font-body text-sm text-white/60 leading-relaxed mb-6 max-w-3xl">
                                    {item.description}
                                </p>

                                <div className="border-t border-white/5 pt-4">
                                    <h5 className="font-header text-xs tracking-wider text-white/30 uppercase mb-3">
                                        // Core Vectors Logged
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {item.milestones.map((milestone, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 font-body text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                                            >
                                                <span className={`text-sm select-none leading-none mt-0.5 ${item.accentColor === "cyan" ? "text-neon-cyan" : "text-neon-pink"}`}>
                                                    ▹
                                                </span>
                                                <span>{milestone}</span>
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