import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hackathonPrize from "../images/hackathone-prize.png";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  link?: string;
  github?: string;
  image: string;
  duration: string;
  description: string;
  detailedWork?: string[];
}

const Experience: React.FC = () => {
  const hdref = useRef<HTMLHeadingElement | null>(null);
  const cardref = useRef<HTMLDivElement | null>(null);
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedExp]);

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
      duration: "Jan 2026 -- Present",
      description: "Working remotely as an AI Engineer Intern, focusing on LLM pipeline optimization, vector search schemas, and multi-agent systems.",
      detailedWork: [
        "Collaborated with senior engineers in a trunk-based Agile workflow, contributing to daily stand-ups, architecture reviews, and PR reviews across the full SDLC.",
        "Architected a tier-based CRO routing layer that filters 29 analytical signals down to 9 high-leverage signals for Starter customers, reducing LLM inference cost by 40% while preserving product value.",
        "Designed and shipped an end-to-end Question ID Tracking System for the AEO pipeline, enabling deterministic correlation of up to 100 AI-generated questions across 4 answer engines (Perplexity, Google AI Overview, DataForSEO, SerpAPI) - reducing incident reconstruction time from multi-service log stitching to a single CloudWatch Logs Insights query.",
        "Architected a dual-embedding Qdrant schema (text + design named vectors) and a dedicated design-intent classifier, enabling structural web-page queries (layout, UI patterns, CSS selectors) that were previously unsolvable by text-first retrieval pipelines.",
        "Built a Design Analysis Pipeline using Gemini 2.5 Pro for long-context structural reasoning, returning Primary Match HTML, CSS selectors, and screenshot evidence - with a resilient fallback chain handling Langfuse outages and malformed LLM JSON.",
        "Contributed to an Opportunity Creation Pipeline featuring LKB-first generation, LLM enrichment, and an adversarial Response Simulation Engine that stress-tests recommendations across Defensibility, Trust, and Authenticity dimensions before client exposure.",
        "Implemented async parallel execution via asyncio.gather across independent RAG pipeline branches and multi-tag CRO analyses, bounding end-to-end latency to the slowest branch rather than the sum.",
        "Centralized prompt management in Langfuse with hardcoded fallbacks in every Lambda, decoupling prompt iteration from deployment cycles and ensuring zero production downtime on Langfuse outages.",
        "Propagated session IDs, question IDs, and chat thread IDs end-to-end across AWS Lambda + SQS pipelines, enabling forensic reconstruction of any production request via CloudWatch and Sentry."
      ]
    },
    {
      title: "Hackathon Winner",
      link: "https://www.linkedin.com/posts/tushar-shah-b674921b1_spikeai-aiengineer-internship-share-7429964269477343232-mxJC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFe7P8B_XNbkhz2eid2zyHIRVwlITiUJYA",
      image: hackathonPrize,
      duration: "Dec 2025",
      description:
        "Built a multi-agent system with an orchestration strategy and secured 2nd prize (iPhone 17).",
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
            <div className="flex-1 w-full bg-linear-to-br from-neutral-900 to-black rounded-2xl shadow-2xl border border-neutral-800 hover:border-neutral-600 transition-all duration-500 p-8 lg:p-12 relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div
                  className="w-full md:w-56 h-56 shrink-0 bg-cover bg-center rounded-xl overflow-hidden shadow-lg border-2 border-neutral-800"
                  style={{ backgroundImage: `url(${exp.image})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-start">
                  <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-neutral-400 italic mb-4">
                    {exp.duration}
                  </p>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {exp.detailedWork && (
                      <button
                        onClick={() => setSelectedExp(exp)}
                        className="inline-flex items-center gap-2 bg-linear-to-r from-neutral-200 to-neutral-400 hover:from-white hover:to-neutral-300 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                      >
                        View Work
                      </button>
                    )}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-linear-to-r from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-800 border border-neutral-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-neutral-500/20"
                      >
                        Visit
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedExp(null)}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{selectedExp.title}</h3>
                <p className="text-sm text-neutral-400">{selectedExp.duration}</p>
              </div>
              <button 
                onClick={() => setSelectedExp(null)}
                className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {selectedExp.detailedWork ? (
                <ul className="space-y-4">
                  {selectedExp.detailedWork.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-300">
                      <span className="mt-2 block w-2 h-2 shrink-0 rounded-full bg-neutral-500"></span>
                      <span className="leading-relaxed text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-300 text-lg">{selectedExp.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
