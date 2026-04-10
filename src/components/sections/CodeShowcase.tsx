import { motion } from "framer-motion";
import { CodeWindow, CodeLine } from "@/components/ui/CodeWindow";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const authHookLines: CodeLine[] = [
    { tokens: [{ text: "// useAuth.tsx", color: "text-white/30" }] },
    { tokens: [{ text: "import ", color: "text-purple-400" }, { text: "{ useState, useCallback } ", color: "text-white/80" }, { text: "from ", color: "text-purple-400" }, { text: "'react'", color: "text-green-400" }] },
    { tokens: [{ text: "import ", color: "text-purple-400" }, { text: "{ api } ", color: "text-white/80" }, { text: "from ", color: "text-purple-400" }, { text: "'@/lib/api'", color: "text-green-400" }] },
    { tokens: [] },
    { tokens: [{ text: "interface ", color: "text-purple-400" }, { text: "AuthState ", color: "text-blue-400" }, { text: "{", color: "text-white/80" }] },
    { tokens: [{ text: "  user", color: "text-cyan-300" }, { text: ": ", color: "text-white/80" }, { text: "User", color: "text-blue-400" }, { text: " | ", color: "text-purple-400" }, { text: "null", color: "text-orange-400" }] },
    { tokens: [{ text: "  isLoading", color: "text-cyan-300" }, { text: ": ", color: "text-white/80" }, { text: "boolean", color: "text-blue-400" }] },
    { tokens: [{ text: "  error", color: "text-cyan-300" }, { text: ": ", color: "text-white/80" }, { text: "string", color: "text-blue-400" }, { text: " | ", color: "text-purple-400" }, { text: "null", color: "text-orange-400" }] },
    { tokens: [{ text: "}", color: "text-white/80" }] },
    { tokens: [] },
    { tokens: [{ text: "export ", color: "text-purple-400" }, { text: "function ", color: "text-purple-400" }, { text: "useAuth", color: "text-yellow-300" }, { text: "() {", color: "text-white/80" }] },
    { tokens: [{ text: "  const ", color: "text-purple-400" }, { text: "[state, setState] ", color: "text-white/80" }, { text: "= ", color: "text-white/80" }, { text: "useState", color: "text-yellow-300" }, { text: "<", color: "text-white/80" }, { text: "AuthState", color: "text-blue-400" }, { text: ">({", color: "text-white/80" }] },
    { tokens: [{ text: "    user", color: "text-cyan-300" }, { text: ": ", color: "text-white/80" }, { text: "null", color: "text-orange-400" }, { text: ",", color: "text-white/80" }] },
    { tokens: [{ text: "    isLoading", color: "text-cyan-300" }, { text: ": ", color: "text-white/80" }, { text: "false", color: "text-orange-400" }, { text: ",", color: "text-white/80" }] },
    { tokens: [{ text: "    error", color: "text-cyan-300" }, { text: ": ", color: "text-white/80" }, { text: "null", color: "text-orange-400" }, { text: ",", color: "text-white/80" }] },
    { tokens: [{ text: "  })", color: "text-white/80" }] },
    { tokens: [] },
    { tokens: [{ text: "  const ", color: "text-purple-400" }, { text: "login ", color: "text-white/80" }, { text: "= ", color: "text-white/80" }, { text: "useCallback", color: "text-yellow-300" }, { text: "(", color: "text-white/80" }, { text: "async ", color: "text-purple-400" }, { text: "(email: ", color: "text-white/80" }, { text: "string", color: "text-blue-400" }, { text: ") => {", color: "text-white/80" }] },
    { tokens: [{ text: "    setState", color: "text-yellow-300" }, { text: "(prev => ({ ...prev, isLoading: ", color: "text-white/80" }, { text: "true", color: "text-orange-400" }, { text: " }))", color: "text-white/80" }] },
    { tokens: [{ text: "    ", color: "text-white/80" }, { text: "try ", color: "text-purple-400" }, { text: "{", color: "text-white/80" }] },
    { tokens: [{ text: "      const ", color: "text-purple-400" }, { text: "user ", color: "text-white/80" }, { text: "= ", color: "text-white/80" }, { text: "await ", color: "text-purple-400" }, { text: "api.", color: "text-white/80" }, { text: "post", color: "text-yellow-300" }, { text: "('/auth/login', { email })", color: "text-white/80" }] },
    { tokens: [{ text: "      setState", color: "text-yellow-300" }, { text: "({ user, isLoading: ", color: "text-white/80" }, { text: "false", color: "text-orange-400" }, { text: ", error: ", color: "text-white/80" }, { text: "null", color: "text-orange-400" }, { text: " })", color: "text-white/80" }] },
    { tokens: [{ text: "    } ", color: "text-white/80" }, { text: "catch ", color: "text-purple-400" }, { text: "(err) {", color: "text-white/80" }] },
    { tokens: [{ text: "      setState", color: "text-yellow-300" }, { text: "(prev => ({ ...prev, error: ", color: "text-white/80" }, { text: "'Auth failed'", color: "text-green-400" }, { text: " }))", color: "text-white/80" }] },
    { tokens: [{ text: "    }", color: "text-white/80" }] },
    { tokens: [{ text: "  }, [])", color: "text-white/80" }] },
    { tokens: [] },
    { tokens: [{ text: "  return ", color: "text-purple-400" }, { text: "{ ...state, login }", color: "text-white/80" }] },
    { tokens: [{ text: "}", color: "text-white/80" }] },
];

export const CodeShowcase = () => {
    return (
        <section className="py-32 px-6 border-t border-white/10 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-indigo-400 text-sm font-medium tracking-widest uppercase text-center mb-4"
                >
                    How We Build
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-20"
                >
                    Production-ready code,{" "}
                    <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        shipped fast
                    </span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: feature list */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            variants={slideInLeft}
                            className="text-2xl font-semibold mb-6 leading-snug"
                        >
                            Clean architecture from day one. No shortcuts, no technical debt.
                        </motion.h3>

                        <motion.p
                            variants={slideInLeft}
                            className="text-gray-400 mb-8 leading-relaxed"
                        >
                            Every engineer on our team writes code as if they are handing it off tomorrow.
                            We enforce patterns that scale — typed APIs, custom hooks, isolated logic.
                        </motion.p>

                        <motion.ul variants={staggerContainer} className="space-y-4">
                            {[
                                "TypeScript-first — fully typed APIs and components",
                                "Custom hooks for clean separation of concerns",
                                "Error boundaries and loading states built in",
                                "Optimistic UI updates for perceived performance",
                                "Tested with Vitest and React Testing Library",
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-start gap-3 text-sm text-gray-300"
                                >
                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center flex-shrink-0">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path d="M1 4L3.5 6.5L9 1" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Right: floating code window */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/10 rounded-2xl blur-2xl pointer-events-none" />
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <CodeWindow
                                    filename="useAuth.tsx"
                                    lines={authHookLines}
                                    className="shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
