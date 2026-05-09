import type { Route } from "./+types/home";
import Section from "~/components/layout/Section";

// This function handles the <head> tags for this specific page
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beyond Binary | Website Design & Development" },
    { name: "description", content: "Living beyond the binary, somewhere between raw code and humanity." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-bg flex flex-col items-center justify-center p-6">
      <Section id="hero" className="min-h-[80vh] flex items-center">
        <h1 className="font-header text-6xl md:text-8xl text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">Beyond Binary</h1>
        <p className="font-body text-white/80 mt-4 text-lg max-w-md text-center">Beyond the binary, somewhere between raw code and humanity.</p>
        <div className="mt-8">
          <button className="px-8 py-3 bg-transparent border-2 border-neon-pink text-neon-pink font-bold rounded-lg shadow-[0_0_10px_#FF00E5] hover:scale-105 transition-transform">Coming Soon</button>
        </div>
      </Section>
    </main>
  );
}
