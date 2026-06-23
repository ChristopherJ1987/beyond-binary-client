import { useState } from "react";
import { RiArrowDownSLine, RiShieldUserLine } from "react-icons/ri";
import { contactFAQs } from "~/lib/faq";

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="mt-12 bg-white/2 border border-white/5 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <RiShieldUserLine className="text-neon-cyan text-2xl" />
                <h2 className="text-2xl uppercase tracking-wider text-neon-cyan/90 font-header">
                    // Frequently_Asked_Questions
                </h2>
            </div>

            <div className="space-y-4">
                {contactFAQs.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={item.id} className="border border-white/5 rounded bg-black/20 overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full flex justify-between items-center text-left p-4 font-body text-xs sm:text-sm uppercase tracking-tight text-white/80 hover:text-neon-yellow transition-colors duration-200">
                                <span>{item.question}</span>
                                <RiArrowDownSLine className={`transform transition-transform duration-300 text-base ${isOpen ? "rotate-180 text-neon-cyan" : "text-white/30"}`} />
                            </button>

                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-white/5" : "max-h-0"}`}>
                                <p className="p-4 font-body text-xs sm:text-sm text-white/40 leading-relaxed bg-white/1">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}