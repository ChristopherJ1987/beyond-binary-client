import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import ContactForm from "~/features/contact/ContactForm";
import ContactSidebar from "~/features/contact/ContactSidebar";
import ContactFAQ from "~/features/contact/ContactFAQ";

export default function ContactRoute() {
    return (
        <Section id="contact-portal" className="bg-cyber-bg min-h-screen pt-24 pb-24 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <PageHeader
                    subTitle="Plug into the Matrix"
                    mainTitleNormal="Initiate"
                    mainTitleAccent="Virtual Contact"
                    accentColor="cyan"
                    description="Secure communications array coming soon. Prepare your variables."
                />
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 items-start mt-12">
                    <div className="lg:col-span-8">
                        <ContactForm />
                    </div>
                    <div className="lg:col-span-4">
                        <ContactSidebar />
                    </div>
                </div>
            </div>  
            <ContactFAQ />
        </Section>
    );
}