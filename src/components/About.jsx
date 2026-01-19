import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImg from "../assets/aboutMeImg.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const titleRef = useRef();
  const titleTextRef = useRef();
  const imageContainerRef = useRef();
  const contentRef = useRef();
  const nameRef = useRef();
  const paragraphsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const floatingIconsRef = useRef([]);
  const accentElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
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

      gsap.fromTo(
        titleTextRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleTextRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1.5,
          },
        },
      );

      // Image and content animations
      gsap.fromTo(
        imageContainerRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 100%",
            end: "top 80%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            end: "top 80%",
            scrub: 1.5,
          },
        },
      );

      gsap.fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: nameRef.current,
            start: "top 80%",
            end: "top 65%",
            scrub: 1,
          },
        },
      );

      // Paragraphs animation
      paragraphsRef.current.forEach((paragraph, index) => {
        if (paragraph) {
          gsap.fromTo(
            paragraph,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 85%",
                end: "top 75%",
                scrub: 1 + index * 0.2,
              },
            },
          );
        }
      });

      // Skill items animation
      skillItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "top 85%",
                scrub: 1.5 + index * 0.3,
              },
            },
          );
        }
      });

      // Floating icons animation
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              ease: "none",
              scrollTrigger: {
                trigger: icon,
                start: "top 80%",
                end: "top 60%",
                scrub: 1 + index * 0.2,
              },
            },
          );
        }
      });

      // Accent elements animation
      accentElementsRef.current.forEach((element) => {
        if (element) {
          gsap.fromTo(
            element,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 0.8,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "top 80%",
                scrub: 0.5,
              },
            },
          );
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div ref={titleRef} className="text-center mb-8 md:mb-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative inline-block">
          {/* Main Title */}
          <div ref={titleTextRef} className="relative">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 relative z-10 tracking-tight">
              About{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient">
                  Me
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          ref={imageContainerRef}
          className="relative flex justify-center group order-2 md:order-1"
        >
          {/* Main Image Container */}
          <div className="relative w-2/3 hover:scale-105 transition-all duration-1000 shadow-[0_0_100px_rgba(167,85,246,0.2)] hover:shadow-[0_0_140px_rgba(167,85,246,0.3)] rounded-2xl">
            {/* Image Container */}
            <div className="relative w-full border border-primary/50 p-1 bg-transparent rounded-2xl overflow-hidden">
              {/* Profile Image */}
              <img
                alt="Biswanath Sarker"
                className="w-full aspect-square object-cover rounded-xl"
                src={myImg}
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-primary/5" />
            </div>

            {/* Corner Accent Elements */}
            <div
              ref={(el) => (accentElementsRef.current[0] = el)}
              className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-80"
            />
            <div
              ref={(el) => (accentElementsRef.current[1] = el)}
              className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-secondary rounded-tr-lg opacity-80"
            />
            <div
              ref={(el) => (accentElementsRef.current[2] = el)}
              className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-80"
            />
            <div
              ref={(el) => (accentElementsRef.current[3] = el)}
              className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-secondary rounded-br-lg opacity-80"
            />

            {/* Side Accent Lines */}
            <div
              ref={(el) => (accentElementsRef.current[4] = el)}
              className="absolute top-6 -left-1 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[5] = el)}
              className="absolute top-12 -left-1 w-3 h-0.5 bg-gradient-to-r from-secondary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[6] = el)}
              className="absolute bottom-6 -right-1 w-4 h-0.5 bg-gradient-to-l from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[7] = el)}
              className="absolute bottom-12 -right-1 w-3 h-0.5 bg-gradient-to-l from-secondary to-transparent opacity-60"
            />

            {/* Top and Bottom Accent Lines */}
            <div
              ref={(el) => (accentElementsRef.current[8] = el)}
              className="absolute -top-1 left-6 h-4 w-0.5 bg-gradient-to-b from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[9] = el)}
              className="absolute -top-1 left-12 h-3 w-0.5 bg-gradient-to-b from-secondary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[10] = el)}
              className="absolute -bottom-1 right-6 h-4 w-0.5 bg-gradient-to-t from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[11] = el)}
              className="absolute -bottom-1 right-12 h-3 w-0.5 bg-gradient-to-t from-secondary to-transparent opacity-60"
            />
          </div>

          {/* Floating Tech Icons */}
          <div
            ref={(el) => (floatingIconsRef.current[0] = el)}
            className="absolute top-4 right-4 w-8 h-8 bg-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/20 shadow-lg"
          >
            <i className="fas fa-code text-primary text-xs"></i>
          </div>

          <div
            ref={(el) => (floatingIconsRef.current[1] = el)}
            className="absolute bottom-4 left-4 w-8 h-8 bg-secondary/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-secondary/20 shadow-lg"
          >
            <i className="fas fa-laptop-code text-secondary text-xs"></i>
          </div>

          <div
            ref={(el) => (floatingIconsRef.current[2] = el)}
            className="absolute top-1/2 -right-4 w-8 h-8 bg-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/20 shadow-lg"
          >
            <i className="fas fa-rocket text-primary text-xs"></i>
          </div>
        </div>

        <div ref={contentRef} className="space-y-8 order-1 md:order-2">
          {/* Name with gradient background */}
          <div ref={nameRef} className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl rounded-2xl" />
            <h3 className="relative font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient">
                Biswanath Sarker
              </span>
            </h3>
          </div>

          {/* About paragraphs - simplified */}
          <div className="space-y-6">
            <p
              ref={(el) => (paragraphsRef.current[0] = el)}
              className="text-gray-300 leading-relaxed text-base"
            >
              I am a passionate{" "}
              <span className="text-primary font-semibold">
                MERN Stack web developer
              </span>{" "}
              and a fresher who genuinely enjoys building modern web
              applications. My interest in web development comes from my love
              for{" "}
              <span className="text-secondary font-semibold">
                art and painting
              </span>
              , as it allows me to express creativity through UI design and
              visual layouts while solving real-world problems.
            </p>

            <p
              ref={(el) => (paragraphsRef.current[1] = el)}
              className="text-gray-300 leading-relaxed text-base"
            >
              I focus on writing{" "}
              <span className="text-primary font-semibold">
                clean, functional code
              </span>{" "}
              while maintaining strong attention to user experience and design
              aesthetics. I am a{" "}
              <span className="text-secondary font-semibold">
                quick learner
              </span>
              , patient problem solver, and continuously motivated to improve my
              skills by working on real projects and exploring both{" "}
              <span className="text-primary font-semibold">
                frontend and backend
              </span>{" "}
              development to grow into a strong full-stack developer.
            </p>
          </div>

          {/* Enhanced skill items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {[
              {
                icon: "code",
                text: "MERN Stack Development",
                color: "primary",
                gradient: "from-primary/20 to-primary/5",
              },
              {
                icon: "palette",
                text: "Frontend & UI Design Thinking",
                color: "secondary",
                gradient: "from-secondary/20 to-secondary/5",
              },
              {
                icon: "psychology",
                text: "Problem Solving & Logic Building",
                color: "primary",
                gradient: "from-primary/20 to-secondary/5",
              },
              {
                icon: "storage",
                text: "Backend & API Fundamentals",
                color: "secondary",
                gradient: "from-secondary/20 to-primary/5",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (skillItemsRef.current[index] = el)}
                className="group relative"
              >
                {/* Glowing background on hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                <div className="relative flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/20 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Icon container */}
                  <div
                    className={`relative flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center border border-${item.color}/20 group-hover:scale-110 transition-all duration-500`}
                  >
                    <span
                      className={`material-icons text-${item.color} text-base`}
                    >
                      {item.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <span className="relative font-medium text-sm text-gray-200 group-hover:text-white transition-colors flex-1">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
