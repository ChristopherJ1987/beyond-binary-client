import type { CaseStudyData } from "~/lib/caseStudies";

interface ArchitectureGridProps {
    study: CaseStudyData;
}

export default function ArchitectureGrid({ study }: ArchitectureGridProps) {
    return (
        <div className="mt-20 border-t border-white/5 pt-12">
            <div className="mb-8">
                <span className="font-header text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">
                    // System Architecture
                </span>
                <h2 className="font-header text-lg uppercase tracking-tight text-white/90">
                    {study.modulesTitle}
                </h2>
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
    );
}