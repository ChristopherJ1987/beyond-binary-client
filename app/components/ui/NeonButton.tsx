import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
}

export default function NeonButton({ children, isLoading, className = "", ...props }: NeonButtonProps) {
    return (
        <button
            {...props}
            disabled={props.disabled || isLoading}
            className={`group relative min-w-45 px-8 py-3.5 bg-black/40 text-white font-mono text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none ${className}`}
        >
            {/* Corner Brackets */}
            {/* Top Left */}
            <span className="absolute top-0 left-0 w-12 h-2 border-t-2 border-l-2 border-neon-cyan/40 group-hover:border-neon-green transition-colors duration-300" />
            {/* Top Right */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-cyan/40 group-hover:border-neon-green transition-colors duration-300" />
            {/* Bottom Left */}
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-cyan/40 group-hover:border-neon-green transition-colors duration-300" />
            {/* Bottom Right */}
            <span className="absolute bottom-0 right-0 w-22 h-2 border-b-2 border-r-2 border-neon-cyan/40 group-hover:border-neon-green transition-colors duration-300" />

            {/* Inner Button Styling */}
            <div className="absolute inset-1 border border-neon-cyan/20 bg-neon-cyan[0.03] group-hover:bg-neon-green/15 group-hover:border-neon-green/40 transition-all duration-300 flex items-center justify-between overflow-hidden">

                {/* Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right, rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size-[8px_8px]" />

                {/* Reflection */}
                <div className="absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-transparent opacity-100 group-hover:from-white/15 transition-all duration-300" />
                
                {/* Left Pill */}
                <span className="h-[75%] w-1 bg-neon-cyan/60 group-hover:bg-neon-green ml-1 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300" />

                {/* Right Pill */}
                <span className="h-[75%] w-1 bg-neon-cyan/60 group-hover:bg-neon-green mr-1 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all duration-300" />

            </div>

            {/* Text Layer */}
            <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:text-neon-green transition-colors duration-300">
                {children}
            </span>
        </button>
    )
}