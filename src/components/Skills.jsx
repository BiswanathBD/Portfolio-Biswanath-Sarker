import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
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
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Skill Categories Data
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", level: 95 },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-primary", level: 90 },
        { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400", level: 88 },
        { name: "React", icon: "fab fa-react", color: "text-secondary", level: 85 },
        { name: "Next.js", icon: "fas fa-arrow-right", color: "text-gray-300", level: 80 },
        { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-cyan-400", level: 92 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500", level: 82 },
        { name: "Express.js", icon: "fas fa-server", color: "text-gray-300", level: 78 },
        { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-600", level: 75 },
      ],
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", level: 85 },
        { name: "Firebase", icon: "fas fa-fire", color: "text-orange-400", level: 70 },
        { name: "Netlify", icon: "fas fa-globe", color: "text-teal-400", level: 88 },
        { name: "Vercel", icon: "fas fa-triangle", color: "text-white", level: 85 },
      ],
    },
    {
      title: "UI/UX & Animation",
      skills: [
        { name: "Framer Motion", icon: "fas fa-magic", color: "text-secondary", level: 72 },
        { name: "Daisy UI", icon: "fas fa-palette", color: "text-pink-400", level: 80 },
      ],
    },
  ];

  return (
    <motion.section
      ref={skillsRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div ref={titleRef} className="text-center mb-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          <motion.span
            className="inline-block mr-3"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
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
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-primary/30 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              initial={false}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
              initial={false}
            />

            <div className="relative z-10">
              <motion.h3
                className="font-display font-bold text-lg text-white mb-6 group-hover:text-primary transition-colors"
                variants={itemVariants}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    custom={skillIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center ${skill.color} hover:scale-110 transition-transform`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <i className={`${skill.icon} text-sm`}></i>
                        </motion.div>
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"
              initial={false}
            />
            <motion.div
              className="absolute top-1/2 left-0 w-1 h-10 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full"
              initial={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Stats */}
      <motion.div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6" variants={containerVariants}>
        {[
          { number: "15+", label: "Technologies", color: "text-primary" },
          { number: "30+", label: "Projects", color: "text-secondary" },
          { number: "6+", label: "Months Experience", color: "text-secondary" },
          { number: "100%", label: "Client Satisfaction", color: "text-primary" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`text-3xl font-bold ${stat.color} mb-2`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
