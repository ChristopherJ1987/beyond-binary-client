import { Link } from "react-router";
import type { Project } from "~/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative flex flex-col bg-card-bg border border-white/5 overflow-hidden transition-all duration-500 hover:border-neon-cyan/30 w-full h-full">
            
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-cyber-bg via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col grow gap-3">
                
                {/* Category & Tags */}
                <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neon-pink font-body">
                        {project.category}
                    </span>
                    <div className="flex gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] text-white/40 border border-white/10 px-2 py-0.5 rounded-full uppercase italic">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Title Container */}
                <div className="h-14 flex items-end">
                    <h3 className="font-header text-xl text-white tracking-tight group-hover:text-neon-cyan transition-colors line-clamp-2 leading-tight">
                        {project.title}
                    </h3>
                </div>

                {/* Description Box */}
                <div className="grow">
                    <p className="font-body text-sm text-white/50 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Action Links */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-6">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-body text-white uppercase tracking-widest border-b border-neon-cyan pb-1 hover:text-neon-cyan transition-all w-fit"
                    >
                        Visit Site →
                    </a>
                    <Link
                        to={`/portfolio/${project.caseStudySlug}`}
                        className="text-[11px] font-body text-white uppercase tracking-widest border-b border-neon-cyan pb-1 hover:text-neon-cyan transition-all w-fit"
                    >
                        View Case Study →
                    </Link>
                </div>
            </div>
        </div>
    );
}