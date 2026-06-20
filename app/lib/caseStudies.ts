export interface ClientProfileItem {
    label: string;
    value: string; 
}

export interface TimelineMilestone {
    date: string;
    label: string;
}

export interface ArchitectureModule {
    id: string;
    title: string;
    description: string;
}

export interface MetricCardItem {
    label: string;
    value: string;
    subtext: string;
    accentColor: "cyan" | "pink" | "green" | "teal";
}

export interface CaseStudyData {
    slug: string;
    projectTitle: string;
    category: string;
    subtitle: string;
    tags: string[];
    image: string;
    challengeParagraphs: string[];
    solutionParagraphs: string[];
    clientProfile: ClientProfileItem[];
    timeline: TimelineMilestone[];
    techStack: string[];
    modulesTitle: string;
    modules: ArchitectureModule[];
    metricsTitle: string;
    metrics: MetricCardItem[];
}

export const caseStudies: Record<string, CaseStudyData> = {
    "ag-reese": {
        slug: "ag-reese",
        projectTitle: "A.G. Reese & Associates, P.C.",
        category: "Corporate Web Presence",
        subtitle: "Establishing a secure, high-fidelity digital footprint and communication node for a trusted CPA firm.",
        tags: ["React", "Vite", "Node.js", "Express", "Secure Ingestion"],
        image: "/images/projects/ag_reese_site_screenshot.png",
        challengeParagraphs: [
            "A.G. Reese & Associates, an established accounting and CPA firm serving Richmond, Virginia, lacked an official digital footprint. In a modern financial climate, having no verified web domain risked losing prospective accounts to competitors.",
            "The primary operational obstacle was trust and security. Tax accounting deals with sensitive, high-risk financial data, therefore the client needed a platform that unequivocally broadcasted safetly protocols. The architecture had to deliver explicit, transparent guidelines detailing how they interact with clients, reassuring users that the firm would never request sensitive credentials or personal identifying numbers through insecure open-web entry vectors."
        ],
        solutionParagraphs: [
            "We engineered a modern Single Page Application (SPA) using a React and Vite chassis on the frontend, optimized with Axios for lightweight asynchronous state transitions. By avoiding cumbersome Content Management Systems like WordPress, we eliminated database injection risks and heavy image reload lag, guaranteeing that users can fetch essential compliance information near-instantly.",
            "To support secure customer communications, we decoupled the presentation layer from a dedicated backend server orchestration model built with Node.js, Express, and Dotenv. This backend engine uses Nodemailer to parse incoming contact payloads from the client UI and immediately forward them directly into the business owner's secure mail infrastructure, circumventing third-party storage nodes and maintaining strict data containment parameters throughout the intake cycle."
        ],
        clientProfile: [
            { label: "industry", value: "Accounting & Tax Services" },
            { label: "location", value: "Richmond, Virginia" },
            { label: "frontend", value: "React + Vite SPA" },
            { label: "backend", value: "Express Server" }
        ],
        timeline: [
            { date: "PHASE_1", label: "Discovery & Privacy Architecture" },
            { date: "PHASE_2", label: "React Frontend Layout Synthesis" },
            { date: "PHASE_3", label: "Express Server & Nodemailer Hooking" },
            { date: "PHASE_4", label: "Production Launch & Domain Mapping" }
        ],
        techStack: ["React", "Vite", "Node.js", "Express", "Axios", "Nodemailer", "Cors", "Dotenv", "Cookie-Parser"],
        modulesTitle: "Functional Architecture Nodes",
        modules: [
            { id: "01", title: "Capabilities Registry", description: "Bespoke service matrix detailing accounting, audit alignments, and corporate tax consulting structures." },
            { id: "02", title: "Information Authority", description: "Dedicated informational routing system outlining historic corporate lineage and credentials." },
            { id: "03", title: "External Tax Gateway", description: "Vetted routing channels directing clients safely toward verified state and federal regulatory resource centers." },
            { id: "04", title: "Secure Communication Node", description: "Decoupled contact system pipeline utilizing backend server transport layers to safeguard user inquiries." }
        ],
        metricsTitle: "System Telemetry Metrics",
        metrics: [
            { label: "SEO ENGINE", value: "100%", subtext: "Perfect Search Index Rating", accentColor: "cyan" },
            { label: "ACCESSIBILITY", value: "97%", subtext: "Universal Screen Stability",accentColor: "pink" },
            { label: "SECURITY", value: "100%", subtext: "Zero CMS Vulnerability Surface", accentColor: "green" },
            { label: "RELIABILITY", value: "99.9%", subtext: "Static Client Uptime Average", accentColor: "teal" }
        ]
    },
};