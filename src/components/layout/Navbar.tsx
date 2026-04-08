export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-[#0B0F19]/80 backdrop-blur z-50 px-6 py-4 flex justify-between">
            <h1 className="font-bold text-lg">LaunchStack</h1>
            <div className="flex gap-6 text-sm text-gray-300">
                <a href="#services">Services</a>
                <a href="#projects">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
};