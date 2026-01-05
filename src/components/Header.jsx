import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 relative z-40">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* logo */}
        <div className="font-display font-bold text-2xl tracking-wide group cursor-pointer relative">
          <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            &lt;
          </span>
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-300 mx-1 text-3xl font-extrabold tracking-tight">
            Biswanath
          </span>
          <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            /&gt;
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out"></div>
        </div>
        {/* nav options */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-2 shadow-lg">
          <a
            className="text-primary hover:text-secondary transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-gray-300 hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-gray-300 hover:text-primary transition-colors"
            href="#"
          >
            Skills
          </a>
          <a
            className="text-gray-300 hover:text-primary transition-colors"
            href="#"
          >
            Projects
          </a>
          <a
            className="text-gray-300 hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-6 md:hidden">
            <nav className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col space-y-4 font-medium text-sm">
                <a
                  className="text-primary hover:text-secondary transition-colors py-2"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  className="text-gray-300 hover:text-primary transition-colors py-2"
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  className="text-gray-300 hover:text-primary transition-colors py-2"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  className="text-gray-300 hover:text-primary transition-colors py-2"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  className="text-gray-300 hover:text-primary transition-colors py-2"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
