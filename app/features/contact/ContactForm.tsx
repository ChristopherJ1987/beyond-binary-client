import { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";

export default function ContactForm() {
    const [formData, setFormData ] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
        type: "idle",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: "loading", message: "The carrier pigeon has left the roost..." });
        
        setTimeout(() => {
            setStatus({
                type: "success",
                message: "The pigeon has landed... your message has been delivered"
            });
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <div className="bg-white/2 border border-white/5 rounded-lg p-6 sm:p-8">
            <h2 className="font-mono text-sm uppercase tracking-wider text-white/90 mb-6">// Matrix_Delivery_System</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] tracking-widest text-white/70 uppercase block mb-2 font-mono">
                            [01] Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Tanjiro Kamado"
                            className="w-full bg-black/40 border border-white/10 rounded px-3 py-2.5 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan transition-colors duration-300"
                        />
                    </div>

                    <div>
                        <label className="text-[10px] tracking-widest text-white/70 uppercase block mb-2 font-mono">
                            [02] Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="t_kamado@demon_slayer_core.com"
                            className="w-full bg-black/40 border border-white/10 rounded px-3 py-2.5 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan transition-colors duration-300"
                        />
                    </div>

                </div>

                <div>
                    <label className="text-[10px] tracking-widest text-white/70 uppercase block mb-2 font-mono">
                        [03] Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Detail your engineering parameters, system constraints, project goals, or whatever else you want to talk about..."
                        className="w-full bg-black/40 border border-white/10 rounded px-3 py-2.5 font-body text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan transition-colors duration-300 resize-none"
                    />
                </div>

                {status.type !== "idle" && (
                    <div className={`text-xs font-mono p-3 rounded border bg-black/20 ${
                        status.type === "loading" ? "text-neon-cyan border-neon-cyan/20" :
                        status.type === "success" ? " text-neon-green border-neon-green/20" :
                        "text-neon-pink border-neon-pink/20"
                    }`}>
                        &gt;&gt; {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full sm:w-auto font-header text-xs uppercase tracking-wider text-black bg-neon-yellow hover:bg-neon-cyan px-6 py-3 rounded font-bold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <RiSendPlane2Line className="text-sm" />
                    <span>{status.type === "loading" ? "Pigeons away..." : "Send Message"}</span>
                </button>

            </form>

        </div>

    );
}