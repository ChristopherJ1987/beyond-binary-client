import Section from "~/components/layout/Section";

export default function ServicesPage() {
    return (
        <Section id="services-view" className="bg-cyber-bg min-h-[70vh] flex flex-col justify-center">
            <h1 className="font-header text-4xl md:text-6xl text-white uppercase italic tracking-tight">
                Our <span className="text-neon-pink">Capabilities</span>
            </h1>
            <p className="font-body text-white/40 mt-4 max-w-md italic">
                The technical primitives and service architecture schemas are loading.
            </p>
        </Section>
    );
}