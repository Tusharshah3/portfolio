import React, { useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion} from "framer-motion";



const Header: React.FC = () => {
  const portref = useRef<HTMLHeadingElement | null>(null);

  
  useGSAP(() => {
    if (!portref.current) return;
    gsap.from(portref.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "back.out(1)",
    });
  }, []);




  return (
    <nav className="bg-black/90 shadow-lg border-b border-neutral-800/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.h1
            ref={portref}
            whileHover={{ scale: 1.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Portfolio
          </motion.h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
