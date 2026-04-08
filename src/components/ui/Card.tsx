import { motion } from "framer-motion";

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="relative p-6 rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />

            {children}
        </motion.div>
    );
};