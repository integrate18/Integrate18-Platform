import { motion } from "framer-motion";
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
    {
        title: "Understand your product",
        description:
            "We dive deep into your idea, users, and business goals before writing a single line of code.",
        icon: FaLightbulb,
    },
    {
        title: "Design scalable architecture",
        description:
            "We design systems that scale from day one—no rewrites, no bottlenecks.",
        icon: FaDraftingCompass,
    },
    {
        title: "Build fast, iterate faster",
        description:
            "Ship your MVP quickly with a focus on performance and clean engineering.",
        icon: FaCode,
    },
    {
        title: "Launch and scale",
        description:
            "Deploy, monitor, and continuously improve as your product grows.",
        icon: FaRocket,
    },
];

export const HowItWorks = () => {
    return (
        <section className="py-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        How we work
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        A simple, structured process designed to move fast without breaking things.
                    </p>
                </div>

                {/* Steps */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, i) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
                            >
                                {/* Step number */}
                                <span className="absolute top-4 right-4 text-xs text-white/30">
                                    0{i + 1}
                                </span>

                                {/* Icon */}
                                <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <Icon />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-medium">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* subtle hover glow */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};