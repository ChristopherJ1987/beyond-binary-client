import { RiTimeLine, RiCpuLine, RiUserLine } from "react-icons/ri";
import type { CaseStudyData } from "~/lib/caseStudies";

interface CaseStudySidebarProps {
    study: CaseStudyData;
}

export default function CaseStudySidebar({ study }: CaseStudySidebarProps) {
    return (
        <div className="space-y-8 lg:pl-4">

            {/* Client Profile Block */}
            <div className="bg-white/1 border border-white/5 rounded-lg p-5">
                <span className="font-header text-[10px] tracking-widest text-white/30 uppercase mb-4 flex items-center gap-1.5">
                    <RiUserLine className="text-neon-cyan" /> // Client Profile
                </span>
                <div className="space-y-2.5">
                    {study.clientProfile.map((prof, i) => (
                        <div key={i} className="flex justify-between items-baseline font-body text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-white/30 lowercase font-mono">{prof.label}</span>
                            <span className="text-white/70 font-medium">{prof.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Timeline Block */}
            <div className="bg-white/1 border border-white/5 rounded-lg p-5">
                <span className="font-body text-[10px] tracking-widest text-white/30 uppercase mb-4 flex items-center gap-1.5">
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
    );
}