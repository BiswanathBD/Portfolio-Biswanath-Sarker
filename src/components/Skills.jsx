import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef([]);
  const statsRef = useRef([]);
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch skills data
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/skills.json");
        const data = await response.json();
        setSkillCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  useEffect(() => {
    if (loading || skillCategories.length === 0) return;

    const ctx = gsap.context(() => {
      // Title animation controlled by scroll
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
      );

      // Skill cards animation controlled by scroll
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 55%",
                scrub: 0.5,
              },
            },
          );

          // Animate skill items within each card
          const skillItems = card.querySelectorAll(".skill-item");
          skillItems.forEach((item) => {
            gsap.fromTo(
              item,
              { x: -20, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  start: "top 90%",
                  end: "top 80%",
                  scrub: 1.5,
                },
              },
            );

            // Animate progress bars
            const progressBar = item.querySelector(".progress-bar");
            if (progressBar) {
              const level = progressBar.getAttribute("data-level");
              gsap.fromTo(
                progressBar,
                { width: "0%" },
                {
                  width: `${level}%`,
                  ease: "none",
                  scrollTrigger: {
                    trigger: progressBar,
                    start: "top 90%",
                    end: "top 90%",
                    scrub: 2,
                  },
                },
              );
            }
          });
        }
      });

      // Stats animation controlled by scroll
      statsRef.current.forEach((stat) => {
        if (stat) {
          gsap.fromTo(
            stat,
            { opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: stat,
                start: "top 95%",
                end: "top 80%",
                scrub: 0.5,
              },
            },
          );
        }
      });
    }, skillsRef);

    return () => ctx.revert();
  }, [skillCategories, loading]);

  return (
    <section
      ref={skillsRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="skills"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div ref={titleRef} className="text-center mb-8 md:mb-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative inline-block">
          {/* Main Title */}
          <div className="relative">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 relative z-10 tracking-tight">
              Skills &{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient">
                  Technologies
                </span>
              </span>
            </h2>

            {/* Decorative corner brackets */}
            <div className="absolute -top-2 -left-4 w-6 h-6 border-l-2 border-t-2 border-primary/40 rounded-tl-xl animate-pulse" />
            <div className="absolute -top-2 -right-4 w-6 h-6 border-r-2 border-t-2 border-secondary/40 rounded-tr-xl animate-pulse" />
            <div className="absolute -bottom-2 -left-4 w-6 h-6 border-l-2 border-b-2 border-secondary/40 rounded-bl-xl animate-pulse" />
            <div className="absolute -bottom-2 -right-4 w-6 h-6 border-r-2 border-b-2 border-primary/40 rounded-br-xl animate-pulse" />

            {/* Floating dots */}
            <motion.div
              className="absolute -top-2 left-1/4 w-2 h-2 bg-primary rounded-full"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 right-1/4 w-2 h-2 bg-secondary rounded-full"
              animate={{
                y: [5, -5, 5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Skills Grid */}
      {!loading && skillCategories.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={(el) => (cardsRef.current[categoryIndex] = el)}
              className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-primary/30 overflow-hidden hover:scale-105"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

              <div className="relative z-10">
                <h3 className="font-display font-bold text-lg text-white mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30 flex justify-center items-center ${skill.color} hover:scale-110 hover:shadow-lg hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300`}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-4 h-4"
                            />
                          </div>
                          <span className="text-gray-200 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="progress-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          data-level={skill.level}
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
              <div className="absolute top-1/2 left-0 w-1 h-10 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />
            </div>
          ))}
        </div>
      )}

      {/* Additional Stats */}
      {!loading && skillCategories.length > 0 && (
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Technologies", color: "text-primary" },
            { number: "30+", label: "Projects", color: "text-secondary" },
            {
              number: "6+",
              label: "Months Experience",
              color: "text-secondary",
            },
            {
              number: "100%",
              label: "Client Satisfaction",
              color: "text-primary",
            },
          ].map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:-translate-y-2 hover:scale-105"
            >
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
