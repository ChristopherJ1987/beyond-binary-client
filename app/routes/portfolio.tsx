import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import ProjectGrid from "~/features/portfolio/ProjectGrid";
import ConversionCard from "~/components/ui/ConversionCard";

export default function PortfolioPage() {
    return (
        <Section id="portfolio-view" className="bg-cyber-bg">
            <PageHeader
                subTitle="Matrix Grid"
                mainTitleNormal="Selected"
                mainTitleAccent="Works"
                accentColor="cyan"
                description="Engineering layout coming soon. The portfolio grid is being initialized and connected."
            />
            <ProjectGrid />
            <ConversionCard
                heading="Have a Product Blueprint?"
                subHeading="Let's Architect Your Solution"
                description="Let's turn your raw business goals into tried and tested applcations!"
            />
        </Section>
    );
}