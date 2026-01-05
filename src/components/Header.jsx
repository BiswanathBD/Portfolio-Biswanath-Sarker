import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 relative z-40">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-wide">
          <span className="text-gray-400 dark:text-gray-500">
            &lt;<span className="text-primary"> Biswanath </span>/&gt;
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium text-sm">
          <a
            className="text-primary hover:text-secondary transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Skills
          </a>
          <a
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Projects
          </a>
          <a
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
