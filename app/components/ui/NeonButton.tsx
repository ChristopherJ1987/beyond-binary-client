import { Link } from "react-router";

interface NeonButtonProps {
    children: React.ReactNode;
    variant?: "cyan" | "pink" | "outline";
    size?: "sm" | "md" | "lg";
    to: string;
    className: string;
}

export default function NeonButton({ children, variant = "cyan", size = "md", to, className = "" }: NeonButtonProps) {

    const baseStyles = "font-header tracking-[0.2em] uppercase transition-all duration-300 inline-block text-center";

    const variantStyles = {
        cyan: "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_rgba(5,255,255,0.5)]",
        pink: "bg-neon-pink/10 text-neon-pink border border-neon-pink/50 hover:bg-neon-pink hover:text-black hover-shadow-[0_0_20px_rgba(255,46,154,0.5)]",
        outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5"
    };

    const sizeStyles = {
        sm: "px-4 py-2 text-[10px]",
        md: "px-6 py-3 text-xs",
        lg: "px-10 py-4 text-sm"
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    // const glowClass = variant === "cyan" ? "border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:bg-neon-cyan hover:text-black" : "border-neon-pink text-neon-pink shadow-[0_0_15px_rgba(255,0,229,0.3)] hover:ng-neon-pink hover:text-white";

    return (
        <button className={combinedStyles}>
            {children}
        </button>
    );
}