import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Main: React.FC = () => {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !nameRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    gsap.from(nameRef.current.children, {
      opacity: 0,
      y: 80,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-black flex flex-col items-center justify-center text-white text-center bg-cover bg-center relative overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-black to-neutral-900 opacity-90"></div>

      {/* Colored blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Text */}
      <div ref={nameRef} className="container relative z-10 px-4 sm:px-6">
        <p className="text-xl sm:text-2xl md:text-3xl mb-3 text-neutral-300 font-light tracking-wide">
          Hi, I’m
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent mb-2 leading-tight">
          Tushar Shah
        </h1>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-neutral-400 via-indigo-300 to-neutral-400 bg-clip-text text-transparent leading-tight">
          Software Engineer
        </h2>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Building scalable, reliable web solutions with modern tech.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25"
          >
            View Projects
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-neutral-600 text-neutral-300 hover:border-indigo-500 hover:text-indigo-300 font-semibold rounded-xl transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-neutral-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-neutral-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Main;
