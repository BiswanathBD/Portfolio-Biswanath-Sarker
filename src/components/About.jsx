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
  const imageContainerRef = useRef();
  const profileImageRef = useRef();
  const contentRef = useRef();
  const nameRef = useRef();
  const paragraphsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const floatingIconsRef = useRef([]);
  const accentElementsRef = useRef([]);

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
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Image container scale and fade
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 75%",
            end: "top 45%",
            scrub: 2,
          },
        }
      );

      // Profile image slide in from left
      gsap.fromTo(
        profileImageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: profileImageRef.current,
            start: "top 70%",
            end: "top 50%",
            scrub: 1.5,
          },
        }
      );

      // Content slide in from right
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: 1.5,
          },
        }
      );

      // Name animation
      gsap.fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: nameRef.current,
            start: "top 70%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );

      // Paragraphs stagger animation
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
                end: "top 65%",
                scrub: 1 + index * 0.2,
              },
            }
          );
        }
      });

      // Skill items stagger animation
      skillItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 65%",
                scrub: 1.5 + index * 0.3,
              },
            }
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
            }
          );
        }
      });

      // Accent elements animation
      accentElementsRef.current.forEach((element, index) => {
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
                start: "top 75%",
                end: "top 60%",
                scrub: 1.5,
              },
            }
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
      <div ref={titleRef} className="text-center mb-20">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          <motion.span
            className="inline-block mr-3"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            👨🏻‍💼
          </motion.span>
          About Me
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Full Stack Developer with a unique journey from literature to code,
          combining creativity with technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          ref={imageContainerRef}
          className="relative flex justify-center group order-2 md:order-1"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-secondary/15 to-primary/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700" />

          {/* Main Image Container */}
          <div
            ref={profileImageRef}
            className="relative w-3/4 hover:scale-105 hover:-translate-y-1 transition-transform duration-400"
          >
            {/* Image Container */}
            <div className="relative w-full border border-primary/50 p-1 bg-transparent rounded-2xl overflow-hidden">
              {/* Profile Image */}
              <img
                alt="Biswanath Sarker"
                className="w-full h-full object-cover rounded-xl"
                src={myImg}
              />

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-primary/5" />
            </div>

            {/* Corner Accent Elements */}
            <div
              ref={(el) => (accentElementsRef.current[0] = el)}
              className="absolute -top-3 -left-3 w-8 h-8 border-l-3 border-t-3 border-primary rounded-tl-lg opacity-80"
            />
            <div
              ref={(el) => (accentElementsRef.current[1] = el)}
              className="absolute -top-3 -right-3 w-8 h-8 border-r-3 border-t-3 border-secondary rounded-tr-lg opacity-80"
            />
            <div
              ref={(el) => (accentElementsRef.current[2] = el)}
              className="absolute -bottom-3 -left-3 w-8 h-8 border-l-3 border-b-3 border-primary rounded-bl-lg opacity-80"
            />
            <div
              ref={(el) => (accentElementsRef.current[3] = el)}
              className="absolute -bottom-3 -right-3 w-8 h-8 border-r-3 border-b-3 border-secondary rounded-br-lg opacity-80"
            />

            {/* Side Accent Lines */}
            <div
              ref={(el) => (accentElementsRef.current[4] = el)}
              className="absolute top-8 -left-1 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[5] = el)}
              className="absolute top-16 -left-1 w-4 h-0.5 bg-gradient-to-r from-secondary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[6] = el)}
              className="absolute bottom-8 -right-1 w-6 h-0.5 bg-gradient-to-l from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[7] = el)}
              className="absolute bottom-16 -right-1 w-4 h-0.5 bg-gradient-to-l from-secondary to-transparent opacity-60"
            />

            {/* Top and Bottom Accent Lines */}
            <div
              ref={(el) => (accentElementsRef.current[8] = el)}
              className="absolute -top-1 left-8 h-6 w-0.5 bg-gradient-to-b from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[9] = el)}
              className="absolute -top-1 left-16 h-4 w-0.5 bg-gradient-to-b from-secondary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[10] = el)}
              className="absolute -bottom-1 right-8 h-6 w-0.5 bg-gradient-to-t from-primary to-transparent opacity-60"
            />
            <div
              ref={(el) => (accentElementsRef.current[11] = el)}
              className="absolute -bottom-1 right-16 h-4 w-0.5 bg-gradient-to-t from-secondary to-transparent opacity-60"
            />
          </div>

          {/* Floating Tech Icons */}
          <div
            ref={(el) => (floatingIconsRef.current[0] = el)}
            className="absolute top-6 right-6 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20 shadow-lg"
          >
            <i className="fas fa-code text-primary text-sm"></i>
          </div>

          <div
            ref={(el) => (floatingIconsRef.current[1] = el)}
            className="absolute bottom-6 left-6 w-10 h-10 bg-secondary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-secondary/20 shadow-lg"
          >
            <i className="fas fa-laptop-code text-secondary text-sm"></i>
          </div>

          <div
            ref={(el) => (floatingIconsRef.current[2] = el)}
            className="absolute top-1/2 -right-6 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20 shadow-lg"
          >
            <i className="fas fa-rocket text-primary text-sm"></i>
          </div>
        </div>

        <div ref={contentRef} className="space-y-6 order-1 md:order-2">
          <h3
            ref={nameRef}
            className="font-display font-bold text-2xl md:text-3xl text-secondary"
          >
            I'm Biswanath Sarker
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p ref={(el) => (paragraphsRef.current[0] = el)}>
              Hi! I'm Biswanath Sarker, a passionate Full Stack Web Developer
              with a unique journey from Bengali Literature to modern web
              development. My educational background in literature has given me
              strong analytical thinking and excellent communication skills.
            </p>
            <p ref={(el) => (paragraphsRef.current[1] = el)}>
              I specialize in building modern, scalable web applications using
              the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy
              working on full-stack projects that challenge me to think both
              creatively and analytically, from designing intuitive user
              interfaces to architecting robust backend systems.
            </p>
            <p ref={(el) => (paragraphsRef.current[2] = el)}>
              When I'm not coding, I love reading Bengali literature, exploring
              new technologies, playing cricket, and spending time with family
              and friends. I believe in continuous learning and am always
              excited to take on new challenges.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            {[
              {
                icon: "laptop_mac",
                text: "Full Stack Web Development",
                color: "primary",
              },
              {
                icon: "smartphone",
                text: "Responsive Design & Mobile-First",
                color: "secondary",
              },
              {
                icon: "psychology",
                text: "Problem Solving & Innovation",
                color: "secondary",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (skillItemsRef.current[index] = el)}
                className={`group relative flex items-center p-4 rounded-xl border border-gray-800 bg-surface-dark hover:border-${item.color}/50 transition-all cursor-default shadow-sm overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                <div className="relative z-10 flex items-center w-full">
                  <div
                    className={`p-2 rounded-lg bg-${item.color}/10 text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-colors`}
                  >
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <span className="ml-4 font-medium text-gray-200">
                    {item.text}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
