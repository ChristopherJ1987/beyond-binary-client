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
    "neural-trading": {
        slug: "neural-trading",
        projectTitle: "Neural Trading Platform",
        category: "Enterprise Fintech",
        subtitle: "Real-time algorithmic trading infrastructure for institutional investors",
        tags: ["Distributed Systems", "AI Integration", "Real-Time"],
        image: "https://images.unsplash.com/photo-1618995182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        challengeParagraphs: [
            "A top-tier investment firm needed to replace their legacy trading infrastructurethat was struggling with latency issues during high-volume market events. Their existing system, built over 15 years ago, couldn't handle the demands of modern algorithmic trading where milliseconds determine profit margins.",
            "The platform needed to process over 500,000 transactions per second, integrate machine learning models for predictive analytics, maintain 99.99% uptime, and comply with stringent financial regulations across multiple jurisdictions. Additionally, the system had to support real-time risk assessment while maintaining backwards compatibility with existing trading algorithms."
        ],
        solutionParagraphs: [
            "We architected & distributed microservices ecosystem built on Kubernetes, leveraging Rust for ultra-low-latency core trading engines and Go for orchestration services. The system implements CORS pattern with event sourcing to ensure complete audit trails and enable time-travel debugging capabilities.",
            "Our ML pipeline integrates TensorFlow models via gRPC, allowing data scientists to deploy new trading strategies without system downtime. We implemented a custom memory allocator to minimize garbage collection pauses and used zero-copy networking techniques to shave milliseconds off every transaction. The infrastructure spans three AWS regions with automated failover and uses Redis clusters for sub-milliseconds data access.",
            "Every component was designed with observability in mind - custom Prometheus exporters, distributed tracing with Jaeger, and real-time anomaly detection using streaming analytics. The result is a platform that not only meets current demands but scales horizontally to accommodate 10x growth."
        ],
        clientProfile: [
            { label: "industry", value: "Financial Services" },
            { label: "size", value: "$2.58B AUM" },
            { label: " region", value: "North America" },
            { label: " users", value: " 250+ Traders" }
        ],
        timeline: [
            { date: "Q1_2025", label: "Discovery & Architecture" },
            { date: "Q2_2025", label: "Core Engine Development" },
            { date: "Q3_2025", label: "ML Integration & Testing" },
            { date: "Q4_2025", label: "Production Deployment" }
        ],
        techStack: ["Rust", "Go", "Python", "Kubernetes", "gRPC", "PostreSQL", "Redis", "Kafka", "TensorFlow", "AWS", "Prometheus", "Jaeger"],
        modulesTitle: "Core Infrastructure Modules",
        modules: [
            { id: "01", title: "Trading Engine", description: "Ultra-low latency order execution with custom memory management." },
            { id: "02", title: "ML Pipeline", description: "Real-time predictive analytics and strategy optimization." },
            { id: "03", title: "Risk Engine", description: "Continuous risk assessment and automated circuit breakers." },
            { id: "04", title: "Data Ingestion", description: "Multi-source market data aggregation and normalization." },
            { id: "05", title: "Event Store", description: "Immutable audit log with time-travel capabilities." },
            { id: "06", title: "Observability", description: "Distributed tracing and anomaly detection system." }
        ],
        metricsTitle: "Performance Impact",
        metrics: [
            { label: "UPTIME", value: "99.99%", subtext: "Systems Availability", accentColor: "cyan" },
            { label: "LATENCY", value: "-84%", subtext: "Reduction in P99", accentColor: "pink" },
            { label: "THROUGHPUT", value: "500K/s", subtext: "Transactions Per Second", accentColor: "green" },
            { label: "COST", value: "-42%", subtext: "Infrastructure Savings", accentColor: "teal" }
        ]
    }
};