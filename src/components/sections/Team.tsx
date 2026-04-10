import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

const teamMembers = [
    {
        role: "Frontend Lead",
        focus: "Design systems & React performance",
        badges: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        accentColor: "text-cyan-400",
        accentBg: "bg-cyan-400/10",
        accentBorder: "border-cyan-400/20",
    },
    {
        role: "Full-Stack Engineer",
        focus: "SaaS product architecture & API design",
        badges: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
        accentColor: "text-indigo-400",
        accentBg: "bg-indigo-400/10",
        accentBorder: "border-indigo-400/20",
    },
    {
        role: "Backend Engineer",
        focus: "High-throughput services & microservices",
        badges: ["Go", "Docker", "Kubernetes", "Redis"],
        accentColor: "text-green-400",
        accentBg: "bg-green-400/10",
        accentBorder: "border-green-400/20",
    },
    {
        role: "AI/ML Engineer",
        focus: "LLM integrations & intelligent pipelines",
        badges: ["Python", "LangChain", "OpenAI API", "FastAPI"],
        accentColor: "text-purple-400",
        accentBg: "bg-purple-400/10",
        accentBorder: "border-purple-400/20",
    },
    {
        role: "Mobile Engineer",
        focus: "Cross-platform apps with native feel",
        badges: ["React Native", "Flutter", "TypeScript", "Firebase"],
        accentColor: "text-blue-400",
        accentBg: "bg-blue-400/10",
        accentBorder: "border-blue-400/20",
    },
    {
        role: "DevOps Engineer",
        focus: "CI/CD pipelines & cloud infrastructure",
        badges: ["AWS", "GitHub Actions", "Terraform", "Docker"],
        accentColor: "text-orange-400",
        accentBg: "bg-orange-400/10",
        accentBorder: "border-orange-400/20",
    },
    {
        role: "Backend Engineer",
        focus: "Enterprise Java services & data modeling",
        badges: ["Spring Boot", "Java", "PostgreSQL", "AWS RDS"],
        accentColor: "text-yellow-400",
        accentBg: "bg-yellow-400/10",
        accentBorder: "border-yellow-400/20",
    },
    {
        role: "Full-Stack Engineer",
        focus: "Real-time systems & event-driven apps",
        badges: ["Node.js", "Socket.IO", "MongoDB", "Redis"],
        accentColor: "text-teal-400",
        accentBg: "bg-teal-400/10",
        accentBorder: "border-teal-400/20",
    },
];

export const Team = () => {
    return (
        <section className="py-32 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4"
                    >
                        The People
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight"
                    >
                        8 engineers.{" "}
                        <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Zero silos.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-gray-400 mt-4 max-w-xl mx-auto"
                    >
                        A cross-functional team that covers every layer of your product — from pixels to pipelines.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {teamMembers.map((member, i) => (
                        <motion.div key={i} variants={fadeUp}>
                            <TiltCard>
                                <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-colors h-full flex flex-col">

                                    {/* Role badge */}
                                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-4 self-start ${member.accentBg} ${member.accentBorder} ${member.accentColor}`}>
                                        {member.role}
                                    </span>

                                    {/* Avatar */}
                                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold mb-4 ${member.accentBg} ${member.accentBorder} ${member.accentColor}`}>
                                        {String.fromCharCode(65 + i)}
                                    </div>

                                    {/* Focus area */}
                                    <p className="text-sm text-white/80 leading-snug mb-4 flex-1">
                                        {member.focus}
                                    </p>

                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {member.badges.map((badge, j) => (
                                            <span
                                                key={j}
                                                className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/50"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover glow */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};
