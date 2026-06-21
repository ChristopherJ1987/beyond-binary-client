import type { CaseStudyData } from "~/lib/caseStudies";

interface TelemetryImpactRowProps {
    study: CaseStudyData;
}

export default function TelemetryImpactRow({ study }: TelemetryImpactRowProps) {
    return (
        <div className="mt-20 border-t border-white/5 pt-12">
            <div className="mb-8">
                <span className="font-body text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// Operational_Telemetry</span>
                <h2 className="font-header text-lg uppercase tracking-tight text-white/90">{study.metricsTitle}</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {study.metrics.map((metric, i) => {
                    let colorClasses = "border-neon-cyan shadow-[0_0_15px_rgba(242,255,0,0.05)] text-neon-cyan";
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
    );
}