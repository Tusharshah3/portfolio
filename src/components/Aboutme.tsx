import React, { useRef } from "react";
import Me from "../images/me.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Aboutme: React.FC = () => {
  // ✅ Properly typed refs
  const headref = useRef<HTMLHeadingElement | null>(null);
  const textref = useRef<HTMLDivElement | null>(null);
  const imgref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // ✅ Guard clauses prevent null access
    if (!headref.current || !textref.current || !imgref.current) return;

    const splitText = new SplitType(textref.current, { types: "lines,words" });

    gsap.from([headref.current, imgref.current], {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: headref.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(splitText.words, {
      opacity: 0,
      y: 40,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textref.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="py-20 bg-black text-neutral-200 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Softer background linear */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-900/30 to-transparent"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            ref={headref}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-neutral-300 via-white to-neutral-300 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text */}
          <div ref={textref} className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-400">
              I'm{" "}
              <span className="font-semibold text-neutral-100">Tushar Shah</span>, a{" "}
              <span className="text-neutral-100 font-medium">Full Stack Developer</span>{" "}
              who loves building modern, user-centric web applications.
              <br />
              <br />
              I focus on creating{" "}
              <span className="text-neutral-100 font-medium">
                scalable, intuitive, and high-performing
              </span>{" "}
              digital products using technologies like{" "}
              <span className="text-neutral-100">Next.js, React, Node.js, and Convex</span>.
              <br />
              <br />
              My journey has been about constant learning — from building
              real-time apps like{" "}
              <span className="text-neutral-100 font-medium">Excalidraw Clone</span> to
              exploring{" "}
              <span className="text-neutral-100 font-medium">
                AI-powered systems
              </span>{" "}
              such as my{" "}
              <span className="text-neutral-100 font-medium">
                College Chatbot with LangChain, FAISS & Gemini
              </span>
              .
              <br />
              <br />
              I believe in{" "}
              <span className="text-neutral-100">learning by building</span> —
              combining technology, creativity, and human-centered design to turn ideas into
              impactful software.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgref}
            className="w-full md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-neutral-500 to-neutral-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:scale-105"></div>
              <img
                src={Me}
                alt="Tushar Shah"
                className="relative rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover shadow-2xl border-4 border-neutral-800 group-hover:border-neutral-600 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
