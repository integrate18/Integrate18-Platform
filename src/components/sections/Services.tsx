import { motion } from "framer-motion";
import { FaCode, FaServer, FaRobot, FaRocket } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
    {
        title: "SaaS MVP Development",
        icon: FaRocket,
        description:
            "Go from idea to deployed product in 4–6 weeks. Full-stack, auth, billing, and onboarding — everything a real SaaS needs on day one.",
    },
    {
        title: "AI Integration",
        icon: FaRobot,
        description:
            "Embed LLMs, RAG pipelines, and intelligent agents into your product using OpenAI, LangChain, and Hugging Face — not just wrappers, real features.",
    },
    {
        title: "Backend & DevOps",
        icon: FaServer,
        description:
            "Scalable REST and GraphQL APIs, containerized with Docker, deployed on AWS with full CI/CD. Infrastructure that runs itself.",
    },
    {
        title: "Frontend Engineering",
        icon: FaCode,
        description:
            "Pixel-perfect React and Next.js interfaces with smooth animations, accessibility, and Core Web Vitals scores that make your product feel premium.",
    },
];

export const Services = () => {
    return (
        <section id="services" className="px-6 py-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4"
                    >
                        Services
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl font-bold"
                    >
                        What We Do
                    </motion.h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/50 transition-colors flex flex-col gap-4"
                            >
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                                    <Icon className="text-indigo-400 text-lg" />
                                </div>

                                <h3 className="font-semibold text-lg">{service.title}</h3>

                                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-1 text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Learn more</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};
