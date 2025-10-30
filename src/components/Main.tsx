import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Main: React.FC = () => {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !nameRef.current) return;

    // Background Fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Text animation
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
      {/* Background linear */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-black to-neutral-900 opacity-80"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Social Icons */}
      <div className="fixed z-30 p-2 top-20 right-4 sm:top-24 sm:right-6 lg:top-28 lg:right-10">
        <div className="flex flex-col mt-2 items-center space-y-4 bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/30 shadow-2xl">
          <a
            href="https://github.com/Tusharshah3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white hover:scale-110 transition-all duration-300 hover:rotate-6"
          >
            <i className="fab fa-github text-3xl lg:text-4xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-shah-b674921b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover:rotate-6"
          >
            <i className="fab fa-linkedin text-3xl lg:text-4xl"></i>
          </a>
          <a
            href="mailto:tusharshah372003@gmail.com"
            className="text-red-500 hover:text-red-400 hover:scale-110 transition-all duration-300 hover:rotate-6"
          >
            <i className="fas fa-envelope text-3xl lg:text-4xl"></i>
          </a>
          <a
            href="https://wa.me/917477212156"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 hover:scale-110 transition-all duration-300 hover:rotate-6"
          >
            <i className="fab fa-whatsapp text-3xl lg:text-4xl"></i>
          </a>
        </div>
      </div>

      {/* Main Text */}
      <div ref={nameRef} className="container relative z-10 px-4 sm:px-6">
        <p className="text-xl sm:text-2xl md:text-3xl mb-3 text-neutral-300 font-light tracking-wide">
          Hi, I’m
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-linear-to-r from-neutral-400 via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-2 leading-tight">
          Tushar Shah
        </h1>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-neutral-500 via-neutral-300 to-neutral-500 bg-clip-text text-transparent leading-tight">
          Software Engineer
        </h2>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          Building scalable, reliable web solutions with modern tech.
        </p>
      </div>
    </section>
  );
};

export default Main;
