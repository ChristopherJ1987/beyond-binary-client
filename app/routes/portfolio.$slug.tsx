import { useParams, Link } from "react-router";
import { caseStudies } from "~/lib/caseStudies";
import Section from "~/components/layout/Section";
import CaseStudyNotFound from "~/features/portfolio/CaseStudyNotFound";
import CaseStudyHero from "~/features/portfolio/caseStudyHero";
import CaseStudyNarrative from "~/features/portfolio/caseStudyNarrative";
import CaseStudySidebar from "~/features/portfolio/caseStudySidebar";
import ArchitectureGrid from "~/features/portfolio/ArchitectureGrid";
import TelemetryImpactRow from "~/features/portfolio/TelemetryImpactRow";
import ConversionCard from "~/components/ui/ConversionCard";

export default function CaseStudyDetailRoute() {

    const { slug } = useParams();
    const study = slug ? caseStudies[slug] : null;

    // Fallback Boundary
    if (!study) {
        return <CaseStudyNotFound slug={slug} />
    }

    return (
        <Section id={`case-study-${study.slug}`} className="bg-cyber-bg min-h-screen pt-24 pb-24 text-white">
            <CaseStudyHero study={study} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-white/5 pt-12">
                <CaseStudyNarrative study={study} />
                <div className="lg:col-span-4">
                    <CaseStudySidebar study={study} />
                </div>
            </div>
            <ArchitectureGrid study={study} />
            <TelemetryImpactRow study={study} />
            <ConversionCard
                heading="Have a similar technical problem?"
                subHeading="Let's build a Solution System"
                description="From data parsing microservices to highlt reilient server-rendered core frameworks, let's align our code directly with your performance indicators."
            />
        </Section>
    );
}