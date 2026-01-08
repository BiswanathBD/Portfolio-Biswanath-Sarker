import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration - You'll need to replace these with your actual values
      const serviceId = "service_portfolio"; // Replace with your EmailJS service ID
      const templateId = "template_contact"; // Replace with your EmailJS template ID
      const publicKey = "your_public_key"; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "biswanath.sarker.bd@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <motion.section
      className="py-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div className="text-center mb-16" variants={itemVariants}>
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-white mb-4"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block mr-3"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            📧
          </motion.span>
          Get In Touch
        </motion.h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="text-gray-400 mt-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together!
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" variants={cardVariants}>
          <motion.div
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              initial={false}
            />

            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
              initial={false}
            />

            <div className="relative z-10">
              <motion.h3
                className="font-display font-bold text-2xl text-white mb-6"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                I'm always open to discussing new opportunities, creative
                projects, or just having a friendly chat about technology and
                development.
              </motion.p>

              <motion.div className="space-y-6" variants={containerVariants}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-2xl bg-gray-800/50 border border-gray-700 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={`${info.icon} text-lg`}></i>
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="mt-8 pt-8 border-t border-white/10"
                variants={itemVariants}
              >
                <p className="text-gray-400 text-sm mb-4">
                  Follow me on social media
                </p>
                <motion.div
                  className="flex space-x-4"
                  variants={containerVariants}
                >
                  {[
                    {
                      href: "https://github.com/BiswanathBD",
                      icon: "fab fa-github",
                      color: "hover:bg-gray-700",
                    },
                    {
                      href: "https://www.linkedin.com/in/biswanath-sarker-bd/",
                      icon: "fab fa-linkedin-in",
                      color: "hover:bg-blue-500",
                    },
                    {
                      href: "https://web.facebook.com/Biswanath.Sarker.BD",
                      icon: "fab fa-facebook-f",
                      color: "hover:bg-blue-600",
                    },
                    {
                      href: "https://x.com/Biswanath08BD",
                      icon: "fab fa-twitter",
                      color: "hover:bg-blue-400",
                    },
                    {
                      href: "https://www.instagram.com/biswanath.sarker.bd/",
                      icon: "fab fa-instagram",
                      color: "hover:bg-pink-500",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white ${social.color} hover:border-primary/30 transition-all duration-300`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"
              initial={false}
            />
            <motion.div className="absolute top-1/2 left-0 w-1 h-16 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
          variants={formVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="font-display font-bold text-2xl text-white mb-6"
            variants={itemVariants}
          >
            Send Message
          </motion.h3>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
          >
            {/* Name Field */}
            <motion.div className="group" variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <div className="relative">
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div className="group" variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div className="group" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Message
              </label>
              <div className="relative">
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group w-full relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-2xl font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.i
                      className="fas fa-spinner"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.i
                      className="fas fa-paper-plane"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                className="p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-check-circle mr-2"></i>
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-exclamation-circle mr-2"></i>
                Failed to send message. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
