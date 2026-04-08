import { motion } from "framer-motion";
import React from "react";

interface Props {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children, variant = "primary" }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`px-6 py-3 rounded-xl transition ${variant === "primary"
                ? "bg-indigo-500 hover:bg-indigo-600"
                : "border border-gray-600 hover:bg-gray-800"
                }`}
        >
            {children}
        </motion.button>
    );
};