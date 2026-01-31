import {} from "react";

const ProjectCard = ({ project, isActive, openProjectDetail }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg border shadow-2xl transition-all duration-500 md:aspect-[4/3] ${
        isActive
          ? "scale-100 opacity-100 shadow-xl md:ml-2 lg:ml-6 border-primary/40 hover:border-primary/60 hover:scale-105"
          : "scale-75 opacity-60 blur-[2px] border-white/10"
      }`}
    >
      {/* Animated Background Gradient - Only on active card */}
      {isActive && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
        </>
      )}

      <div className="flex flex-col md:grid md:grid-cols-2 md:aspect-[4/3] relative z-10">
        {/* Image Section */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[5/3] sm:aspect-[2/1] md:aspect-[3/4] object-cover object-top border border-white/20 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-6 shadow-2xl rounded-t-lg md:rounded-md transition-all duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:py-8 md:-ml-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="relative mb-3 md:mb-4">
              <h3
                className={`font-extrabold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 transition-all duration-300 ${
                  isActive
                    ? "group-hover:scale-105 group-hover:translate-x-2"
                    : ""
                }`}
              >
                {project.title}
              </h3>
              {project.subtitle && (
                <p
                  className={`text-base md:text-lg lg:text-2xl font-medium text-white transition-colors duration-300 ${
                    isActive ? "group-hover:text-gray-200" : ""
                  }`}
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            <p
              className={`text-xs md:text-sm leading-relaxed mb-3 md:mb-4 text-primary line-clamp-3 transition-colors duration-300 ${
                isActive ? "group-hover:text-secondary" : ""
              }`}
            >
              {project.description}
            </p>

            <div className="mb-4 md:mb-6">
              <div className="hidden sm:flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="relative px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-secondary text-xs font-medium rounded-md border border-primary/20 group-hover:border-primary/50 group-hover:text-white group-hover:from-primary/30 group-hover:to-secondary/30 cursor-default transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">{tech}</span>
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="relative px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-secondary/30 to-primary/30 text-white text-xs font-medium rounded-md border border-secondary/50 backdrop-blur-sm cursor-default animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-md"></div>
                    <span className="relative">
                      +{project.technologies.length - 5}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4">
            <button
              onClick={isActive ? () => openProjectDetail(project) : undefined}
              disabled={!isActive}
              className={`w-full relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 text-primary transition-all duration-300 ${
                isActive
                  ? "hover:from-primary/30 hover:to-secondary/30 hover:border-primary/40 hover:-translate-y-1 cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              <span className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium">
                Details
              </span>
            </button>

            <a
              href={isActive ? project.liveUrl : undefined}
              target={isActive ? "_blank" : undefined}
              rel={isActive ? "noopener noreferrer" : undefined}
              onClick={(e) => !isActive && e.preventDefault()}
              className={`w-full relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white text-center py-2 px-3 md:py-2.5 md:px-4 rounded-lg text-xs md:text-sm shadow-lg transition-all duration-300 z-50 ${
                isActive
                  ? "hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
            >
              Live Demo
            </a>
          </div>

          {/* Decorative Elements - Only on active card */}
          {isActive && (
            <>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
              <div className="absolute top-1/2 left-0 md:-left-6 w-1 h-16 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
