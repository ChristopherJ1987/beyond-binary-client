export default function ContactHeader() {
    return (
        <div className="mb-8 border-b border-white/5 pb-6">
            <span className="font-body text-xs tracking-[0.25em] text-neon-cyan uppercase block mb-2">
                // Communications Node
            </span>
            <h1 className="font-header text-xl sm:text-2xl uppercase tracking-tight text-white/90">
                Make Contact
            </h1>
            <p className="font-body text-xs sm:text-sm text-white/40 leading-relaxed mt-2">
                Have a technical project, architecture refactor, or legacy platform optimization requirement? Leave a message below to patch into our engineering stream.
            </p>
        </div>
    );
}