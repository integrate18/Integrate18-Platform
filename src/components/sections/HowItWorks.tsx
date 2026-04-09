const steps = [
    "Understand your idea",
    "Design scalable architecture",
    "Build MVP fast",
    "Deploy & scale",
];

export const HowItWorks = () => {
    return (
        <section className="py-28 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl text-center mb-16">How We Work</h2>

            <div className="grid md:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="p-6 border border-white/10 rounded-xl">
                        <p className="text-indigo-400 mb-2">Step {i + 1}</p>
                        <h3>{step}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};