import { motion } from "framer-motion";

const ProfileShowcase = () => {
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
      className="relative order-1 md:order-2 flex justify-center items-center py-20 md:py-0"
      variants={imageVariants}
    >
      {/* --- BACKGROUND GRADIENT --- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[60px] opacity-40 scale-75"
        animate={{ rotate: [0, 360], scale: [0.75, 0.85, 0.75] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* --- STATIC ORBIT LINES (Visual Guide) --- */}
      {/* 1. Inner Circle */}
      <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border border-blue-400 opacity-20 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* 2. Middle Circle */}
      <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border border-purple-400 opacity-20 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* 3. Outer Circle */}
      <div className="absolute w-[26rem] h-[26rem] md:w-[36rem] md:h-[36rem] rounded-full border border-cyan-400 opacity-15 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* 4. Far Outer Circle */}
      <div className="absolute w-[34rem] h-[34rem] md:w-[45rem] md:h-[45rem] rounded-full border border-green-400 opacity-10 z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* --- PROFILE IMAGE (Resized for better spacing) --- */}
      <motion.div
        className="relative w-48 md:w-64 aspect-square rounded-full border-4 border-primary bg-transparent overflow-hidden shadow-2xl z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          alt="Biswanath Sarker"
          className="w-full h-full rounded-full object-cover"
          src="https://i.ibb.co.com/TBWLX9Q6/IMG-0657.jpg"
        />
      </motion.div>

      {/* --- ICONS: INNER CIRCLE (Frontend) --- */}
      <motion.div
        className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full z-20 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {/* Icons are pointer-events-auto to allow hover inside the rotating container */}
        <motion.div
          className="absolute w-10 h-10 top-0 left-1/2 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fab fa-html5 text-orange-500 text-lg"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 top-1/2 right-0 -mr-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fab fa-css3-alt text-blue-500 text-sm"></i>
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 bottom-0 left-1/2 -ml-5 -mb-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fab fa-js text-yellow-400 text-lg"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 top-1/2 left-0 -ml-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <motion.i
            className="fab fa-react text-blue-400 text-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>

      {/* --- ICONS: MIDDLE CIRCLE (Backend) --- */}
      <motion.div
        className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full z-10 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute w-10 h-10 top-0 left-1/2 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fab fa-node-js text-green-500 text-lg"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 top-1/2 right-0 -mr-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-server text-gray-300 text-xs"></i>
        </motion.div>

        <motion.div
          className="absolute w-9 h-9 bottom-0 left-1/2 -ml-4.5 -mb-4.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-leaf text-green-600 text-sm"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 top-1/2 left-0 -ml-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-database text-blue-300 text-xs"></i>
        </motion.div>
      </motion.div>

      {/* --- ICONS: THIRD CIRCLE (Tools) --- */}
      <motion.div
        className="absolute w-[26rem] h-[26rem] md:w-[36rem] md:h-[36rem] rounded-full z-0 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute w-10 h-10 top-0 left-1/2 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fab fa-git-alt text-red-500 text-lg"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 top-1/2 right-0 -mr-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-fire text-orange-400 text-xs"></i>
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 bottom-0 left-1/2 -ml-5 -mb-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-wind text-cyan-400 text-lg"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 top-1/2 left-0 -ml-4 -mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-code text-indigo-400 text-xs"></i>
        </motion.div>
      </motion.div>

      {/* --- ICONS: OUTER CIRCLE (Cloud/Other) --- */}
      <motion.div
        className="absolute w-[34rem] h-[34rem] md:w-[45rem] md:h-[45rem] rounded-full z-0 pointer-events-none"
        style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute w-9 h-9 top-0 left-1/2 -ml-4.5 -mt-4.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-globe text-teal-400 text-sm"></i>
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 top-1/2 right-0 -mr-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-triangle text-white text-base"></i>
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 bottom-0 left-1/2 -ml-4 -mb-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fas fa-cloud text-sky-400 text-xs"></i>
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 top-1/2 left-0 -ml-5 -mt-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.2, zIndex: 50 }}
        >
          <i className="fab fa-github text-white text-lg"></i>
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
          const radius = 300; // Adjusted for wider circle
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