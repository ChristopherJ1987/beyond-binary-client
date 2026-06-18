import { RiExternalLinkLine, RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router";
import { projects } from "~/lib/projects";

export default function ProjectGrid() {
    return (
        <div className="w-full text-white mt-12">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative flex flex-col justify-between bg-white/1 border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/2 hover:border-white/10"
                    >

                        <div className="relative w-full aspect-video bg-white/2 border-b border-white/5 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-102 transition-all duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
                                }}
                            />

                            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider text-white/60 font-header">
                                {project.category}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start gap-4 mb-3">
                                <h3 className="font-header text-md sm:text-lg uppercase tracking-tight text-white/90 group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                                    {project.title}
                                </h3>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/40 hover:text-neon-cyan transition-colors duration-300 pt-1"
                                        title="View Live Application"
                                    >
                                        <RiExternalLinkLine className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            <p className="font-body text-xs sm:text-sm text-white/50 leading-relaxed mb-6 line-clamp-4">
                                {project.description}
                            </p>
                        </div>

                        <div className="px-6 pb-6 mt-auto">
                            <div className="flex flex-wrap gap-1.5 mb-6 border-t border-white/5 pt-4">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="font-body text-[10px] px-2 py-0.5 rounded-md bg-white/2 border border-white/5 text-white/40 select-none group-hover:text-white/60 group-hover:border-white/10 transition-solors duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={project.caseStudySlug ? `/portfolio/${project.caseStudySlug}` : "#"}
                                className={`font-header text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5 transition-all duration-300 ${project.caseStudySlug ? "text-neon-pink hover:text-white hover:translate-x-1" : "text-white/20 cursor-not-allowed select-none"}`}
                                onClick={(e) => !project.caseStudySlug && e.preventDefault()}
                            >
                                <span>{project.caseStudySlug ? "Explore Case Study" : "[Case Study Pending]"}</span>
                                {project.caseStudySlug && <RiArrowRightUpLine className="w-3.5 h-3.5" />}
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}