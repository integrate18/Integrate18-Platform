import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
import { About } from "../components/sections/About";
import { CTA } from "../components/sections/CTA";

export const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <About />
            <CTA />
        </>
    );
};