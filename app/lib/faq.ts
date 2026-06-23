export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const contactFAQs: FAQItem[] = [
    {
        id: "[01]",
        question: "What is your typical project stack?",
        answer: "We primarily engineer solutions using React, Next.js, Vite, and Node.js (Express), backed by type-safe architectures to ensure scalability."},
    {
        id: "[02]",
        question: "Do you sign Non-Disclosure Agreements?",
        answer: "Yes. All sensitive technical parameters, proprietary source structures, and internal, and internal client workflows remain completely confidential."},
    {
        id: "[03}",
        question: "Do you offer post-launch technical support?",
        answer: "Yes, we structure dedicated application telemetry and codebase alignment systems tailored to ensure long-term runtime stability and routine infrastrcture dependent on your maintenance needs."
    }
];