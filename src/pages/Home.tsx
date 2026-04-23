import { CodeShowcase } from "../components/sections/CodeShowcase";
import { Hero } from "../components/sections/Hero";
import { Problem } from "../components/sections/Problem";
import { Services } from "../components/sections/Services";
import { Solution } from "../components/sections/Solution";
import { TechStack } from "../components/sections/TechStack";
// import { Team } from "../components/sections/Team";
import { HowItWorks } from "@/components/sections/HowItWorks";
// import { Projects } from "../components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
// import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "../components/sections/CTA";

export const Home = () => {
    return (
        <>
            <Hero />
            <Problem />
            <Solution />
            <CodeShowcase />
            <TechStack />
            <Services />
            {/* <Team /> */}
            <HowItWorks />
            {/* <Projects /> */}
            <Testimonials />
            {/* <Pricing /> */}
            <CTA />
        </>
    );
};
