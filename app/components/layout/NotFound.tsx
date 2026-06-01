import { Link } from "react-router";
import Section from "~/components/layout/Section";
import NeonButton from "~/components/ui/NeonButton";

export default function NotFound() {
    return (
        <Section
            id="not-found"
            className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-0 md:py-0 overflow-hidden bg-cyber-bg"
        >
            <div className="relative z-10 text-center max-w-2xl mx-auto flex- flex-col items-center justify-center w-full px-6">

                <h1 className="font-header text-8xl sm:text-9xl md:text-[12rem] leading-none uppercase italic tracking-tighter text-white/5 select-none font-black">
                    404
                </h1>
                <h2 className="font-header text-2xl sm:text-4xl text-white uppercase italic mt-4 mb-6 leading-tight tracking-tight">
                    Route <span className="text-neon-pink drop-shadow-[0_0_15px_rgba(255,0,229,0.4)]">Decompiled</span>
                </h2>
                <p className="font-body text-white/50 text-sm sm:text-base mb-10 leading-relaxed max-w-md mx-auto italic">
                    The requested data sequence does not exist within our current parameters. It may be impossible to prove something does not exist --- so maybe the fact that you are here is proof that this does indeed exist
                </p>

                <div className="w-full sm:w-auto">
                    <NeonButton
                        text="Return to Grid Core"
                        to="/"
                        variant="cyan"
                        size="lg"
                        className="w-full sm:w-auto"
                    />
                </div>

            </div>
        </Section>
    );
}