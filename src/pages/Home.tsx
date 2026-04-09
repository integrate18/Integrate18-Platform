import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
// import { About } from "../components/sections/About";
import { CTA } from "../components/sections/CTA";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Solution } from "@/components/sections/Solution";
import { Problem } from "@/components/sections/Problem";

export const Home = () => {
    return (
        <>



            <Hero />
            <Problem />
            <Solution />
            <Services />
            <HowItWorks />
            <Projects />
            <Testimonials />
            <Pricing />
            <CTA />
            {/* <About /> */}

        </>
    );
};