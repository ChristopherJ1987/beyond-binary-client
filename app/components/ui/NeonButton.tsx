import { Link } from "react-router";

interface NeonButtonProps {
    text: string;
    to: string;
    variant?: "cyan" | "pink";
    size?: "sm" | "md" | "lg";
    className: string;
}

export default function NeonButton({ 
    text,
    to,
    variant = "cyan",
    size = "md",
    className = ""
}: NeonButtonProps) {

    // Core Structure
    const baseClass = "inline-block font-header tracking-widest transition-all duration-300 uppercase italic select-none rounded-xs border text-center relative overflow-hidden group/button";

    // Style Matrix
    const variantStyles = {
        cyan: [
            "border-neon-cyan/40 text-neon-cyan bg-neon-cyan/5",
            "shadow-[0_0_15px_rgba(0,242,255,0.15),inset_0_0_10px_rgba(0,242,255,0.05)]",
            "hover:border-neon-cyan hover:text-black hover:bg-neon-cyan",
            "hover:shadow-[0_0_30px_rgba(0,242,255,0.6),0_0_60px_rgba(0,242,255,0.3)]"
        ].join(" "),
        pink:  [
            "border-neon-pink/40 text-neon-pink bg-neon-pink/5",
            "shadow-[0_0_15px_rgba(255,0,229,0.15),inset_0_0_10px_rgba(255,0,229,0.05)]",
            "hover:border-neon-pink hover:text-white hover:bg-neon-pink",
            "hover:shadow-[0_0_30px_rgba(255,0,229,0.6),0_0_60px_rgba(255,0,229,0.3)]"
        ].join(" ")
    };

    const sizeStyles = {
        sm: "px-5 py-2.5 text-xs tracking-[0.15em]",
        md: "px-7 py-3.5 text-sm tracking-[0.2em]",
        lg: "px-9 py-4 text-base tracking-[0.25em]"
    };

    return (
        <Link
            to={to}
            className={`${baseClass} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {/* Structural text container */}
            <span className="relative z-10 block transition-transform duration-300 group-hover/button:scale-[1.02]">
                {text}
            </span>
        </Link>
    );
}