import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import ContactHeader from "~/features/contact/ContactHeader";
import ContactForm from "~/features/contact/ContactForm";

export default function ContactPage() {
    return (
        <Section id="contact-view" className="bg-cyber-bg min-h-screen pt-28pb-24 text-white">
            <PageHeader
                subTitle="Plug into the Matrix"
                mainTitleNormal="Initiate"
                mainTitleAccent="Virtual Contact"
                accentColor="cyan"
                description="Secure communications array coming soon. Prepare your variables."
            />
            <div className="max-w-2xl mx-auto border border-white/5 rounded-lg p-6 sm:p-10 bg-white/1 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <ContactHeader />
                <ContactForm />
            </div>
        </Section>
    );
}