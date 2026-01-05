import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-background-dark text-gray-100 font-body bg-grid-pattern relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
