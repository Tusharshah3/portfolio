import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const resumeDownloadLink =
  "https://drive.google.com/file/d/1Qqj656ELYFDsMR44oYgvrZRhlPMOwwQs/view?usp=drive_link"; // update if you change drive link

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/Tusharshah3",
    color: "hover:text-neutral-200",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/tushar-shah-b674921b1/",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="w-5 h-5" />,
    href: "mailto:tusharshah372003@gmail.com",
    color: "hover:text-red-400",
  },
  // {
  //   name: "WhatsApp",
  //   icon: <FaWhatsapp className="w-5 h-5" />,
  //   href: "https://wa.me/917477212156",
  //   color: "hover:text-green-400",
  // },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const Footer: React.FC = () => {
  useGSAP(() => {
    gsap.from(".name", {
      y: 80,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative mt-20 bg-linear-to-b from-transparent to-black/50"
    >
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950/20 to-transparent"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* FLEX CONTAINER */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* LEFT: CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-8"
            >
              {/* Header */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-4">
                  Let’s Connect
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Always open to opportunities, collaborations, or a tech conversation!
                </p>
              </div>

              {/* Contact Lines */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-neutral-400">
                  <FaMapMarkerAlt className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                  <span>Bhopal, India</span>
                </div>

                <div className="flex items-start gap-3 text-neutral-400">
                  <FaEnvelope className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                  <a
                    href="mailto:tusharshah372003@gmail.com"
                    className="hover:text-neutral-200 transition-colors break-all"
                  >
                    tusharshah372003@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Button */}
              <motion.a
                href="mailto:tusharshah372003@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-600 to-neutral-700 
                          hover:from-neutral-500 hover:to-neutral-600 text-white px-6 py-3 
                          rounded-xl text-base font-semibold transition-all duration-300 shadow-lg"
              >
                <FaEnvelope className="w-5 h-5" />
                Get In Touch
              </motion.a>

              {/* Resume */}
              <div className="pt-2">
                <p className="text-neutral-400 mb-3 text-base">Download my resume:</p>
                <motion.a
                  href={resumeDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border-2 border-neutral-600 text-neutral-300 
                            hover:bg-neutral-600/20 hover:border-neutral-500 px-6 py-3 rounded-xl 
                            text-base font-semibold transition-all duration-300"
                >
                  <FaDownload className="w-5 h-5" />
                  Resume.pdf
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT: SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Follow Me
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-neutral-900 to-black 
                              rounded-xl border border-neutral-800 hover:border-neutral-600 
                              transition-all duration-300 text-neutral-400"
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neutral-400 text-center md:text-left"
              >
                © {new Date().getFullYear()} Tushar Shah Portfolio.
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-neutral-300 hover:text-neutral-100 transition-colors duration-300 bg-neutral-800/50 px-4 py-2 rounded-lg hover:bg-neutral-700/50"
              >
                <FaArrowUp className="w-4 h-4" />
                Back to top
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
