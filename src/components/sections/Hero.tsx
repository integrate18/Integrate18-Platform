import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

            {/* Glow background */}
            <div className="absolute w-150 h-150 bg-indigo-500/20 blur-3xl rounded-full -top-25" />

            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-bold leading-tight"
            >
                Build scalable SaaS products <br />
                <span className="text-indigo-400">
                    and AI-powered systems
                </span>
            </motion.h1>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-gray-400 max-w-xl"
            >
                We help startups launch faster with modern engineering.
            </motion.p>

        </section>
    );
};