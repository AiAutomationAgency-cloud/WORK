import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Team } from "../components/sections/Team";
import { Portfolio } from "../components/sections/Portfolio";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}