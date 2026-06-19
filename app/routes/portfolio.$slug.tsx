import { useParams, Link } from "react-router";
import { RiArrowLeftLine, RiTimeLine, RiCpuLine, RiLineChartLine, RiUserLine } from "react-icons/ri";
import Section from "~/components/layout/Section";
import ConversionCard from "~/components/ui/ConversionCard";
import { caseStudies } from "~/lib/caseStudies";

export default function CaseStudyDetailRoute() {

    const { slug } = useParams();

    const study = slug ? caseStudies[slug] : null;

    if (!study) {
        return (
            <Section id="not-found" className="bg-cyber-bg min-h-screen pt-32 text-center text-white">
                <div className="max-w-md mx-auto border border-white/5 rounded-lg p-8 bg-white/1">
                    <span className="font-header text-xs tracking-widest text-neon-pink uppercase block mb-4">// System Link Failure</span>
                    <h1 className="font-header text-lg uppercase tracking-tight text-white mb-2">Case Study Under Construction</h1>
                    <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed mb-6">
                        The requested engineering log <code className="text-neon-cyan bg-white/5 px-1 py-0.5 rounded">[{slug}]</code> has not been decrypted or published to the public ledger yet.
                    </p>
                    <Link to="/portfolio" className="font-header text-xs uppercase tracking-wider text-neon-cyan hover:text-white flex items-center justify-center gap-2 transition-colors duration-300">
                        <RiArrowLeftLine className="w-4 h-4" /> Return to Portfolio Annals
                    </Link>
                </div>
            </Section>
        );
    }

    return (
        <Section id={`case-study-${study.slug}`} className="bg-cyber-bg min-h-screen pt-24 pb-24 text-white">

            <div className="mb-8">
                <Link to="/portfolio" className="group font-header text-[10px] tracking-widest uppercase text-white/40 hover:text-neon-cyan flex items-center gap-1.5 transition-colors duration-300">
                    <RiArrowLeftLine className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                    Back to Portfolio Index
                </Link>
            </div>

            {/* Hero Architecture Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

                {/* Left Header Specs */}
                <div className="lg:col-span-7">
                    <span className="font-header text-xs tracking-[0.25em] text-neon-cyan uppercase block mb-3">
                        // Category: {study.category}
                    </span>
                    <h1 className="font-header text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white/95 mb-4 leading-tight">
                        {study.projectTitle}
                    </h1>
                    <p className="font-body text-sm sm:text-md text-white/50 leading-relaxed mb-6 max-w-xl">
                        {study.subtitle}
                    </p>

                    {/* Inline Tag Array */}
                    <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="font-body text-[10px] px-2.5 py-0.5 rounded border border-white/10 bg-white/2 text-white/40 tracking-wider uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Presentation Thumbnail Chassis */}
                <div className="lg:col-span-5 w-full aspect-video rounded-lg border border-white/5 bg-white/2 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src={study.image}
                        alt={study.projectTitle}
                        className="w-full h-full object-cover opacity-70"
                    />  
                </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-white/5 pt-12">
                
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-12">

                    {/* The Challenge */}
                    <div>
                        <span className="font-header text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// Project_Overview</span>
                        <h2 className="font-header text-lg uppercase tracking-tight text-white/90 mb-4">The Challenge</h2>
                        <div className="space-y-4 font-body text-sm text-white/50 leading-relaxed">
                            {study.challengeParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* The Solution */}
                    <div>
                        <span className="font-header text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// Implementation</span>
                        <h2 className="font-header text-lg uppercase tracking-tight text-white/90 mb-4">The Solution</h2>
                        <div className="space-y-4 font-body text-sm text-white/50 leading-relaxed">
                            {study.solutionParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-8 lg:pl-4">

                    {/* Client Profile Block */}
                    <div className="bg-white/1 border border-white/5 rounded-lg p-5">
                        <span className="font-header text-[10px] tracking-widest text-white/30 uppercase mb-4 flex items-center gap-1.5">
                            <RiUserLine className="text-neon-cyan" /> // Client Profile
                        </span>
                        <div className="space-y-2.5">
                            {study.clientProfile.map((prof, i) => (
                                <div key={i} className="flex justify-between items-baseline font-body text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-white/30 lowercase font-mono">{prof.label}:</span>
                                    <span className="text-white/70 font-medium">{prof.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Timeline Block */}
                    <div className="bg-white/1 border border-white/5 rounded-lg p-5">
                        <span className="font-header text-[10px] tracking-widest text-white/30 uppercase mb-4 flex items-center gap-1.5">
                            <RiTimeLine className="text-neon-pink" /> // Project_Timeline
                        </span>
                        <div className="space-y-3">
                            {study.timeline.map((time, i) => (
                                <div key={i} className="flex items-start gap-3 font-body text-xs">
                                    <span className="text-neon-pink font-mono tracking-tighter select-none pt-0.5">{time.date}</span>
                                    <span className="text-white/50 leading-normal">{time.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Badge Block */}
                    <div className="bg-white/1 border border-white/5 rounded-lg p-5">
                        <span className="font-header text-[10px] tracking-widest text-white/30 uppercase mb-4 flex items-center gap-1.5">
                            <RiCpuLine className="text-neon-green" /> // Tech_Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                            {study.techStack.map((tech, i) => (
                                <span key={i} className="font-body text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* System Architecture Modules Matrix */}
            <div className="mt-20 border-t border-white/5 pt-12">
                <div className="mb-8">
                    <span className="font-header text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// System Architecture</span>
                    <h2 className="font-header text-lg uppercase tracking-tight text-white/90">{study.modulesTitle}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {study.modules.map((mod) => (
                        <div key={mod.id} className="bg-white/1 border border-white/5 rounded-lg p-5 hover:border-white/10 transition-colors duration-300">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-[10px] tracking-wider text-neon-cyan font-mono font-bold">[{mod.id}]</span>
                                <h3 className="font-header text-sm uppercase tracking-tight text-white/80">{mod.title}</h3>
                            </div>
                            <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed">
                                {mod.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Performance Impact Row */}
            <div className="mt-20 border-t border-white/5 pt-12">
                <div className="mb-8">
                    <span className="font-header text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// Operational_Telemetry</span>
                    <h2 className="font-header text-lg uppercase tracking-tight text-white/90">{study.metricsTitle}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.metrics.map((metric, i) => {
                        let colorClasses = "border-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.05)] text-neon-cyan";
                        if (metric.accentColor === "pink") colorClasses = "border-neon-pink shadow-[0_0_15px_rgba(255,0,229,0.05)] text-neon-pink";
                        if (metric.accentColor === "green") colorClasses = "border-[var(--color-neon-green)] shadow-[0_0_15px_rgba(0,255,0,0.05)] text-[var(--color-neon-green)]";
                        if (metric.accentColor === "teal") colorClasses = "border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.05)] text-teal-400";

                        return (
                            <div key={i} className={`bg-white/1 border rounded-lg p-6 text-center ${colorClasses}`}>
                                <span className="font-header text-[9px] tracking-widest text-white/30 block mb-2 uppercase">{metric.label}</span>
                                <div className="font-header text-2xl sm:text-3xl font-bold tracking-tight mb-1">{metric.value}</div>
                                <span className="font-body text-xs text-white/40 tracking-normal block">{metric.subtext}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Roadmap Closing Portal */}
            <div className="mt-12">
                <ConversionCard
                    heading="Have a similar technical problem?"
                    subHeading="Let's build a Solution System"
                    description="From data parsing microservices to highlt reilient server-rendered core frameworks, let's align our code directly with your performance indicators."
                />
            </div>

        </Section>
    );
}