const About = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 relative" id="about">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface-dark shadow-2xl">
            <img
              alt="Biswanath Sarker"
              className="h-full object-cover"
              src="https://i.ibb.co.com/ym449tPb/20240122-111131-1.jpg"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-secondary">
            I'm Meriem Benfekhadou
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Software Engineering Master's student at USTHB and freelance
              web/mobile developer in Algiers.
            </p>
            <p>
              I create tailored solutions using Laravel, React, Flutter, and
              more for startups and businesses. My passion lies in solving
              complex problems through clean, efficient code.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="group flex items-center p-4 rounded-xl border border-gray-800 bg-surface-dark hover:border-primary/50 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-primary/10">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-icons">laptop_mac</span>
              </div>
              <span className="ml-4 font-medium text-gray-200">
                Web Application Development
              </span>
            </div>
            <div className="group flex items-center p-4 rounded-xl border border-gray-800 bg-surface-dark hover:border-secondary/50 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-secondary/10">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-icons">smartphone</span>
              </div>
              <span className="ml-4 font-medium text-gray-200">
                Mobile Application Development
              </span>
            </div>
            <div className="group flex items-center p-4 rounded-xl border border-gray-800 bg-surface-dark hover:border-purple-400/50 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-purple-400/10">
              <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400 group-hover:bg-purple-400 group-hover:text-white transition-colors">
                <span className="material-icons">psychology</span>
              </div>
              <span className="ml-4 font-medium text-gray-200">
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
