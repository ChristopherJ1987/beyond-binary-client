import Section from "~/components/layout/Section";
import NeonButton from "~/components/ui/NeonButton";

export default function FinalCTA() {
    return (
        <Section id="contact" className="py-24 border-t border-white/5">
            <div className="relative overflow-hidden bg-card-bg border-border-neon-cyan/20 p-12 md:p-20 text-center rounded-sm">
                {/* Subtle Background Glow */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon-pink/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-neon-cyan/10 blur-[100px] rounded-full" />

                <div className="relative z-10">
                    <h2 className="font-header text-4xl md:text-6xl text-white uppercase italic mb-6 leading-tight">
                        Ready to move <br />
                        <span className="text-neon-pink">Beyond the Binary?</span>
                    </h2>

                    <p className="font-body text-white/50 max-w-xl mx-auto mb-10 italic">
                        Whether you have a specific project in mind or just want to explore the possibilities, let's talk some shit!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <NeonButton text="Talk Some Shit" to="/contact" variant="cyan" size="lg" className={""} />
                        <NeonButton text="View Services" to="/services" variant="pink" size="lg" className={""} />
                    </div>
                </div>
            </div>
        </Section>
    );
}