import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const progressBarsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // Category Cards
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 1.2,
            },
          }
        );
      });

      // Skill Items
      skillItemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { x: 20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });

      // Progress Bars
      progressBarsRef.current.forEach((bar) => {
        if (!bar) return;
        const width = bar.dataset.width;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width,
            ease: "none",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              end: "top 55%",
              scrub: 1.5,
            },
          }
        );
      });

      // Stats Cards
      statsRef.current.forEach((stat) => {
        if (!stat) return;
        gsap.fromTo(
          stat,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          icon: "fab fa-html5",
          color: "text-orange-500",
          level: 95,
        },
        {
          name: "CSS3",
          icon: "fab fa-css3-alt",
          color: "text-primary",
          level: 90,
        },
        {
          name: "JavaScript",
          icon: "fab fa-js",
          color: "text-yellow-400",
          level: 88,
        },
        {
          name: "React",
          icon: "fab fa-react",
          color: "text-secondary",
          level: 85,
        },
        {
          name: "Next.js",
          icon: "fas fa-arrow-right",
          color: "text-gray-300",
          level: 80,
        },
        {
          name: "Tailwind CSS",
          icon: "fas fa-wind",
          color: "text-cyan-400",
          level: 92,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: "fab fa-node-js",
          color: "text-green-500",
          level: 82,
        },
        {
          name: "Express.js",
          icon: "fas fa-server",
          color: "text-gray-300",
          level: 78,
        },
        {
          name: "MongoDB",
          icon: "fas fa-leaf",
          color: "text-green-600",
          level: 75,
        },
      ],
    },
    {
      title: "Tools & Services",
      skills: [
        {
          name: "Git",
          icon: "fab fa-git-alt",
          color: "text-red-500",
          level: 85,
        },
        {
          name: "Firebase",
          icon: "fas fa-fire",
          color: "text-orange-400",
          level: 70,
        },
        {
          name: "Netlify",
          icon: "fas fa-globe",
          color: "text-teal-400",
          level: 88,
        },
        {
          name: "Vercel",
          icon: "fas fa-triangle",
          color: "text-white",
          level: 85,
        },
      ],
    },
    {
      title: "UI/UX & Animation",
      skills: [
        {
          name: "Framer Motion",
          icon: "fas fa-magic",
          color: "text-secondary",
          level: 72,
        },
        {
          name: "Daisy UI",
          icon: "fas fa-palette",
          color: "text-pink-400",
          level: 80,
        },
      ],
    },
  ];

  return (
    <section
      ref={skillsRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="skills"
    >
      {/* Header */}
      <div ref={titleRef} className="text-center mb-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          <motion.span
            className="inline-block mr-3"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            ⚡
          </motion.span>
          Skills & Technologies
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, ci) => (
          <div
            key={category.title}
            ref={(el) => (cardsRef.current[ci] = el)}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-primary/30 transition-all"
          >
            <h3 className="font-display font-bold text-lg text-white mb-6">
              {category.title}
            </h3>

            {category.skills.map((skill, si) => {
              const index = ci * 10 + si;
              return (
                <div
                  key={skill.name}
                  ref={(el) => (skillItemsRef.current[index] = el)}
                  className="mb-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center ${skill.color}`}
                      >
                        <i className={`${skill.icon} text-sm`} />
                      </div>
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      ref={(el) => (progressBarsRef.current[index] = el)}
                      data-width={`${skill.level}%`}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "15+ Technologies",
          "30+ Projects",
          "6+ Months",
          "100% Satisfaction",
        ].map((text, i) => (
          <div
            key={i}
            ref={(el) => (statsRef.current[i] = el)}
            className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
          >
            <div className="text-primary text-3xl font-bold mb-2">
              {text.split(" ")[0]}
            </div>
            <div className="text-gray-400 text-sm">
              {text.replace(text.split(" ")[0], "")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
