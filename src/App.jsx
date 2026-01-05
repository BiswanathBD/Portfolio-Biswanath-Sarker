import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.add("dark");

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="bg-background-dark text-gray-100 font-body bg-grid-pattern relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <CustomCursor />
      <SmoothScroll />

      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
