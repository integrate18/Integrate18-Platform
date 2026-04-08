import { motion } from "framer-motion";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { FloatingCard } from "../ui/FloatingCard";
import { fadeUp } from "@/lib/animations";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" />
            <AnimatedBackground />

            {/* Floating cards */}
            <div className="absolute left-10 top-32 hidden md:block">
                <FloatingCard>
                    <p className="text-sm">⚡ Fast APIs</p>
                </FloatingCard>
            </div>

            <div className="absolute right-10 bottom-32 hidden md:block">
                <FloatingCard>
                    <p className="text-sm">🚀 Scalable Systems</p>
                </FloatingCard>
            </div>

            {/* Main content */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-bold leading-tight"
            >
                Build scalable SaaS products <br />
                <span className="bg-linear-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                    and AI-powered systems
                </span>
            </motion.h1>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-gray-400 max-w-xl"
            >
                We help startups launch faster with modern engineering and AI.
            </motion.p>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-8 flex gap-4"
            >
                <button className="px-6 py-3 bg-indigo-500 rounded-xl hover:bg-indigo-600">
                    Book a Call
                </button>
                <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10">
                    View Work
                </button>
            </motion.div>

        </section>
    );
};