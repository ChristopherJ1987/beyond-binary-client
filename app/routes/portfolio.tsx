import Section from "~/components/layout/Section";
import PageHeader from "~/components/ui/PageHeader";
import ProjectGrid from "~/features/portfolio/ProjectGrid";

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
        </Section>
    );
}