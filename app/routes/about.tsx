import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import AboutHero from "~/features/about/AboutHero";
import CoreValues from "~/features/about/CoreValues";
import CareerJourney from "~/features/about/CareerJourney";
import TechnicalArsenal from "~/features/about/TechnicalArsenal";

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
            <AboutHero />
            <CoreValues />
            <CareerJourney />
            <TechnicalArsenal />
        </Section>
    )
}