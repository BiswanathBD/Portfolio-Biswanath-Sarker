import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroProfile from "../assets/heroProfile.jpeg";

const ProfileShowcase = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  // Extract specific skills for each circle
  const getSkillByName = (name) => {
    for (const category of skills) {
      const skill = category.skills.find((s) => s.name === name);
      if (skill) return skill;
    }
    return null;
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="relative order-1 md:order-2 flex justify-center items-center py-20 md:py-16"
      variants={imageVariants}
    >
      {/* --- BACKGROUND GRADIENT --- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[100px] opacity-25 scale-75"
        animate={{ rotate: [0, 360], scale: [0.75, 0.85, 0.75] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* 1. Inner Circle */}
      <div className="absolute w-60 md:w-80 aspect-square rounded-full border border-primary opacity-20 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* 2. Middle Circle */}
      <div className="absolute w-80 md:w-[24rem] aspect-square rounded-full border border-secondary opacity-20 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* 3. Outer Circle */}
      <div className="absolute w-[24rem] md:w-[28rem] aspect-square rounded-full border border-primary opacity-15 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* 4. Far Outer Circle */}
      <div className="absolute w-[28rem] md:w-[32rem] aspect-square rounded-full border border-secondary opacity-10 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* --- PROFILE IMAGE  --- */}
      <motion.div
        className="relative w-48 md:w-64 aspect-square rounded-full border-2 border-primary/50 bg-transparent overflow-hidden shadow-[0_0_100px_10px_#a855f760] z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <img
          alt="Biswanath Sarker"
          className="w-full h-full rounded-full object-cover"
          src={heroProfile}
        />
      </motion.div>

      {/* --- ICONS: INNER CIRCLE (Frontend) --- */}
      <motion.div
        className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full z-20 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {/* HTML5 */}
        <motion.div
          className="absolute w-7 h-7 top-2 left-1/2 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("HTML5") && (
            <img
              src={getSkillByName("HTML5").icon}
              alt="HTML5"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* CSS3 */}
        <motion.div
          className="absolute w-6 h-6 top-1/2 right-1.5 -mr-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("CSS3") && (
            <img
              src={getSkillByName("CSS3").icon}
              alt="CSS3"
              className="w-3.5 h-3.5 object-contain"
            />
          )}
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="absolute w-7 h-7 bottom-2 left-1/2 -ml-5 -mb-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("JavaScript") && (
            <img
              src={getSkillByName("JavaScript").icon}
              alt="JavaScript"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* React */}
        <motion.div
          className="absolute w-6 h-6 top-1/2 left-1.5 -ml-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("React") && (
            <motion.img
              src={getSkillByName("React").icon}
              alt="React"
              className="w-3.5 h-3.5 object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* --- ICONS: MIDDLE CIRCLE (Backend) --- */}
      <motion.div
        className="absolute w-80 md:w-[24rem] aspect-square rounded-full z-10 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Node.js */}
        <motion.div
          className="absolute w-7 h-7 top-2 left-1/2 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Node.js") && (
            <img
              src={getSkillByName("Node.js").icon}
              alt="Node.js"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Express.js */}
        <motion.div
          className="absolute w-6 h-6 top-1/2 right-1.5 -mr-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Express.js") && (
            <img
              src={getSkillByName("Express.js").icon}
              alt="Express.js"
              className="w-3.5 h-3.5 object-contain invert"
            />
          )}
        </motion.div>

        {/* MongoDB */}
        <motion.div
          className="absolute w-8 h-8 -bottom-4 left-1/2 -ml-4.5 -mb-4.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("MongoDB") && (
            <img
              src={getSkillByName("MongoDB").icon}
              alt="MongoDB"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          className="absolute w-6 h-6 top-1/2 left-1 -ml-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Tailwind CSS") && (
            <img
              src={getSkillByName("Tailwind CSS").icon}
              alt="Tailwind CSS"
              className="w-3.5 h-3.5 object-contain"
            />
          )}
        </motion.div>
      </motion.div>

      {/* --- ICONS: THIRD CIRCLE (Tools) --- */}
      <motion.div
        className="absolute w-[24rem] md:w-[28rem] aspect-square rounded-full z-0 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {/* Git */}
        <motion.div
          className="absolute w-7 h-7 top-2 left-1/2 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Git") && (
            <img
              src={getSkillByName("Git").icon}
              alt="Git"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Firebase */}
        <motion.div
          className="absolute w-6 h-6 top-1/2 right-1 -mr-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Firebase") && (
            <img
              src={getSkillByName("Firebase").icon}
              alt="Firebase"
              className="w-3.5 h-3.5 object-contain"
            />
          )}
        </motion.div>

        {/* Netlify */}
        <motion.div
          className="absolute w-7 h-7 bottom-2 left-1/2 -ml-5 -mb-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Netlify") && (
            <img
              src={getSkillByName("Netlify").icon}
              alt="Netlify"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Postman */}
        <motion.div
          className="absolute w-6 h-6 top-1/2 left-1 -ml-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Postman") && (
            <img
              src={getSkillByName("Postman").icon}
              alt="Postman"
              className="w-3.5 h-3.5 object-contain"
            />
          )}
        </motion.div>
      </motion.div>

      {/* --- ICONS: OUTER CIRCLE (UI/Animation) --- */}
      <motion.div
        className="absolute w-[28rem] h-[34rem] md:w-[32rem] aspect-square rounded-full z-0 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        {/* GSAP */}
        <motion.div
          className="absolute w-8 h-8 top-8 md:top-0 left-1/2 -ml-4.5 -mt-4.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("GSAP") && (
            <img
              src={getSkillByName("GSAP").icon}
              alt="GSAP"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Framer Motion */}
        <motion.div
          className="absolute w-7 h-7 top-1/2 right-1.5 -mr-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Framer Motion") && (
            <img
              src={getSkillByName("Framer Motion").icon}
              alt="Framer Motion"
              className="w-4 h-4 object-contain"
            />
          )}
        </motion.div>

        {/* Swiper */}
        <motion.div
          className="absolute w-6 h-6 bottom-12 md:bottom-5 left-1/2 -ml-4 -mb-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("Swiper") && (
            <img
              src={getSkillByName("Swiper").icon}
              alt="Swiper"
              className="w-3.5 h-3.5 object-contain"
            />
          )}
        </motion.div>

        {/* AOS */}
        <motion.div
          className="absolute w-7 h-7 top-1/2 left-1.5 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          {getSkillByName("AOS") && (
            <img
              src={getSkillByName("AOS").icon}
              alt="AOS"
              className="w-4 h-4 object-contain rounded-full"
            />
          )}
        </motion.div>
      </motion.div>

      {/* --- Asteroid Belt - Floating Particles (Far Outer) --- */}
      <motion.div
        className="absolute w-[40rem] h-[40rem] md:w-[50rem] md:h-[50rem] rounded-full z-0 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(12)].map((_, index) => {
          const angle = (index * 30 * Math.PI) / 180;
          const radius = 300;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
                rotate: -360,
              }}
              transition={{
                opacity: {
                  duration: 2 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 3 + index * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ProfileShowcase;
