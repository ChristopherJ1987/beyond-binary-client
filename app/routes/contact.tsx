import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";

export default function ContactPage() {
    return (
        <Section id="contact-view" className="bg-cyber-bg">
            <PageHeader
                subTitle="Plug into the Matrix"
                mainTitleNormal="Initiate"
                mainTitleAccent="Virtual Contact"
                accentColor="cyan"
                description="Secure communications array coming soon. Prepare your variables."
            />
        </Section>
    );
}