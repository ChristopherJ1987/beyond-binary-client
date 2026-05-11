interface ProcessCardProps {
    number: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function ProcessCard({ number, title, description, icon }: ProcessCardProps) {
    return(
        <div className="group relative p-8 bg-card-bg border border-white/5 rounded-sm transition-all duration-500 hover:border-neon-cyan/50 hover:-translate-y-2">
            {/* Subtle Glow Effect on Hover */}
            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
                <span className="font-header text-neon-pink text-xs tracking-widest uppercase mb-4 block">
                    Phase {number}
                </span>
                <h3 className="font-header text-2xl text-white mb-4 group-hover:text-neon-cyan transition-colors">
                    {title}
                </h3>
                <p className="font-body text-white/50 leading-relaxed text-sm">
                {description}
                </p>
            </div>
        </div>
    );
}