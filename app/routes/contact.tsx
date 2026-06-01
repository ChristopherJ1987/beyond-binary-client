import Section from "~/components/layout/Section";

export default function ContactPage() {
    return (
        <Section id="contact-view" className="bg-cyber-bg min-h-[70vh] flex flex-col justify-center">
            <h1 className="font-header text-4xl md:text-6xl text-white uppercase italic tracking-tight">
                Initiate <span className="text-neon-cyan">Handshake</span>
            </h1>
            <p className="font-body text-white/40 mt-4 max-w-md italic">
                Secure communications array coming soon. Prepare your variables.
            </p>
        </Section>
    );
}