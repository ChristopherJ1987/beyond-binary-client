interface TechCategory {
    title: string;
    description: string;
    skills: string[];
    accentColor: "cyan" | "pink";
}

export default function TechnicalArsenal() {

    const categories: TechCategory[] = [
        {
            title: "Frontend Development",
            description: "Engineering fluid, interactive architectures with clean reactive state models.",
            skills: ["React", "Typescript", "Tailwind CSS", "Remix / React-Router 7", "Vite", "Next.js", "HTML5", "CSS3", "Javascript"],
            accentColor: "cyan"
        },
        {
            title: "Backend & Systems Design",
            description: "Building robust data storage layers, relational models, and predictable server execution loops.",
            skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "Django", "Python", "Deployment Ops"],
            accentColor: "pink"
        },{
            title: "UI / UX Design & Tools",
            description: "Translating brand concepts into atomic system variables and developer-ready wireframes.",
            skills: ["VS Code", "Git", "Github", "Figma Design", "Responsive Layouts", "Typography Systems"],
            accentColor: "cyan"
        }
    ];

    return (
        <div className="w-full text-white mt-24 md:mt-32">

            {/* Section Header */}
            <div className="mb-12 text-center md:text-left">
                <span className="font-header text-xs tracking-[0.25em] text-neon-pink uppercase block mb-2">
                    // Capabilities Matrix
                </span>
                <h3 className="font-header text-xl sm:text-2xl uppercase italic tracking-light text-white/90">
                    The Technical <span className="text-neon-pink drop-shadow-[0_0_8px_rgba(255,0,229,0.3)]">Arsenal</span>
                </h3>
            </div>

            {/* Responsive Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => {
                    const pillGlow = category.accentColor === "cyan"
                        ? "hover:text-neon-cyan hover:border-neon-cyan/40 hover:bg-neon-cyan/[0.02]"
                        : "hover:text-neon-pink hover:border-neon-pink/40 hover:bg-neon-pink/[0.02";
                    
                    return (
                        <div
                            key={index}
                            className="group relative bg-white/[0.01] border border-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-white/[0.02] hover:border-white/10"
                        >
                            <h4 className="font-header text-lg uppercase tracking-tight text-white/90 mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                                {category.title}
                            </h4>
                            <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed mb-6">
                                {category.description}
                            </p>

                            {/* Skill Pills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`font-body text-xs px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-white/60 transition-all duration-300 select-none ${pillGlow}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}