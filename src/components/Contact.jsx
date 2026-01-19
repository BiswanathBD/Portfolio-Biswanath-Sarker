import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const infoCardRef = useRef();
  const formRef = useRef();
  const socialIconsRef = useRef([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Animation
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
            id: "contact-title",
          },
        },
      );

      // 2. Info Card (Slide from Left)
      gsap.fromTo(
        infoCardRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: infoCardRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: 1.2,
            id: "contact-info-card",
          },
        },
      );

      // 3. Form Card (Slide from Right)
      gsap.fromTo(
        formRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: 1.2,
            id: "contact-form-card",
          },
        },
      );

      // 4. Social Icons (Staggered Fade & Scale)
      socialIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: icon,
                start: "top 75%",
                end: "top 60%",
                scrub: 1 + index * 0.15,
                id: `contact-social-${index}`,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your emailjs logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "biswanath.sarker.bd@gmail.com",
      link: "mailto:biswanath.sarker.bd@gmail.com",
      color: "text-red-400",
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+880 1628 284848",
      link: "tel:+8801628284848",
      color: "text-green-400",
    },
    {
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      value: "+880 1628 284848",
      link: "https://wa.me/8801628284848",
      color: "text-green-500",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
      color: "text-blue-400",
    },
  ];

  const socials = [
    { href: "https://github.com/BiswanathBD", icon: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/biswanath-sarker-bd/",
      icon: "fab fa-linkedin-in",
    },
    {
      href: "https://web.facebook.com/Biswanath.Sarker.BD",
      icon: "fab fa-facebook-f",
    },
    { href: "https://x.com/Biswanath08BD", icon: "fab fa-twitter" },
    {
      href: "https://www.instagram.com/biswanath.sarker.bd/",
      icon: "fab fa-instagram",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-20"
      id="contact"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div ref={titleRef} className="text-center mb-8 md:mb-16 relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative inline-block">
          {/* Main Title */}
          <div className="relative">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 relative z-10 tracking-tight">
              Get In{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient">
                  Touch
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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 max-w-6xl mx-auto items-stretch">
        {/* Info Card */}
        <div
          ref={infoCardRef}
          className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col"
        >
          {/* Title with divider */}
          <h3 className="text-2xl font-bold text-white mb-4">
            Contact Information
          </h3>

          <div className="space-y-4 flex-1">
            {contactInfo.map((info, i) => (
              <div key={i} className="group/item relative">
                {/* Glowing background on hover */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${
                    i % 2 === 0
                      ? "from-primary/20 to-primary/5"
                      : "from-secondary/20 to-secondary/5"
                  } rounded-2xl blur-lg opacity-0 group-hover/item:opacity-100 transition-all duration-500`}
                />

                <a
                  href={info.link}
                  className="relative flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />

                  {/* Icon container */}
                  <div
                    className={`relative flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${
                      i % 2 === 0
                        ? "from-primary/20 to-primary/5"
                        : "from-secondary/20 to-secondary/5"
                    } flex items-center justify-center border ${
                      i % 2 === 0 ? "border-primary/20" : "border-secondary/20"
                    } group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-500`}
                  >
                    <i className={`${info.icon} ${info.color} text-xl`} />
                  </div>

                  {/* Text */}
                  <div className="relative flex-1">
                    <p className="text-gray-400 text-xs font-medium mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-white font-semibold text-sm group-hover/item:text-gray-100 transition-colors">
                      {info.value}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className={`${info.color} opacity-0 group-hover/item:opacity-100 transition-opacity`}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <i className="fas fa-arrow-right text-sm" />
                  </motion.div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Vertical */}
        <div className="flex lg:flex-col items-center justify-center gap-6 px-2">
          {socials.map((s, i) => (
            <a
              key={i}
              ref={(el) => (socialIconsRef.current[i] = el)}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 flex items-center justify-center text-white hover:from-primary/20 hover:to-secondary/20 transition-all hover:scale-110"
            >
              <i className={`${s.icon}`} />
            </a>
          ))}
        </div>

        {/* Form Card */}
        <div
          ref={formRef}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-5 flex-1 flex flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-all"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-all resize-none flex-1"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary font-bold py-4 rounded-xl hover:from-primary/30 hover:to-secondary/30 hover:border-primary/40 transition-all hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
