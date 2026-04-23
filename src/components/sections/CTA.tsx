import { FiMail } from "react-icons/fi";

export default function ContactEmail() {
    return (
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
                href="mailto:admin@integrate18.com?subject=Inquiry&body=Hi team,"
                // className="group px-6 py-3 rounded-xl border border-white/20 
                //    text-white flex items-center gap-2
                //    hover:bg-white/10 transition duration-200 
                //    shadow-sm hover:shadow-md"
                className="group px-6 py-3 rounded-xl bg-white text-black font-medium 
           flex items-center gap-2 hover:bg-gray-200 transition 
           shadow-md hover:shadow-lg"
            >
                <FiMail className="text-lg group-hover:scale-110 transition" />
                <span className="font-medium">admin@integrate18.com</span>
            </a>
        </div>
    );
}

export const CTA = () => {
    return (
        <section
            id="contact"
            className="py-32 border-t border-white/10"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Card container */}
                <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">

                    {/* subtle glow */}
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-50 pointer-events-none" />

                    <h2 className="text-4xl font-semibold tracking-tight">
                        Let’s build your product
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Tell us about your idea. We’ll help you turn it into a scalable product.
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <ContactEmail />

                        {/* <button  className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
                            Book a call
                        </button>

                        <button className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
                            View case studies
                        </button> */}

                    </div>

                </div>

            </div>
        </section>
    );
};