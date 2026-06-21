import { Link } from "react-router";
import { RiArrowLeftLine } from "react-icons/ri";
import Section from "~/components/layout/Section";

interface CaseStudyNotFoundProps {
    slug: string | undefined;
}

export default function CaseStudyNotFound({ slug }: CaseStudyNotFoundProps) {
    return (
        <Section id="not-found" className="bg-cyber-bg min-h-screen pt-32 text-center text-white">
            <div className="max-w-md mx-auto border border-white/5 rounded-lg p-8 bg-white/1">
                <span className="font-body text-xs tracking-widest text-neon-green uppercase block mb-4">
                    // System Link Failure
                </span>
                <h1 className="font-header text-lg uppercase tracking-tight text-white mb-2">
                    This Case Study Has Not Yet Undergone Construction
                </h1>
                <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed mb-6">
                    The requested engineering log <code className="text-neon-cyan bg-white/5 px-1 py-0.5 rounded">[{slug}]</code> exists only in the theoretical future.
                </p>
                <Link
                    to="/portfolio"
                    className="font-body text-xs uppercase tracking-wider text-neon-magenta hover:text-white flex items-center justify-center gap-2 transition-aolors suration-300"
                >
                    <RiArrowLeftLine className="w-4 h-4" /> Return to Portfolio Annals
                </Link>
            </div>
        </Section>
    );
}