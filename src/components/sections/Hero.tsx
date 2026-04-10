import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { FloatingCard } from "../ui/FloatingCard";
import { AnimatedBackground } from "../ui/AnimatedBackground";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" />
            <AnimatedBackground />

            {/* Floating card — top left */}
            <div className="absolute left-10 top-32 hidden md:block">
                <ParallaxLayer strength={40}>
                    <FloatingCard>⚡ Fast APIs</FloatingCard>
                </ParallaxLayer>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute right-10 bottom-32 hidden md:block">
                <ParallaxLayer strength={50}>
                    <FloatingCard>🚀 Scalable Systems</FloatingCard>
                </ParallaxLayer>
            </div>

            {/* Floating code snippet card — top right, xl screens only */}
            <div className="absolute right-6 top-40 hidden xl:block">
                <ParallaxLayer strength={30}>
                    <FloatingCard>
                        <div className="text-xs font-mono leading-6">
                            <span className="text-purple-400">const </span>
                            <span className="text-yellow-300">ship</span>
                            <span className="text-white/80"> = </span>
                            <span className="text-purple-400">async</span>
                            <span className="text-white/80"> () =&gt; {"{"}</span>
                            <br />
                            <span className="text-white/40">{"  "}// 2-week sprint</span>
                            <br />
                            <span className="text-white/80">{"}"}</span>
                        </div>
                    </FloatingCard>
                </ParallaxLayer>
            </div>

            {/* Team size stat card — bottom left */}
            <div className="absolute left-10 bottom-40 hidden md:block">
                <ParallaxLayer strength={35}>
                    <FloatingCard>
                        <p className="text-xs text-white/50 mb-1">Team size</p>
                        <p className="text-2xl font-bold text-indigo-400">8</p>
                        <p className="text-xs text-white/40">engineers</p>
                    </FloatingCard>
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
                    An 8-engineer product team for startups — React, Node, Go, Python, and AI,
                    all under one roof.
                </p>
            </ParallaxLayer>

        </section>
    );
};
