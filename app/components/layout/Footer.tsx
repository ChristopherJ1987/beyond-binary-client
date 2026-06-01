import { Link } from "react-router";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 bg-cyber-bg py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-header text-xl text-neon-cyan">BEYOND BINARY</h3>
                    <p className="font-body text-sm text-white/40 max-w-62.5">Bridging the gap between raw code and human-centric design.</p>
                </div>

                {/* Quick Links */}
                <div className="flex justify-center gap-8">
                    <Link to="/portfolio" className="text-white/60 hover:text-neon-pink text-sm font-body">Work</Link>
                    <Link to="/services" className="text-white/60 hover:text-neon-pink text-sm font-body">Services</Link>
                    <Link to="/contact" className="text-white/60 hover:text-neon-pink text-sm font-body">Contact</Link>
                </div>

                {/* Copyright & Social */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 text-sm font-body text-white/30">
                    <div className="flex gap-4 mb-2">
                        <div className="flex items-center gap-6">
                            {/* GitHub Link */}
                            <a 
                                href="https://github.com/ChristopherJ1987" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Visit Beyond Binary GitHub Organization"
                                className="text-white/40 hover:text-neon-cyan transition-all duration-300 transform hover:scale-110"
                            >
                                <SiGithub className="w-5 h-5" />
                            </a>

                            {/* LinkedIn Link */}
                            <a 
                                href="https://www.linkedin.com/in/chris-jones-299178397/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Connect with Beyond Binary on LinkedIn"
                                className="text-white/40 hover:text-neon-pink transition-all duration-300 transform hover:scale-110"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <p>© {currentYear} Beyond Binary. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}