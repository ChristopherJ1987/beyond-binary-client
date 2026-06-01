import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";

export default function AboutPage() {
    return (
        <Section id="about-view" className="bg-cyber-bg">
            <PageHeader
                subTitle="Matrix History"
                mainTitleNormal="About"
                mainTitleAccent="Beyond Binary"
                accentColor="pink"
                description="Initializing Beyond Binary history and data grid."
            />
        </Section>
    )
}