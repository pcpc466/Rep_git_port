import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-[100dvh] w-full flex flex-col relative selection:bg-primary/30 selection:text-primary-foreground">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_10px_hsl(var(--primary))]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      
      <Footer />
    </div>
  );
}
