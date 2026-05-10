import { Link } from "react-router";

interface NeonButtonProps {
    text: string;
    to: string;
    variant?: "cyan" | "pink";
}

export default function NeonButton({ text, to, variant = "cyan" }: NeonButtonProps) {
    const glowClass = variant === "cyan" ? "border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:bg-neon-cyan hover:text-black" : "border-neon-pink text-neon-pink shadow-[0_0_15px_rgba(255,0,229,0.3)] hover:ng-neon-pink hover:text-white";

    return (
        <Link
            to={to}
            className={`inline-block px-8 py-4 border-2 rounded-sm font-header tracking-widest text-sm transition-all duration-300 hover:-translate-y-1 ${glowClass}`}>
            {text}
        </Link>
    );
}