interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
    return (
        <section
            id={id}
            className={`w-full py-16 md:py-24 ${className}`}
        >
            <div className="max-w-360 mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
}