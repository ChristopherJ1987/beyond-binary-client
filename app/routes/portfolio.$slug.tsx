import { useParams, Link } from "react-router";
import { RiArrowLeftLine } from "react-icons/ri";
import { caseStudies } from "~/lib/caseStudies";
import Section from "~/components/layout/Section";
import CaseStudyHero from "~/features/portfolio/caseStudyHero";
import CaseStudySidebar from "~/features/portfolio/caseStudySidebar";
import ArchitectureGrid from "~/features/portfolio/ArchitectureGrid";
import TelemetryImpactRow from "~/features/portfolio/TelemetryImpactRow";
import ConversionCard from "~/components/ui/ConversionCard";

export default function CaseStudyDetailRoute() {

    const { slug } = useParams();
    const study = slug ? caseStudies[slug] : null;

    // Fallback Boundary
    if (!study) {
        return (
            <Section id="not-found" className="bg-cyber-bg min-h-screen pt-32 text-center text-white">
                <div className="max-w-md mx-auto border border-white/5 rounded-lg p-8 bg-white/1">
                    <span className="font-header text-xs tracking-widest text-neon-pink uppercase block mb-4">// System Link Failure</span>
                    <h1 className="font-header text-lg uppercase tracking-tight text-white mb-2">Case Study Under Construction</h1>
                    <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed mb-6">
                        The requested engineering log <code className="text-neon-cyan bg-white/5 px-1 py-0.5 rounded">[{slug}]</code> has not been decrypted or published to the public ledger yet.
                    </p>
                    <Link to="/portfolio" className="font-header text-xs uppercase tracking-wider text-neon-cyan hover:text-white flex items-center justify-center gap-2 transition-colors duration-300">
                        <RiArrowLeftLine className="w-4 h-4" /> Return to Portfolio Annals
                    </Link>
                </div>
            </Section>
        );
    }

    return (
        <Section id={`case-study-${study.slug}`} className="bg-cyber-bg min-h-screen pt-24 pb-24 text-white">
            {/* Hero Architecture Block */}
            <CaseStudyHero study={study} />

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-white/5 pt-12">
                
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-12">

                    {/* The Challenge */}
                    <div>
                        <span className="font-body text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// Project_Overview</span>
                        <h2 className="font-header text-lg uppercase tracking-tight text-white/90 mb-4">The Challenge</h2>
                        <div className="space-y-4 font-body text-sm text-white/50 leading-relaxed">
                            {study.challengeParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* The Solution */}
                    <div>
                        <span className="font-body text-xs tracking-[0.25em] text-white/30 uppercase block mb-2">// Implementation</span>
                        <h2 className="font-header text-lg uppercase tracking-tight text-white/90 mb-4">The Solution</h2>
                        <div className="space-y-4 font-body text-sm text-white/50 leading-relaxed">
                            {study.solutionParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column */}
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