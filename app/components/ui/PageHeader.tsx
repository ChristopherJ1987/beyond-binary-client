interface PageHeaderProps {
    subTitle: string;
    mainTitleNormal: string;
    mainTitleAccent: string;
    accentColor?: "cyan" | "pink";
    description: string;
}

export default function PageHeader({
    subTitle,
    mainTitleNormal,
    mainTitleAccent,
    accentColor = "cyan",
    description
}: PageHeaderProps) {

    const accentShadow = accentColor === "cyan"
        ? "text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]"
        : "text-neon-pink drop-shadow-[0_0_15px_rgba(255,0,229,0.5)]";

    return (
        <div className="w-full text-center max-w-4xl mx-auto flex flex-col items-center justify-center mb-16 md:mb-24">

            {/* Accent Subtitle */}
            <span className="font-body text-xs tracking-[0.3em] text-neon-cyan uppercase mb-4 block">
                // {subTitle}
            </span>

            {/* Title Engine */}
            <h1 className="font-header text-4xl sm:text-5xl md:text-6xl uppercase italic tracking-tight text-white leading-none">
                {mainTitleNormal} <span className={accentShadow}>{mainTitleAccent}</span>
            </h1>

            {/* Muted Context Line */}
            <p className="font-body text-white/50 text-sm sm:text-base max-w-xl mt-6 leading-relaxed italic">
                {description}
            </p>

            <div className="w-12 h-px bg-white/10 mt-8" />
        </div>
    )

}