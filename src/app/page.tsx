import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ContentSection } from "@/components/ContentSection";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative pt-16 lg:pt-20">
        <Section id="home" className="pt-8 sm:pt-12 pb-10 sm:pb-14">
          <Hero />
        </Section>
        <About />
  <Skills />
  <Projects />
        <ContentSection />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
