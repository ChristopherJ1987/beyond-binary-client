import { Link } from "react-router";

interface ConversionCardProps {
    heading?: string;
    subHeading?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function ConversionCard({
    heading = "Ready to move beyond the binary?",
    subHeading = "Let's Talk Some Shit",
    description = "Whether you need a specialized website or application, all systems are built upon a foundation of precision engineering.",
    buttonText = "Initiate Project Request",
    buttonLink = "/contact"
}: ConversionCardProps) {
    return (
        <div className="w-full text-white mt-28 md:mt-36">

            <div className="relative w-full rounded-xl border border-white/5 bg-linear-to-b from-white/2 to-transparent p-8 md:p-12 text-center overflow-hidden max-w-5xl mx-auto">
            
                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <span className="font-header text-[10px] sm:text-xs tracking-[0.3em] text-neon-cyan uppercase block mb-3">
                        // {heading}
                    </span>

                    <h3 className="font-header text-xl sm:text-3xl uppercase italic tracking-tight mb-4 text-white leading-tight">
                        {subHeading}
                    </h3>

                    <p className="font-body text-xm text-white/50 leading-relaxed mb-8">
                        {description}
                    </p>

                    <Link
                        to={buttonLink}
                        className="group inline-block px-6 py-3 rounded-md border border-neon-cyan font-header text-sm tracking-wider uppercase font-semibold transition-all duration-300 hover:bg-neon-pink hover:border-neon-pink hover:text-black hover-scale-105 scative:scale-98"
                    >
                        {buttonText}
                    </Link>
                </div>

            </div>
        </div>
    );
}