import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
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
import ScrollToTop from "./components/ScrollToTop";
import WelcomeLoader from "./components/WelcomeLoader";

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#0f0518";

    const handleCursorVisibility = () => {
      if (window.innerWidth >= 768) {
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "auto";
      }
    };

    handleCursorVisibility();
    window.addEventListener("resize", handleCursorVisibility);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("resize", handleCursorVisibility);
    };
  }, []);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      localStorage.setItem("hasVisitedPortfolio", "true");
    }, 3000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <SmoothScroll />

      <AnimatePresence mode="wait">
        {showLoader && <WelcomeLoader key="loader" />}

        {!showLoader && (
          <motion.div
            key="main"
            className="bg-background-dark text-gray-100 font-body bg-grid-pattern overflow-hidden min-h-screen"
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            <CustomCursor />

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
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
