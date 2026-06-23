import { RiMailLine, RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine, RiInstagramLine, RiShieldKeyholeLine, RiRadarLine } from "react-icons/ri";

export default function ContactSidebar() {
    return (
        <div className="flex flex-col gap-4">

            {/* Direct Email */}
            <div className="bg-white/2 border border-white/5 rounded-lg p-5">
                <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded bg-white/5 border border-white/5 text-neon-cyan">
                        <RiMailLine className="text-lg" />
                    </div>
                    <div className="min-w-0">
                        <span className="text-[10px] tracking-widest text-white/70 uppercase block font-mono">// Direct_Email</span>
                        <a href="mailto:christopherbjones1987@yahoo.com" className="font-body text-xs text-white/50 hover:text-neon-cyan transition-colors duration-200 mt-1 block break-all">
                            christopherbjones1987@yahoo.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Secure Portal */}
            <div className="bg-white/2 border border-white/5 rounded-lg p-5">
                <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded bg-white/5 border border-white/5 text-neon-pink">
                        <RiShieldKeyholeLine className="text-lg" />
                    </div>
                    <div>
                        <span className="text-[10px] tracking-widest text-white/70 uppercase block font-mono">// Secure Portal</span>
                        <p className="font-body text-xs text-white/50 mt-1 leading-normal">
                            All inputs parsed via secure JSON streams. Credentials never retained on raw data stores.
                        </p>
                    </div>
                </div>
            </div>

            {/* Geographic Location */}
            <div className="bg-white/2 border border-white/5 rounded-lg p-5">
                <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded bg-white/5 border border-white/5 text-neon-green">
                        <RiRadarLine className="text-lg" />
                    </div>
                    <div>
                        <span className="text-[10px] tracking-widest text-white/70 uppercase block font-mono">// Geographic Location</span>
                        <p className="font-body text-xs text-white/50 mt-1 leading-normal">
                            Operating Base: Based in the State of Texas in the United States of America
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Media Icon Links */}
            <div className="bg-white/2 border border-white/5 rounded-lg p-5">
                <span className="text-[10px] tracking-widest text-white/30 uppercase block font-mono mb-3.5">// Social_Links</span>
                <div className="grid grid-cols-4 gap-2">
                    <a href="https://github.com" target="_blank"
                    rel="noopener noreferrer" className="flex items-center justify-center py-2.5 rounded bg-white/5 border border-neon-cyan/30 text-neon-cyan hover:text-neon-yellow hover:border-neon-yellow/30 transition-all duration-300">
                        <RiGithubLine className="text-lg" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2.5 rounded bg-white/5 border border-neon-pink/30 text-neon-pink hover:text-neon-yellow hover:border-neon-yellow/30 transition-all duration-300">
                        <RiLinkedinBoxLine className="text-lg" />
                    </a>
                    <a href="https://x.com" target="_blank"
                    rel="noopener noreferrer" className="flex items-center justify-center py-2.5 rounded bg-white/5 border border-neon-green/30 text-neon-green hover:text-neon-yellow hover:border-neon-yellow/30 transition-all duration-300">
                        <RiTwitterXLine className="text-lg" />
                    </a>
                    <a href="https://instagram.com" target="_blank"
                    rel="noopener noreferrer" className="flex items-center justify-center py-2.5 rounded bg-white/5 border border-neon-cyan/30 text-neon-cyan hover:text-neon-yellow hover:border-neon-yellow/30 transition-all duration-300">
                        <RiInstagramLine className="text-lg" />
                    </a>
                </div>
            </div>
        
        </div>
    );
}