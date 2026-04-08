import { motion } from "framer-motion";
import React from "react";

interface Props {
    children: React.ReactNode
}
export const FloatingCard: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg"
        >
            {children}
        </motion.div>
    );
};