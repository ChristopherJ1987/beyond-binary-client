import Section from "~/components/layout/Section";
import NeonButton from "~/components/ui/NeonButton";

export default function FinalCTA() {
    return (
        <Section id="contact" className="border-t border-white/5 relative bg-cyber-bg">

            <div className="relative z-10 bg-card-bg/60 backdrop-blur-md border border-white/5 p-12 md:p-20 text-center rounded-sm w-full">
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <h2 className="font-header text-4xl md:text-6xl text-white uppercase italic mb-6 leading-tight tracking-tight">
                        Ready to move <br />
                        <span className="text-neon-pink drop-shadow-[0_0_20px_rgba(255,0,229,0.4)] block mt-2">
                            Beyond the Binary?
                        </span>
                    </h2>

                    <p className="font-body text-white/50 max-w-xl mx-auto mb-10 italic text-base md:text-lg leading-relaxed">
                        Whether you have a specific project in mind or just want to explore the possibilities, let's talk some shit!
                    </p>

                    {/* Responsive Button Cluster */}
                    <div className="flex flex-col  sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0 justify-center">
                        <NeonButton 
                            text="Talk Some Shit"
                            to="/contact"
                            variant="cyan"
                            size="lg"
                            className="w-full sm:w-auto"
                        />
                        <NeonButton 
                            text="View Services"
                            to="/services"
                            variant="pink"
                            size="lg"
                            className="w-full sm:w-auto"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}