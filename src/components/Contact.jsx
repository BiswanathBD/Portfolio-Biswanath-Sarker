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
        }
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
        }
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
        }
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
            }
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
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden"
      id="contact"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div ref={titleRef} className="text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          <motion.span
            className="inline-block mr-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📧
          </motion.span>
          Get In Touch
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 max-w-6xl mx-auto items-stretch">
        {/* Info Card */}
        <div
          ref={infoCardRef}
          className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h3>
          <div className="space-y-3 flex-1">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.link}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all"
              >
                <div
                  className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center`}
                >
                  <i className={`${info.icon} ${info.color} text-base`} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{info.label}</p>
                  <p className="text-white font-semibold text-sm">
                    {info.value}
                  </p>
                </div>
              </a>
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
