import { useRef } from "react";
import { motion } from "framer-motion";

export const TiltCard = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = ref.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y / rect.height - 0.5) * 15;
        const rotateY = (x / rect.width - 0.5) * 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    };

    const reset = () => {
        if (ref.current) {
            ref.current.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="transition-transform duration-200 ease-out will-change-transform"
        >
            {children}
        </motion.div>
    );
};