import { Link } from "react-router";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 bg-cyber-bg py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-header text-xl text-neon-cyan">BEYOND BINARY</h3>
                    <p className="font-body text-sm text-white/40 max-w-[250px]">Bridging the gap between raw code and human-centric design.</p>
                </div>

                {/* Quick Links */}
                <div className="flex justify-center gap-8">
                    <Link to="/portfolio" className="text-white/60 hover:text-neon-pink text-sm font-body">Work</Link>
                    <Link to="/services" className="text-white/60 hover:text-neon-pink text-sm font-body">Services</Link>
                    <Link to="/contact" className="text-white/60 hover:text-neon-pink text-sm font-body">Contact</Link>
                </div>

                {/* Copyright & Social */}
                <div className="flex flex-col items-end gap-2 text-sm font-body text-white/30">
                    <div className="flex gap-4 mb-2">
                        {/* Replace # with your actual social links */}
                        <a href="#" className="hover:text-neon-cyan transition-colors italic">GitHub</a>
                        <a href="#" className="hover:text-neon-cyan transition-colors italic">LinkedIn</a>
                    </div>
                    <p>© {currentYear} Beyond Binary. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}