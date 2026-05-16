import { Link } from "react-router";

interface NeonButtonProps {
    text: string;
    to: string;
    variant?: "cyan" | "pink";
    size?: "sm" | "md" | "lg";
    className: string;
}

export default function NeonButton({ text, to, variant = "cyan", size = "md", className = "" }: NeonButtonProps) {

    const baseClass = "inline-block border-2 rounded-sm font-header tracking-widest transition-all duration-300 hover:-translate-y-1 text-center";

    const variantStyles = {
        cyan: "border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:bg-neon-cyan hover:text-black",
        pink: "border-neon-pink text-neon-pink shadow-[0_0_15px_rgba(255,0,229,0.3)] hover:bg-neon-pink hover:text-white"
    };

    const sizeStyles = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-sm"
    };

    return (
        <Link
            to={to}
            className={`${baseClass} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {text}
        </Link>
    );
}