export const Problem = () => {
    return (
        <section className="py-32 text-center max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">
                Building products is harder than it should be
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
                Startups struggle with slow development, poor scalability,
                and inconsistent engineering quality.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                    "Freelancers → inconsistent delivery",
                    "Agencies → expensive & slow",
                    "In-house → time consuming",
                ].map((item, i) => (
                    <div key={i} className="p-6 border border-white/10 rounded-xl">
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
};