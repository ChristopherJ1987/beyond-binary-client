import Section from "~/components/layout/Section";
import NeonButton from "~/components/ui/NeonButton";

export default function Hero() {
    return (
        <Section
            id="hero"
            className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-0 md:py-0 overflow-hidden bg-cyber-bg"
        >
            {/* Content Container */}
            <div className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center justify-center">

                {/* Scaled Headline Engine */}
                <h1 className="font-header text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl mb-6 leading-none uppercase italic tracking-tight text-white">
                    Transform <br />
                    <span className="text-neon-cyan drop-shadow-[0_0_20px_rgba(0,242,255,0.6)] block my-3 whitespace-nowrap">
                        Your Digital
                    </span>
                    Presence
                </h1>

                <p className="font-body text-white/60 text-base sm:text-lg md:text-xl xl:text-2xl max-w-2xl mb-12 leading-relaxed italic">
                    Bridging the gap between raw code and humanity.
                </p>

                {/* Button Cluster */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0">
                    <NeonButton text="Get Started" to="/contact" variant="cyan" size="lg" className="w-full sm:w-auto" />
                    <NeonButton text="View Portfolio" to="/portfolio" variant="pink" size="lg" className="w-full sm:w-auto" />
                </div>
            </div>
        </Section>
    );
}