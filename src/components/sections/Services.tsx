import { motion } from "framer-motion";
import { FaCode, FaServer, FaRobot, FaRocket } from "react-icons/fa";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
    { title: "SaaS MVP Development", icon: FaRocket },
    { title: "AI Integration", icon: FaRobot },
    { title: "Backend & DevOps", icon: FaServer },
    { title: "Frontend Engineering", icon: FaCode },
];

export const Services = () => {
    return (
        <section id="services" className="px-6 py-32">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-16">
                    What We Do
                </h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500 transition"
                            >
                                <Icon className="text-indigo-400 text-2xl mb-4" />
                                <h3 className="font-medium">{service.title}</h3>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};