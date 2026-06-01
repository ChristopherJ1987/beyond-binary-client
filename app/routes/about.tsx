import Section from "~/components/layout/Section";

export default function AboutPage() {
    return (
        <Section id="about-view" className="bg-cyber-bg min-h-[70vh] flex flex-col justify-center">
            <h1 className="font-header text-4xl md:text-6xl text-white uppercase italic tracking-tight">
                About <span className="text-neon-pink">Beyond Binary</span>
            </h1>
            <p className="font-body text-white/40 mt-4 max-w-md italic">
                Initializing Beyond Binary data grid.
            </p>
        </Section>
    )
}