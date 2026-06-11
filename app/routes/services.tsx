import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import ServiceGrid from "~/features/services/ServiceGrid";
import ProcessFlow from "~/features/services/ProcessFlow";
import ConversionCard from "~/components/ui/ConversionCard";

export default function ServicesPage() {
    return (
        <Section id="services-view" className="bg-cyber-bg">
            <PageHeader
                subTitle="Capabilities Matrix"
                mainTitleNormal="Our"
                mainTitleAccent="Services"
                accentColor="pink"
                description="Turn-key engineering solutions with modern design patterns and a clean compiler strategy."
            />
            <ServiceGrid />
            <ProcessFlow />
            <ConversionCard
                heading="Want to know more about our services??"
                subHeading="Let's Do This Shit!"
                description="We can engineer clean frontend systems to reliable backend databases, your application will be built with total architectural prcision. Let's discuss your product scope."
            />
        </Section>
    );
}