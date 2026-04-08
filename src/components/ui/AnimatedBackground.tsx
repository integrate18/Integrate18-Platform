import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* Gradient blob 1 */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -80, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-150 h-150 bg-indigo-500/20 rounded-full blur-3xl"
            />

            {/* Gradient blob 2 */}
            <motion.div
                animate={{
                    x: [0, -120, 60, 0],
                    y: [0, 100, -40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute right-0 w-125 h-125 bg-purple-500/20 rounded-full blur-3xl"
            />
        </div>
    );
};