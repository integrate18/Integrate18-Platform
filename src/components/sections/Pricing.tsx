const plans = [
    {
        name: "Starter",
        price: "₹50K+",
        features: ["MVP Build", "Basic Backend", "Deployment"],
    },
    {
        name: "Growth",
        price: "₹1L+",
        features: ["Full-stack app", "DevOps", "Scaling"],
    },
];

export const Pricing = () => {
    return (
        <section className="py-32 px-6 text-center">
            <h2 className="text-4xl mb-12">Pricing</h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {plans.map((plan, i) => (
                    <div key={i} className="p-6 border border-white/10 rounded-xl">
                        <h3 className="text-xl">{plan.name}</h3>
                        <p className="text-indigo-400 text-2xl my-4">{plan.price}</p>
                        <ul className="text-gray-400 space-y-2">
                            {plan.features.map((f, idx) => (
                                <li key={idx}>{f}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};