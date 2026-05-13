import type { Route } from "./+types/home";
import Section from "~/components/layout/Section";
import Hero from "~/features/home/Hero";
import ProcessSection from "~/features/home/ProcessSection";
import FeaturedProjects from "~/features/home/FeaturedProjects";
import FinalCTA from "~/features/home/FinalCTA";

// This function handles the <head> tags for this specific page
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beyond Binary | Website Design & Development" },
    { name: "description", content: "Living beyond the binary, somewhere between raw code and humanity." },
  ];
}

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <ProcessSection />
      <FeaturedProjects />
      <FinalCTA />
    </div>
  );
}
