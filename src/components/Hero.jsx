const Hero = () => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 max-w-7xl mx-auto px-6">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 dark:opacity-40 opacity-20"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-gray-900 dark:text-white leading-tight">
            Hi, I'm Biswanath
          </h1>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              MREN stack developer
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
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
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-surface-dark flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-primary dark:hover:text-primary transition-all shadow-md"
                href="#"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-surface-dark flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-primary dark:hover:text-primary transition-all shadow-md"
                href="#"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-surface-dark flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-primary dark:hover:text-primary transition-all shadow-md"
                href="#"
              >
                <span className="material-icons text-lg">email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[60px] opacity-20 dark:opacity-40 scale-75"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/10 dark:border-white/5 bg-gray-800 overflow-hidden shadow-2xl z-10">
            <img
              alt="Biswanath Sarker"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              src="https://i.ibb.co.com/TBWLX9Q6/IMG-0657.jpg"
            />
          </div>
          <div className="absolute top-0 right-10 md:right-4 bg-gray-900 border border-gray-700 p-2 rounded-full shadow-lg animate-float z-20">
            <i className="fab fa-html5 text-orange-500 text-2xl"></i>
          </div>
          <div className="absolute bottom-4 right-1/4 bg-gray-900 border border-gray-700 p-2 rounded-full shadow-lg animate-float-delayed z-20">
            <i className="fab fa-react text-blue-400 text-2xl"></i>
          </div>
          <div className="absolute top-1/4 left-4 bg-gray-900 border border-gray-700 p-2 rounded-full shadow-lg animate-float z-20">
            <i className="fab fa-js text-yellow-400 text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
