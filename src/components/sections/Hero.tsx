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
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Build scalable SaaS products <br />
                    <span className="bg-linear-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                        and AI-powered systems
                    </span>
                </h1>
            </ParallaxLayer>

            <ParallaxLayer strength={100}>
                <p className="mt-6 text-gray-400 max-w-xl">
                    We help startups launch faster with modern engineering.
                </p>
            </ParallaxLayer>

        </section>
    );
};