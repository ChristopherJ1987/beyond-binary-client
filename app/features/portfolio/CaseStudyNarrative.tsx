import type { CaseStudyData } from "~/lib/caseStudies";

interface CaseStudyNarrativeProps {
    study: CaseStudyData;
}

export default function CaseStudyNarrative({ study }: CaseStudyNarrativeProps) {
    return (
        <div className="lg:col-span-8 space-y-12">

            {/* The Challenge */}
            <div>
                <span className="font-body text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">
                    // Project Overview
                </span>
                <h2 className="font-header text-lg uppercase tracking-tight text-white/90 mb-4">
                    The Challenge
                </h2>
                <div className="space-y-4 font-body text-sm text-white/50 leading-relaxed">
                    {study.challengeParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>

            {/* The Solution */}
            <div>
                <span className="font-body text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">
                    // Implementation
                </span>
                <h2 className="font-header text-lg uppercase tracking-tight text-white/90 mb-4">
                    The Solution
                </h2>
                <div className="space-y-4 font-body text-sm text-white/50 leading-relaxed">
                    {study.solutionParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>

        </div>
    );
}