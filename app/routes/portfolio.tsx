import Section from "~/components/layout/Section";

export default function PortfolioPage() {
    return (
        <Section id="portfolio-view" className="bg-cyber-bg min-h-[70vh] flex flex-col justify-center">
            <h1 className="font-header text-4xl md:text-6xl text-white uppercase italic tracking-tight">
                Selected <span className="text-neon-cyan">Works</span>
            </h1>
            <p className="font-body text-white/40 mt-4 max-w-md italic">
                Engineering layout coming soon. The portfolio grid is being initialized and connected.
            </p>
        </Section>
    );
}