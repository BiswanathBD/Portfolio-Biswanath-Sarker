import { useEffect, useState } from "react";
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
import ScrollToTop from "./components/ScrollToTop";
import WelcomeLoader from "./components/WelcomeLoader";

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    // Hide default cursor only on larger screens (md and up)
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
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, 5000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setTimeout(() => setIsLoaded(true), 300);
  };

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
    <>
      <SmoothScroll />

      {/* Welcome Loader */}
      {showLoader && <WelcomeLoader />}

      {/* Main App Content */}
      {isLoaded && (
        <motion.div
          className="bg-background-dark text-gray-100 font-body bg-grid-pattern overflow-hidden"
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
    </>
  );
}

export default App;
