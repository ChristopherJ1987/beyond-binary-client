interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-20 px-6 md:px-12 lg:px-24 msx-w-7xl mx-auto ${className}`}
        >
            {children}
        </section>
    );
}