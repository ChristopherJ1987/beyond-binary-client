import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import ServiceGrid from "~/features/services/ServiceGrid";
import ProcessFlow from "~/features/services/ProcessFlow";

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
        </Section>
    );
}