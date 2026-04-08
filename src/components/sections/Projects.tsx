import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

export const Projects = () => {
    return (
        <section id="projects" className="px-6 py-28">
            <div className="max-w-7xl mx-auto">

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-4xl font-bold text-center mb-16"
                >
                    Selected Work
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, i) => (
                        <motion.div key={i} variants={fadeUp}>

                            <div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">

                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={`https://picsum.photos/500/300?random=${i}`}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};