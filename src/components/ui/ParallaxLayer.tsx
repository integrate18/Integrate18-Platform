import { motion, useMotionValue, useSpring } from "framer-motion";

export const ParallaxLayer = ({
    children,
    strength = 30,
}: {
    children: React.ReactNode;
    strength?: number;
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { innerWidth, innerHeight } = window;

        const moveX = (e.clientX - innerWidth / 2) / strength;
        const moveY = (e.clientY - innerHeight / 2) / strength;

        x.set(moveX);
        y.set(moveY);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            style={{ x: smoothX, y: smoothY }}
        >
            {children}
        </motion.div>
    );
};