import Section from "~/components/layout/Section";
import ProjectCard from "~/components/ui/ProjectCard";
import { projects } from "~/lib/projects";
import { Link } from "react-router";

export default function FeaturedProjects() {
    // Only get projects marked as featured
    const featuredWork = projects.filter((p) => p.isFeatured).slice(0, 3);

    return (
        <Section id="work" className="bg-cyber-bg">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="font-header text-4xl md:text-6xl text-white uppercase italic leading-none">
                        Selected <span className="text-neon-cyan">Works</span>
                    </h2>
                    <p className="font-body text-white/40 mt-4 max-w-md italic">
                        A curation of digital experiences where performance meets precision design.
                    </p>
                </div>

                <Link
                    to="/portfolio"
                    className="font-header text-xs tracking-[0.3em] text-white/60 hover:text-neon-cyan transition-all border-b border-white/10 pb-2 uppercase"
                >
                    View All Projects →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {featuredWork.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
}