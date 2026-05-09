import { Link, NavLink } from "react-router";

export default function NavBar() {
    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "About", to: "/about" },
        { name: "Contact", to: "/contact" },
    ];

    return(
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 by-cyper-bg/80 backdrop-blur-md">
            <div className="max-w 7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="font-header text-2xl text-neon-cyan tracking-tighterhover:glow-cyan transition-all">
                    Beyond Binary
                </Link>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => `font-body text-sm  uppercase tracking-widest transition-colors hover:text-neon-pink ${ isActive ? "text-neon-cyan" : "text-white/70" }`}>
                            {link.name}
                        </NavLink>
                    ))}
                    {/* Action Button */}
                    <Link
                        to="/contact"
                        className="ml-4 px-5 py-2 border border-neon-cyan text-neon-cyan text-xs font-bold rounded uppercase hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_10px_rgba(0,242,255,0.3)]">
                        Start Project
                    </Link>
                </div>
            </div>
        </nav>
    )
}