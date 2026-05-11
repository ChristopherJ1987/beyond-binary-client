import Section from "~/components/layout/Section";
import ProcessCard from "~/components/ui/ProcessCard";

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Design",
            description: "We translate your brand vision into high-fidelity, quality-driven designs that prioritize user experience and aesthetic impact."
        },
        {
            number: "02",
            title: "Development",
            description: "Using modern frameworks, we build scalable, lightning-fast applications that work as good as they look."
        },
        {
            number: "03",
            title: "Deployment",
            description: "Strategic launch and optimization. We ensure your digital presence is polished, performant, and ready to dazzle the market."
        }
    ];

    return (
        <Section id="process" className="border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="font-header text-4xl md:text-5xl text-white mb-4 italic uppercase">
                    Our <span className="text-neon-pink">Process</span>
                </h2>
                <p className="font-body text-white/40 max-w-xl mx-auto italic">
                    A systematic approach to moving your business beyond the binary.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step) => (
                    <ProcessCard
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </Section>
    );
}