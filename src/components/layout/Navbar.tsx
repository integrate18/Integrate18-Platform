import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between transition ${scrolled
                    ? "bg-black/50 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <h1 className="font-bold text-lg">LaunchStack</h1>

            <div className="flex gap-6 text-sm text-gray-300">
                <a href="#services">Services</a>
                <a href="#projects">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};