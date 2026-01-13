import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef();
  const titleRef = useRef();
  const timelineRef = useRef();
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const yearsRef = useRef([]);
  const continuousRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // Timeline line animation controlled by scroll
      gsap.fromTo(
        timelineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2, // Smoother scroll control
          },
        }
      );

      // Education cards animation controlled by scroll
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                scrub: 1.5, // Animation follows scroll
              },
            }
          );
        }
      });

      // Timeline dots animation controlled by scroll
      dotsRef.current.forEach((dot) => {
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              ease: "none",
              scrollTrigger: {
                trigger: dot,
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
              },
            }
          );
        }
      });

      // Year badges animation controlled by scroll
      yearsRef.current.forEach((year) => {
        if (year) {
          gsap.fromTo(
            year,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: year,
                start: "top 80%",
                end: "top 65%",
                scrub: 1,
              },
            }
          );
        }
      });

      // Continuous learning section animation controlled by scroll
      gsap.fromTo(
        continuousRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: continuousRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1.5,
          },
        }
      );
      // Additional scroll-controlled animations for card content
      cardsRef.current.forEach((card) => {
        if (card) {
          const cardContent = card.querySelector(".card-content");
          const cardIcon = card.querySelector(".card-icon");
          const cardAchievements = card.querySelectorAll(".achievement-item");

          // Card content slide in
          if (cardContent) {
            gsap.fromTo(
              cardContent,
              { x: 30, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: cardContent,
                  start: "top 80%",
                  end: "top 55%",
                  scrub: 1,
                },
              }
            );
          }

          // Card icon rotation
          if (cardIcon) {
            gsap.fromTo(
              cardIcon,
              { rotation: -90, scale: 0.8 },
              {
                rotation: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: cardIcon,
                  start: "top 80%",
                  end: "top 65%",
                  scrub: 1.5,
                },
              }
            );
          }

          // Achievement items stagger
          if (cardAchievements.length > 0) {
            gsap.fromTo(
              cardAchievements,
              { opacity: 0 },
              {
                opacity: 1,
                ease: "none",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: cardAchievements[0],
                  start: "top 90%",
                  end: "top 70%",
                  scrub: 2,
                },
              }
            );
          }
        }
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      year: "2025 - 2026",
      degree: "Complete Web Development Course",
      field: "Full Stack Web Development",
      institution: "Programming Hero",
      location: "Dhaka, Bangladesh",
      description:
        "Completed an intensive 6-month programming course focusing on modern web development technologies including React, Node.js, MongoDB, and Express.js (MERN Stack).",
      achievements: [
        "Mastered MERN Stack Development",
        "Built multiple full-stack projects",
        "Learned modern JavaScript frameworks",
        "Gained hands-on industry experience",
      ],
      icon: "fas fa-code",
    },
    {
      year: "2013 - 2018",
      degree: "Bachelor of Arts (BA)",
      field: "Bengali Literature",
      institution: "Govt. B.L. College, Khulna",
      location: "Khulna, Bangladesh",
      description:
        "Completed Bachelor of Arts degree with specialization in Bengali Literature, developing strong analytical, communication, and critical thinking skills.",
      achievements: [
        "Strong foundation in Bengali Literature and Language",
        "Developed excellent communication skills",
        "Enhanced analytical and critical thinking abilities",
        "Cultural and literary research experience",
      ],
      icon: "fas fa-graduation-cap",
    },
  ];

  return (
    <section
      ref={educationRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="education"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div ref={titleRef} className="text-center mb-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          <motion.span
            className="inline-block mr-3"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            🎓
          </motion.span>
          Education
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          My educational journey from literature to programming, combining
          analytical thinking with technical expertise
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* Vertical Timeline Line - Left Side - Hidden on mobile */}
          <div
            ref={timelineRef}
            className="absolute left-20 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary h-full rounded-full hidden md:block"
            style={{ height: "0%" }}
          />

          {/* Timeline Items */}
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative flex items-start mb-20 last:mb-0"
            >
              {/* Timeline Dot - Hidden on mobile */}
              <div
                ref={(el) => (dotsRef.current[index] = el)}
                className="absolute left-[76px] top-8 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-gray-900 z-10 shadow-lg hidden md:block"
              >
                <div className="absolute inset-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>

              {/* Year Badge - Left Side of Timeline on desktop, hidden on mobile */}
              <div
                ref={(el) => (yearsRef.current[index] = el)}
                className="absolute -left-6 top-7 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-10 hidden md:block"
              >
                {edu.year}
              </div>

              {/* Education Card */}
              <div className="ml-0 md:ml-28 w-full max-w-2xl">
                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:border-primary/40">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                  {/* Main Card */}
                  <div className="relative p-6 md:p-8 z-10 card-content">
                    {/* Year Tag - Mobile Only */}
                    <div className="md:hidden mb-4">
                      <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        {edu.year}
                      </span>
                    </div>

                    {/* Card Header */}
                    <div className="flex items-start gap-4 md:gap-6 mb-6">
                      <div className="relative card-icon">
                        <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                          <i
                            className={`${edu.icon} text-primary text-base md:text-lg`}
                          ></i>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="card-title text-white font-bold text-lg md:text-xl xl:text-2xl mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-semibold text-sm md:text-base mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                          {edu.field}
                        </p>
                      </div>
                    </div>

                    {/* Institution Info with Icons */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <div className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center">
                          <i className="fas fa-university text-primary text-xs"></i>
                        </div>
                        <span className="text-gray-300 text-xs font-medium">
                          {edu.institution}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-secondary/30 transition-all duration-300">
                        <div className="w-6 h-6 bg-secondary/20 rounded-md flex items-center justify-center">
                          <i className="fas fa-map-marker-alt text-secondary text-xs"></i>
                        </div>
                        <span className="text-gray-300 text-xs font-medium">
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="card-description text-gray-300 leading-relaxed mb-6 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {edu.description}
                    </p>

                    {/* Key Learning Areas */}
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-md flex items-center justify-center">
                          <span className="text-white text-xs">📚</span>
                        </div>
                        Key Learning Areas
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="achievement-item group flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-primary/30 hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 cursor-default"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                            <span className="text-gray-200 text-xs font-medium group-hover:text-white transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
                    <div className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Learning Section */}
      <div ref={continuousRef} className="mt-20 max-w-4xl mx-auto">
        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:border-primary/40">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

          <div className="relative p-8 text-center z-10">
            <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              My educational journey combines the analytical thinking and
              communication skills from my Bengali Literature background with
              intensive technical training from Programming Hero. This unique
              blend allows me to create user-centered solutions with attention
              to detail and deep technical proficiency.
            </p>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
            <div className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
