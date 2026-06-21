import type { CaseStudyData } from "~/lib/caseStudies";

interface CaseStudyHeroProps {
    study: CaseStudyData;
}

export default function CaseStudyHero({ study }: CaseStudyHeroProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

            {/* Left Header */}
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

            {/* Right Header Image Area */}
            <div className="lg:col-span-5 w-full aspect-video rounded-lg border border-white/5 bg-white/2 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <img
                    src={study.image}
                    alt={study.projectTitle}
                    className="w-full h-full object-cover opacity-70"
                />
            </div>
        </div>
    );
}