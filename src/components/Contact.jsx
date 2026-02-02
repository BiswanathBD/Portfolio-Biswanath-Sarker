import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast from "react-hot-toast";

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
            start: "top 90%",
            end: "top 60%",
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
            start: "top 90%",
            end: "top 60%",
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
                start: "top 90%",
                end: "top 80%",
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
    toast("Email sending feature not complete yet", {
      icon: "⚠️",
    });
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
    {
      href: "https://github.com/BiswanathBD",
      icon: "fab fa-github",
      color: "hover:text-white",
      glow: "from-white/20 to-white/20",
      borderColor: "group-hover:border-white/50",
      shadowColor: "group-hover:shadow-white/20",
    },
    {
      href: "https://www.linkedin.com/in/biswanath-sarker-bd/",
      icon: "fab fa-linkedin-in",
      color: "hover:text-blue-400",
      glow: "from-blue-400/20 to-blue-500/20",
      borderColor: "group-hover:border-blue-400/50",
      shadowColor: "group-hover:shadow-blue-400/20",
    },
    {
      href: "https://web.facebook.com/Biswanath.Sarker.BD",
      icon: "fab fa-facebook-f",
      color: "hover:text-blue-500",
      glow: "from-blue-500/20 to-blue-600/20",
      borderColor: "group-hover:border-blue-500/50",
      shadowColor: "group-hover:shadow-blue-500/20",
    },
    {
      href: "https://x.com/Biswanath08BD",
      icon: "fab fa-twitter",
      color: "hover:text-sky-400",
      glow: "from-sky-400/20 to-sky-500/20",
      borderColor: "group-hover:border-sky-400/50",
      shadowColor: "group-hover:shadow-sky-400/20",
    },
    {
      href: "https://www.instagram.com/biswanath.sarker.bd/",
      icon: "fab fa-instagram",
      color: "hover:text-pink-400",
      glow: "from-pink-400/20 to-purple-500/20",
      borderColor: "group-hover:border-pink-400/50",
      shadowColor: "group-hover:shadow-pink-400/20",
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
                    } group-hover/item:scale-110 transition-all duration-500`}
                  >
                    <i className={`${info.icon} ${info.color} text-xl`} />
                  </div>

                  {/* Text */}
                  <div className="relative flex-1">
                    <p className="text-gray-400 text-wrap text-xs font-medium mb-0.5">
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
            <motion.a
              key={i}
              ref={(el) => (socialIconsRef.current[i] = el)}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Glow effect on hover with platform-specific color */}
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${s.glow} blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={false}
              />

              {/* Icon container */}
              <div
                className={`relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center text-gray-400 ${s.color} transition-all duration-300 ${s.borderColor} group-hover:shadow-lg ${s.shadowColor}`}
              >
                <i className={`${s.icon} text-base`} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form Card */}
        <div
          ref={formRef}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex-1 flex flex-col"
          >
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-all peer"
                required
              />
              <label
                className={`absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ${formData.name ? "-top-3 translate-y-0 text-xs bg-primary text-white px-2 py-1 rounded-md font-semibold" : "top-1/2 -translate-y-1/2 text-base"} peer-focus:-top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:bg-primary peer-focus:text-white peer-focus:px-2 peer-focus:py-1 peer-focus:rounded-md peer-focus:font-semibold`}
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-all peer"
                required
              />
              <label
                className={`absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 ${formData.email ? "-top-3 translate-y-0 text-xs bg-primary text-white px-2 py-1 rounded-md font-semibold" : "top-1/2 -translate-y-1/2 text-base"} peer-focus:-top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:bg-primary peer-focus:text-white peer-focus:px-2 peer-focus:py-1 peer-focus:rounded-md peer-focus:font-semibold`}
              >
                Email Address
              </label>
            </div>

            {/* Message Textarea */}
            <div className="relative flex-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full h-full p-4 rounded-xl bg-white/5 border border-white/20 text-white focus:border-primary focus:outline-none transition-all resize-none peer"
                required
              />
              <label
                className={`absolute left-4 pointer-events-none transition-all duration-300 ${formData.message ? "-top-3 text-xs bg-primary text-white px-2 py-1 rounded-md font-semibold" : "top-6 text-base text-gray-400"} peer-focus:-top-3 peer-focus:text-xs peer-focus:bg-primary peer-focus:text-white peer-focus:px-2 peer-focus:py-1 peer-focus:rounded-md peer-focus:font-semibold`}
              >
                Your Message
              </label>
            </div>

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
