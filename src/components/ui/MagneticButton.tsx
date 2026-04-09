import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export const MagneticButton = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 150, damping: 15 });
    const smoothY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const moveX = (e.clientX - centerX) * 0.3;
        const moveY = (e.clientY - centerY) * 0.3;

        x.set(moveX);
        y.set(moveY);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            style={{ x: smoothX, y: smoothY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition"
        >
            {children}
        </motion.button>
    );
};