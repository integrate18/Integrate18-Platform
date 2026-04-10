import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const row1 = [
    { label: "React",        color: "text-cyan-400",    bg: "bg-cyan-400/10",    border: "border-cyan-400/20"   },
    { label: "Next.js",      color: "text-white/80",    bg: "bg-white/5",        border: "border-white/10"      },
    { label: "TypeScript",   color: "text-blue-400",    bg: "bg-blue-400/10",    border: "border-blue-400/20"   },
    { label: "Tailwind",     color: "text-sky-400",     bg: "bg-sky-400/10",     border: "border-sky-400/20"    },
    { label: "Node.js",      color: "text-green-400",   bg: "bg-green-400/10",   border: "border-green-400/20"  },
    { label: "Python",       color: "text-yellow-400",  bg: "bg-yellow-400/10",  border: "border-yellow-400/20" },
    { label: "FastAPI",      color: "text-teal-400",    bg: "bg-teal-400/10",    border: "border-teal-400/20"   },
    { label: "Go",           color: "text-cyan-300",    bg: "bg-cyan-300/10",    border: "border-cyan-300/20"   },
    { label: "Spring Boot",  color: "text-green-300",   bg: "bg-green-300/10",   border: "border-green-300/20"  },
    { label: "React Native", color: "text-indigo-400",  bg: "bg-indigo-400/10",  border: "border-indigo-400/20" },
];

const row2 = [
    { label: "Flutter",       color: "text-blue-300",    bg: "bg-blue-300/10",    border: "border-blue-300/20"   },
    { label: "AWS",           color: "text-orange-400",  bg: "bg-orange-400/10",  border: "border-orange-400/20" },
    { label: "Docker",        color: "text-blue-400",    bg: "bg-blue-400/10",    border: "border-blue-400/20"   },
    { label: "Kubernetes",    color: "text-indigo-300",  bg: "bg-indigo-300/10",  border: "border-indigo-300/20" },
    { label: "GitHub Actions",color: "text-white/70",    bg: "bg-white/5",        border: "border-white/10"      },
    { label: "PostgreSQL",    color: "text-sky-300",     bg: "bg-sky-300/10",     border: "border-sky-300/20"    },
    { label: "MongoDB",       color: "text-green-400",   bg: "bg-green-400/10",   border: "border-green-400/20"  },
    { label: "Redis",         color: "text-red-400",     bg: "bg-red-400/10",     border: "border-red-400/20"    },
    { label: "OpenAI API",    color: "text-purple-400",  bg: "bg-purple-400/10",  border: "border-purple-400/20" },
    { label: "LangChain",     color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20"},
    { label: "Hugging Face",  color: "text-yellow-300",  bg: "bg-yellow-300/10",  border: "border-yellow-300/20" },
];

type BadgeItem = typeof row1[number];

const MarqueeRow = ({ items, reverse = false }: { items: BadgeItem[]; reverse?: boolean }) => {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden">
            <div
                className="flex gap-3 w-max"
                style={{
                    animation: `marquee ${reverse ? "40s" : "30s"} linear infinite ${reverse ? "reverse" : ""}`,
                }}
            >
                {doubled.map((tech, i) => (
                    <span
                        key={i}
                        className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap flex-shrink-0 ${tech.bg} ${tech.border} ${tech.color}`}
                    >
                        {tech.label}
                    </span>
                ))}
            </div>
        </div>
    );
};

export const TechStack = () => {
    return (
        <section className="py-32 border-t border-white/10 overflow-hidden">

            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4"
                >
                    Full-Stack Expertise
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-semibold tracking-tight"
                >
                    One team.{" "}
                    <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Every layer.
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-gray-400 mt-4 max-w-xl mx-auto"
                >
                    8 engineers across frontend, backend, mobile, DevOps, and AI — no gaps, no handoffs to random contractors.
                </motion.p>
            </div>

            <div
                className="space-y-4"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
            >
                <MarqueeRow items={row1} />
                <MarqueeRow items={row2} reverse />
            </div>

        </section>
    );
};
