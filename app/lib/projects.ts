export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    caseStudySlug: string,
    isFeatured: boolean;
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "A.G. Reese & Associates, P.C. - Accounting and Tax Services",
        category: "Website Application",
        description: "A.G. Reese & Associates, P.C. is a trusted CPA firm serving Richmond, Virginia. With decades of experience, we provide personalized accounting, tax, and audit services to individuals and businesses.",
        image: "/images/projects/ag_reese_site_screenshot.png",
        tags: ["React", "Next.js", "Vite"],
        link: "https://hive-11.beedev-services.com/",
        caseStudySlug: "ag-reese",
        isFeatured: true,
    },
    {
        id: "project-2",
        title: "Music Player",
        category: "Website Application",
        description: "Upload and play your music library.",
        image: "/images/projects/music_player_screenshot.png",
        tags: ["React", "Next.js"],
        link: "https://github.com/ChristopherJ1987",
        caseStudySlug: "",
        isFeatured: true,
    },
        {
        id: "project-3",
        title: "Unicorn Platform - Website Design",
        category: "Website Application",
        description: "Unicorn Platform is a drag & drop website and blog builder for startups.",
        image: "/images/projects/project_placeholder_2.jpg",
        tags: ["React", "Remix", "Tailwind"],
        link: "https://github.com/ChristopherJ1987",
        caseStudySlug: "",
        isFeatured: true,
    },
        // {
    //     id: "",
    //     title: "",
    //     category: "",
    //     description: "",
    //     image: "",
    //     tags: ["", "", ""],
    //     link: "",
    //     caseStudySlug: "",
    //     isFeatured: true,
    // },
]