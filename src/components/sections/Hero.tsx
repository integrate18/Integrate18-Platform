import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { FloatingCard } from "../ui/FloatingCard";
import { AnimatedBackground } from "../ui/AnimatedBackground";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" />
            <AnimatedBackground />

            {/* Floating cards with parallax */}
            <div className="absolute left-10 top-32 hidden md:block">
                <ParallaxLayer strength={40}>
                    <FloatingCard>⚡ Fast APIs</FloatingCard>
                </ParallaxLayer>
            </div>

            <div className="absolute right-10 bottom-32 hidden md:block">
                <ParallaxLayer strength={50}>
                    <FloatingCard>🚀 Scalable Systems</FloatingCard>
                </ParallaxLayer>
            </div>

            {/* Main content */}
            <ParallaxLayer strength={80}>
                <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
                    We build products <br />
                    <span className="text-white/60">
                        that scale with your business
                    </span>
                </h1>

            </ParallaxLayer>

            <ParallaxLayer strength={100}>
                <p className="mt-6 text-lg text-gray-400 max-w-xl">
                    A product engineering team for startups—focused on speed,
                    scalability, and real outcomes.
                </p>
            </ParallaxLayer>

        </section>
    );
};