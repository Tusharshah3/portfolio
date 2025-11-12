import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

import excalidrawImg from "../images/execalidraw.png";
import myBrainImg from "../images/MyBrain.png";
import instamart from "../images/instamart.png";
import exeImg from "../images/exe_clone.png";
import visuImg from "../images/visuSynth.png";
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
  title: "Real-Time Collaborative Whiteboard",
  description: "A live, Excalidraw-like whiteboard where multiple users can draw, resize, and erase shapes together in real time.",
  longDescription:
    "A full-stack real-time whiteboard application built using Next.js, TypeScript, and WebSockets. It allows multiple users to draw simultaneously on a shared canvas with tools like pencil, shapes, eraser, text, and resize. Every action syncs instantly via WebSockets and is persisted in a PostgreSQL database using Prisma. Features include smooth panning, zooming, selection, and a lag-free optimistic UI powered by a tempId-to-DB-ID mapping system.",
  img: excalidrawImg, // your imported image variable
  github: "https://github.com/Tusharshah3/exclidraw",
  live: "https://anydraw-frontend.onrender.com", 
  tags: ["Next.js", "TypeScript", "WebSocket", "Prisma", "Canvas API", "PostgreSQL"],
  category: "Full Stack / Real-time Collaboration",
  featured: true,
},
    {
    id: 2,
    title: "InstaMart",
    description: "A Swiggy-like full-stack food ordering platform with real checkout, payments, and order tracking built using Go, GraphQL, Redis, and Next.js.",
    longDescription:
      "InstaMart is a production-grade Swiggy-style food delivery system engineered with Go, GraphQL, PostgreSQL, Redis, and Next.js. It features transaction-safe order creation, Redis-backed cart management with TTL, secure JWT authentication, and a smooth checkout-to-payment-to-receipt flow. The frontend is built using Next.js, TailwindCSS, and Apollo Client for a responsive, modern user experience, while the backend leverages Go with gqlgen  for reliability and scalability. The project include deployment on Render (backend) and Vercel (frontend), ensuring end-to-end integration between client and server.",
    img: instamart, // replace with your imported image variable
    github: "https://github.com/Tusharshah3/my-instamart-frontend",
    live: "https://my-instamart-frontend.vercel.app/",
    tags: ["Next.js", "Go", "React", "GraphQL", "Redis", "PostgreSQL", "TailwindCSS", "Vercel"],
    category: "Full Stack",
    featured: true,
  },
  
{
  id: 3, 
  title: "Second Brain",
  description: "AI-powered personal knowledge hub to save, tag, search, and share your learning content intelligently.",
  longDescription: "Second Brain is a full-stack productivity tool that helps users centralize their learning materials — articles, videos, audios, and images — all in one clean, searchable dashboard. It integrates AI embeddings via Cohere and stores them in Qdrant for semantic (meaning-based) search. Users can easily tag their content, organize it visually, and generate a secure share link (SHA-256 hash) to publicly showcase their collection. The app features JWT authentication, optimistic UI updates, Recoil-based state management, and a responsive, minimal UI built with Tailwind CSS.",
  img: myBrainImg, // replace with your imported image variable
  github: "https://github.com/Tusharshah3/my-brain-frontend", 
  live: "https://my-brain-frontend-k2nt.vercel.app/",
  tags: ["React", "TypeScript", "Recoil", "MongoDB", "Qdrant", "Cohere", "TailwindCSS", "Express", "JWT"],
  category: "Full Stack / AI Integration",
  featured: true,
},
{
  id: 4,
  title: "VisuSynth – AI OCR & Document Digitization",
  description:
    "AI-powered OCR platform that extracts, corrects, and digitizes text from scanned documents with multilingual support, preprocessing, and real-time processing.",
  longDescription:
    "VisuSynth is an advanced AI-powered OCR platform that converts scanned documents and images into accurate, searchable, and editable digital text. Features include multilingual OCR with handwriting support, AI-powered text correction using Google Gemini, intelligent summarization, image preprocessing for higher accuracy, export as TXT/Markdown/searchable PDFs, real-time progress tracking, and secure document management. Built using React, Supabase, and Tesseract.js with shadcn/ui for a modern UI design.",
  img: visuImg, // import at top of your file: import visuImg from "@/assets/visusynth.png"
  github: "https://github.com/Tusharshah3/visusynth",
  live: "https://visusynth.lovable.app/",
  tags: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Tesseract.js",
    "Supabase",
    "Google Gemini",
    "AI",
    "OCR"
  ],
  category: "AI & Document Processing",
  featured: true,
},
{
  id: 5,
  title: "Excalidraw Advanced Clone",
  description:
    "A collaborative whiteboard app with real-time drawing, organizational workspace limits, enhanced selection tools, and PNG export support.",
  longDescription:
    "An advanced Excalidraw-inspired whiteboard application with real-time collaboration built using Liveblocks and Convex. Features include multi-user editing, selection improvements, camera reset controls, color picker with debouncing for smooth undo/redo, board creation limits per organization, and PNG export for easy asset sharing. Built with Next.js and shadcn/ui for a polished and scalable experience.",
  img: exeImg, // import your image as exeImg at the top of the file
  github: "https://github.com/Tusharshah3/exe-clone",
  live: "https://exe-clone-zyi3.vercel.app/",
  tags: ["Next.js", "JWT", "shadcn/ui", "Convex", "Liveblocks", "Real-time"],
  category: "Real-time Collaboration",
  featured: true,
}


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
