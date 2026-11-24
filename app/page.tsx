import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import GuidesTeaser from '@/components/GuidesTeaser';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Learning from '@/components/Learning';
import GitHubProjects from '@/components/GitHubProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Metrics />
        <About />
        <CaseStudies />
        <GuidesTeaser />
        <Experience />
        <Skills />
        <Learning />
        <GitHubProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
