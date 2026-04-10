import { motion } from "framer-motion";
import { FaBolt, FaLayerGroup, FaMedal } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/animations";

const pillars = [
    {
        icon: FaBolt,
        title: "Speed",
        headline: "Ship in weeks, not months",
        description:
            "Our team runs lean 2-week sprints with daily standups. No bloated processes, no waiting. From kickoff to deployed MVP faster than you thought possible.",
        accent: "text-yellow-400",
        accentBg: "bg-yellow-400/10",
    },
    {
        icon: FaLayerGroup,
        title: "Scale",
        headline: "Architecture that grows with you",
        description:
            "We design for 10x from day one — horizontally scalable services, managed databases, and infrastructure-as-code so you never outgrow your own product.",
        accent: "text-indigo-400",
        accentBg: "bg-indigo-400/10",
    },
    {
        icon: FaMedal,
        title: "Quality",
        headline: "Production-grade from the first commit",
        description:
            "TypeScript throughout, PR reviews, automated testing, and CI/CD pipelines. Code your future team will thank you for — not rewrite in six months.",
        accent: "text-purple-400",
        accentBg: "bg-purple-400/10",
    },
];

export const Solution = () => {
    return (
        <section className="py-32 border-y border-white/10 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4"
                    >
                        Our Approach
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight"
                    >
                        We act as your{" "}
                        <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            product engineering team
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-gray-400 mt-4 max-w-2xl mx-auto"
                    >
                        From idea to production, we handle everything — frontend, backend, DevOps, and AI.
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pillar.accentBg}`}>
                                    <Icon className={`text-xl ${pillar.accent}`} />
                                </div>

                                <span className={`text-xs font-semibold tracking-widest uppercase ${pillar.accent}`}>
                                    {pillar.title}
                                </span>

                                <h3 className="text-xl font-semibold mt-2 mb-3 leading-snug">
                                    {pillar.headline}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>

                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};
