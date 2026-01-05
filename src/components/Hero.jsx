const Hero = () => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 max-w-7xl mx-auto px-6">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 opacity-40"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-white leading-tight">
            Hi, I'm Biswanath
          </h1>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              MREN stack developer
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Crafting modern, responsive, and user-friendly websites with passion
            and precision.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-8 justify-center md:justify-start">
            <a
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:-translate-y-0.5 overflow-hidden"
              href="#"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <span className="material-icons text-sm">download</span>
              </span>
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12 -translate-x-full"></div>
            </a>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-300 hover:bg-white hover:text-primary transition-all shadow-md"
                href="#"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-300 hover:bg-white hover:text-primary transition-all shadow-md"
                href="#"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-300 hover:bg-white hover:text-primary transition-all shadow-md"
                href="#"
              >
                <span className="material-icons text-lg">email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[60px] opacity-40 scale-75 animate-pulse"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/5 bg-gray-800 overflow-hidden shadow-2xl z-10 group">
            <img
              alt="Biswanath Sarker"
              className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
              src="https://i.ibb.co.com/TBWLX9Q6/IMG-0657.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Technology Icons with Different Animations */}
          {/* HTML5 */}
          <div className="absolute top-0 right-10 md:right-4 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-html5 text-orange-500 text-2xl"></i>
          </div>

          {/* CSS3 */}
          <div className="absolute top-8 right-20 md:right-16 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float-delayed z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-css3-alt text-blue-500 text-2xl"></i>
          </div>

          {/* JavaScript */}
          <div className="absolute top-1/4 left-4 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-js text-yellow-400 text-2xl"></i>
          </div>

          {/* React */}
          <div className="absolute bottom-4 right-1/4 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float-delayed z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-react text-blue-400 text-2xl animate-spin-slow"></i>
          </div>

          {/* Node.js */}
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-node-js text-green-500 text-2xl"></i>
          </div>

          {/* MongoDB */}
          <div className="absolute top-16 left-16 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float-delayed z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fas fa-leaf text-green-600 text-2xl animate-bounce-slow"></i>
          </div>

          {/* Firebase */}
          <div className="absolute bottom-16 right-8 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fas fa-fire text-orange-400 text-2xl animate-pulse"></i>
          </div>

          {/* Git */}
          <div className="absolute top-1/2 left-0 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float-delayed z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-git-alt text-red-500 text-2xl"></i>
          </div>

          {/* Tailwind CSS */}
          <div className="absolute top-1/3 right-0 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fas fa-wind text-cyan-400 text-2xl animate-pulse-slow"></i>
          </div>

          {/* Express.js (using server icon) */}
          <div className="absolute bottom-1/3 left-2 w-12 h-12 bg-gray-900 border border-gray-700 rounded-full shadow-lg animate-float-delayed z-20 flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fas fa-server text-gray-300 text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
