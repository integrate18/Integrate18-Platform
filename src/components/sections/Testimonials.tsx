export const Testimonials = () => {
    return (
       <section className="py-32 text-center border-y border-white/10">
            <h2 className="text-4xl mb-12">What People Say</h2>

            <div className="max-w-4xl mx-auto space-y-6">
                <div className="p-6 border border-white/10 rounded-xl">
                    “Helped us launch our MVP in 3 weeks.”
                </div>

                <div className="p-6 border border-white/10 rounded-xl">
                    “Saved months of engineering effort.”
                </div>
            </div>
        </section>
    );
};