import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  link: string;
  github?: string;
  image: string;
  duration: string;
  description: Array<string> | string;
}

const Experience: React.FC = () => {
  const hdref = useRef<HTMLHeadingElement | null>(null);
  const cardref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!hdref.current || !cardref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hdref.current,
        start: "top 90%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(hdref.current, { opacity: 0, y: 100, duration: 0.5 });
    tl.from(cardref.current, { opacity: 0, y: 100, duration: 0.5, stagger: 0.9 });
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: "AI Engineer Intern – Spike AI",
      link: "https://getspike.ai/",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      duration: "Jan 2026",
      description:
        [
          "-Designed and implemented end-to-end question ID tracking, ensuring consistent data flow across AI pipelines and services",
          "- Built a design pipeline that enables developers to reuse and standardize UI components, improving development and code reusability speed and maintainability.",
          "– Implemented a tier-based configuration system that improved scalability and enabled flexible feature control across  reduce api cost by 40% ",
          "– Integrated and optimized REST APIs using Node.js for seamless AI service orchestration.",
          "– Collaborated in an Agile environment, performing code reviews and implementing unit tests to ensure production reliability."
        ]
    },
    {
      title: "Hackathone winner",
      link: "https://www.linkedin.com/posts/tushar-shah-b674921b1_spikeai-aiengineer-internship-share-7429964269477343232-mxJC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFe7P8B_XNbkhz2eid2zyHIRVwlITiUJYA",
      image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      duration: "Dec 2025",
      description:
        "Build a multiAgent system with orchatration strategy and secure 2nd prize(IPhone 17).",
    },
    {
      title: "Problem Solving & DSA",
      link: "https://leetcode.com/u/tusharshah37/",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      duration: "Ongoing",
      description:
        "Solved 550+ LeetCode problems, strengthening data structures and algorithms foundations for performance-optimized code.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-black px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/5 to-transparent"></div>

      <div className="text-center mb-20 relative z-10">
        <h2
          ref={hdref}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
        >
          Experience
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"></div>
      </div>

      <div
        ref={cardref}
        className="flex flex-col gap-16 mx-auto w-full max-w-5xl relative z-10"
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`group flex flex-col lg:flex-row items-center relative ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 bg-linear-to-br from-neutral-900 to-black rounded-2xl shadow-2xl border border-neutral-800 hover:border-neutral-600 transition-all duration-500 p-8 lg:p-12 relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div
                  className="w-full md:w-56 h-56 bg-cover bg-center rounded-xl overflow-hidden shadow-lg border-2 border-neutral-800"
                  style={{ backgroundImage: `url(${exp.image})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>


                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-neutral-400 italic mb-4">
                    {exp.duration}
                  </p>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-linear-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-neutral-500/20"
                    >
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
