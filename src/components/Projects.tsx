import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import med from "../images/medium.png";

import exc from "../images/excc.png";
import mudra from "../images/mudrax.png";
import chessImg from "../images/chess.png";
import tttImg from "../images/xo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  img: string;
  github: string;
  live: string | null;
  tags: string[];
  category: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Realtime Chess",
      description:
        "A real-time multiplayer Chess game with live WebSocket-based gameplay, context state management, and interactive UI built with React and Tailwind.",
      longDescription:
        "A real-time multiplayer Chess game with live WebSocket-based gameplay, context state management, and interactive UI. Features include move validation, game state persistence, and an intuitive interface for seamless gameplay experience.",
      img: chessImg,
      github: "https://github.com/nikhilachale/Chess",
      live: null,
      tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"],
      category: "Real-time Gaming",
      featured: true,
    },
    {
      id: 2,
      title: "XOXO Clash",
      description:
        "A real-time multiplayer Tic Tac Toe game built with React and WebSockets, supporting live moves and persistent game state.",
      longDescription:
        "A real-time multiplayer Tic Tac Toe game built with React and WebSockets. Players can compete in live matches with instant move synchronization and persistent game state tracking for an engaging gaming experience.",
      img: tttImg,
      github: "https://github.com/nikhilachale/XOXO-Clash",
      live: "https://xoxo-clash-mu.vercel.app/",
      tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"],
      category: "Real-time Gaming",
      featured: true,
    },
    {
      id: 3,
      title: "MudraX",
      description:
        "A Solana-based Web3 DApp to generate HD wallets, request SOL airdrops, sign messages, and transfer tokens with both mnemonic and wallet adapter support.",
      longDescription:
        "A comprehensive Solana-based Web3 DApp that enables users to generate HD wallets, request SOL airdrops, sign messages, and transfer tokens. Built with both mnemonic and wallet adapter support for enhanced security and flexibility.",
      img: mudra,
      github: "https://github.com/nikhilachale/MudraX",
      live: "https://mudrax.vercel.app/",
      tags: [
        "React",
        "Tailwind",
        "TypeScript",
        "Solana",
        "Web3",
        "Wallet Adapter",
        "bip39",
      ],
      category: "Web3 Application",
      featured: true,
    },
    {
      id: 4,
      title: "Medium Clone",
      description:
        "A Medium-like blogging platform with authentication and CRUD features.",
      longDescription:
        "A feature-rich blogging platform inspired by Medium, complete with user authentication, article creation, editing, and deletion capabilities. Built with modern web technologies for optimal performance.",
      img: med,
      github: "https://github.com/nikhilachale/Medium",
      live: "https://cohort-omega.vercel.app/",
      tags: [
        "React",
        "Tailwind",
        "TypeScript",
        "Cloudflare",
        "PostgreSQL",
        "Prisma",
      ],
      category: "Full Stack",
      featured: false,
    },
    {
      id: 5,
      title: "Excalidraw Clone",
      description:
        "A collaborative whiteboard tool mimicking Excalidraw, built for real-time visual ideation and sketching.",
      longDescription:
        "A collaborative whiteboard tool inspired by Excalidraw, designed for real-time visual ideation and sketching. Perfect for brainstorming sessions and creative collaboration with an intuitive drawing interface.",
      img: exc,
      github: "https://github.com/nikhilachale/Excalidraw",
      live: null,
      tags: ["React", "Tailwind", "TypeScript", "Canvas", "Realtime"],
      category: "Creative Tools",
      featured: false,
    },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [lineActive, setLineActive] = useState(false);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      isScrollingDown.current = currentY > lastScrollY.current;
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isScrollingDown.current) {
            setLineActive(true);
          } else if (!entry.isIntersecting) {
            setLineActive(false);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/5 to-transparent"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack
            development, real-time apps, and scalable architectures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Left (Details) */}
              <motion.div
                className={`space-y-5 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                initial={{
                  x: index % 2 === 1 ? 100 : -100,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  duration: 0.8,
                  delay: index * 0.12,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-neutral-400 font-medium text-xs uppercase tracking-wide">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-linear-to-r from-neutral-600/30 to-neutral-500/30 border border-neutral-500/50 text-neutral-200 px-3 py-1 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-neutral-300">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-linear-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-600/20 hover:border-neutral-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>
              </motion.div>

              {/* Right (Image) */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-neutral-600/30 to-neutral-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 group-hover:border-neutral-600 transition-all duration-500 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.img}
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {project.live && (
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-linear-to-r from-neutral-600 to-neutral-700 text-white p-5 rounded-full shadow-2xl"
                        >
                          <FaExternalLinkAlt className="w-7 h-7" />
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Center line + dots */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={lineActive ? { scaleY: 1.12 } : { scaleY: 0 }}
            transition={{
              duration: 2.0,
              delay: lineActive ? 0.3 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-neutral-400/60 to-transparent origin-top hidden lg:block z-0"
          />
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/Tusharshah3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 text-neutral-300 hover:text-neutral-100 font-semibold text-xl transition-colors duration-300 group"
          >
            <span className="relative">
              View More Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-neutral-500 to-neutral-300 group-hover:w-full transition-all duration-300"></span>
            </span>
            <FaCirclePlus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
