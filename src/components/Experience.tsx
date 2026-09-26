import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hackathonPrize from "../images/hackathone-prize.png";
import spikeAiImage from "../images/github.png";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceSubGroup {
  heading: string;
  points: string[];
}

interface ExperienceGroup {
  heading: string;
  points?: string[];
  subGroups?: ExperienceSubGroup[];
}

interface ExperienceItem {
  title: string;
  link?: string;
  github?: string;
  image: string;
  imageStyle?: React.CSSProperties;
  duration: string;
  description: string;
  detailedWork?: ExperienceGroup[];
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
    tl.from(cardref.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.9,
    });
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: "AI Engineer – Spike AI",
      link: "https://getspike.ai/",
      image: spikeAiImage,
      imageStyle: {
        backgroundSize: "auto 130%",
        backgroundPosition: "15% 50%",
      },
      duration: "Jan 2026 -- Present",
      description:
        "Working remotely as an AI Engineer (converted from a 6-month internship to full-time), architecting AI systems end-to-end — from LLM pipeline design and vector search schemas to production infra — around what each system actually needs.",
      detailedWork: [
        {
          heading: "Image Knowledge Base (imageKB) — Brand Asset Retrieval",
          points: [
            "Built imageKB from scratch as a self-contained Lambda service that ingests, deduplicates, and embeds brand image assets, exposing semantic retrieval as the backing knowledge base for brand-asset lookups across pipelines.",
            "Deduplicates by content hash (MD5) rather than filename before any expensive work runs — files sharing a hash are grouped under one canonical record, so the costly vision-LLM description, embedding, and S3 upload happen once per unique image, with every duplicate simply appending a cheap source reference instead of repeating the full pipeline.",
            "Extended the same content-hash dedup to work across sources, not just within a Drive folder — hashing the downloaded bytes of images extracted from live page URLs (via an existing page-fetching Lambda) the same way Drive already reports its own hash, so one asset is recognized as a duplicate whether it came from Drive or from the live website.",
            "Validated the cross-source matching directly: the same logo uploaded to Drive and scraped from its live page URL hashed identically, as did the same Drive file re-uploaded under a different filename — confirming dedup is keyed on content, never on name or source.",
            "Iterated on retrieval accuracy over multiple releases — switching the underlying vision model, tightening match-score thresholds, and adding structured request/response logging for production debuggability.",
            "Diagnosed a silent-failure incident where a single synchronous Lambda ingesting a 600-image Google Drive folder hit the 15-minute Lambda timeout after only ~250 images, with the remainder never retried or recorded.",
            "Rather than inventing a new pattern, surveyed the codebase for prior art, found an existing orchestrator → SQS → worker shape already proven on a different ingestion pipeline, and mirrored that same 'detect, don't process — queue instead' principle for imageKB.",
            "Committed to a single always-batch code path with no synchronous fast-path for small folders, then sized the batch — 100 image groups per worker invocation — by working backward from the incident's own throughput data, targeting roughly 40% of the worker's timeout budget as headroom for slower or LLM-variable images.",
            "Re-architected the ingestion path into an orchestrator Lambda that discovers and batches images by content hash, and independently-scaled SQS worker Lambdas that each process one batch — removing the per-run time ceiling entirely.",
          ],
        },
        {
          heading: "Outcome Tracker",
          points: [
            "Today, both trackers close the measurement loop — surfacing what actually happened (rankings, citations, visibility) after content goes live, per domain and per blog.",
            "Roadmap: layer an intelligence pass on top that classifies each tracked outcome as a success or failure and reasons about why, feeding the structured result into a case-based knowledge system — so the next time the same class of problem recurs, the system already has a ranked best-known solution instead of starting the analysis from zero.",
            "Goal is a closed feedback loop where accumulated outcomes progressively cut the manual analysis needed per case, turning outcome tracking from a reporting tool into a self-improving decision system over time.",
          ],
          subGroups: [
            {
              heading: "SEO Tracker",
              points: [
                "Built the SEO Outcome Tracker Lambda service from scratch to measure real-world search performance for generated content.",
                "Evolved multi-domain data collection from a single hardcoded Search Console call into a parallel per-domain fetch through a chat-based MCP lambda, adding pagination to fix silent data loss past Search Console's 25k-row cap and isolating one domain's failure from the rest of the run.",
                "Diagnosed and fixed a citation-matching bug where Google's AI Overview wraps every citation URL behind a redirect, causing exact-URL matching to silently report zero citations — resolved by matching on brand/source name instead.",
                "Migrated the tracker's source of truth from a Google Sheets schema to DynamoDB for a queryable, schema-enforced store.",
              ],
            },
            {
              heading: "AEO Tracker",
              points: [
                "Designed and built a sibling AEO (Answer-Engine Optimization) tracker to measure content visibility inside AI-generated answers, reusing the reliability lessons proven on the SEO tracker.",
                "Split the system into a Handler service that owns tracked-blog state in DynamoDB and enqueues work, and a separate downstream Orchestrator that owns the actual AI-model checks and scoring — so how a blog is tracked and how it's scored evolve independently.",
                "Built idempotent weekly tracking runs with per-(domain, blog, date) dedupe keys and per-domain fault isolation via Promise.allSettled, so one domain's failure never aborts the others.",
                "Wired Discord alerts into every state transition — validation failures, DB errors, SQS enqueue failures, and successful transitions — for immediate visibility into failures.",
              ],
            },
          ],
        },
        {
          heading: "Image Generation Service (Image Playground)",
          points: [
            "Architected a brand-aligned image generation microservice from scratch, producing on-brand images through a structured, brand-identity-validated prompt pipeline.",
            "Designed a self-verifying generation loop: a VisionAI-based scan checks each output against logo, color palette, typography, and content fidelity, triggering a single automatic corrective edit when standards aren't met, and keeping whichever pass scores higher confidence.",
            "Integrated the imageKB semantic knowledge base as a retrieval step ahead of generation, reusing previously verified on-brand assets via similarity search instead of redundantly regenerating them.",
            "Built a multi-model fallback strategy across GPT Image and Gemini vision models to balance quality, latency, and cost, with automatic failover when a model underperforms.",
            "Shipped an image iterate/edit endpoint for incremental refinement of an existing image instead of full regeneration.",
          ],
        },
        {
          heading: "Design Retrieval & Analysis (Qdrant + RAG)",
          points: [
            "Architected a dual-embedding Qdrant schema (text + design named vectors) and a dedicated design-intent classifier, enabling structural web-page queries (layout, UI patterns) that were previously unsolvable by text-first retrieval pipelines.",
            "Built a Design Analysis Pipeline using RAG and Gemini 2.5 Pro for long-context structural reasoning, returning Primary Match HTML, CSS selectors, and screenshot evidence for the Domain Knowledge Base.",
          ],
        },
        {
          heading: "CRO Signal Routing & Cost Optimization",
          points: [
            "Architected a tier-based CRO routing layer that filters 29 analytical signals down to 9 high-leverage signals for Starter customers, reducing LLM inference cost by 40% while preserving product value.",
          ],
        },
        {
          heading: "Observability & Infra",
          points: [
            "Propagated session IDs, question IDs, and chat thread IDs end-to-end across AWS Lambda + SQS pipelines, enabling forensic reconstruction of any production request via CloudWatch, Sentry, and Langfuse.",
            "Created CI/CD pipeline and Dockerfile to containerize and deploy the Learnt Knowledge Base system, pushing images to AWS ECR and shipping to production without manual intervention.",
          ],
        },
        {
          heading: "Opportunity Creation Pipeline",
          points: [
            "Contributed to an Opportunity Creation Pipeline featuring LKB-first generation, LLM enrichment, and an adversarial Response Simulation Engine that stress-tests recommendations across Defensibility, Trust, and Authenticity dimensions before client exposure.",
          ],
        },
        {
          heading: "Engineering Practice",
          points: [
            "Collaborated with senior engineers in a trunk-based Agile workflow, contributing to daily stand-ups, architecture reviews, and PR reviews across the full SDLC.",
            "Adopted stacked PRs to keep large architecture changes reviewable in small, sequential increments rather than one sprawling diff.",
            "Reads documentation and code across services outside my immediate ownership before extending them, so new work stays consistent with conventions already proven elsewhere in the codebase rather than introducing a one-off pattern.",
            "Always looking to pick up new tools and practices as a project's needs change, rather than defaulting to what's already familiar.",
          ],
        },
      ],
    },
    {
      title: "Hackathon Winner",
      link: "https://www.linkedin.com/posts/tushar-shah-b674921b1_spikeai-aiengineer-internship-share-7429964269477343232-mxJC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFe7P8B_XNbkhz2eid2zyHIRVwlITiUJYA",
      image: hackathonPrize,
      duration: "Dec 2025",
      description:
        "Built a multi-agent system with an orchestration strategy and secured 2nd prize (iPhone 17).",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col bg-zinc-950 px-4 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/5 to-transparent"></div>

      <div className="text-center mb-20 relative z-10">
        <h2
          ref={hdref}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
        >
          Experience
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-indigo-300 mx-auto rounded-full"></div>
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
                  style={{
                    backgroundImage: `url(${exp.image})`,
                    ...exp.imageStyle,
                  }}
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
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20"
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
                <h3 className="text-2xl font-bold text-white mb-1">
                  {selectedExp.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {selectedExp.duration}
                </p>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {selectedExp.detailedWork ? (
                <div className="space-y-8">
                  {selectedExp.detailedWork.map((group, gIdx) => (
                    <div key={gIdx}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-indigo-500"></span>
                        <h4 className="text-xl font-bold text-white">
                          {group.heading}
                        </h4>
                      </div>
                      {group.points && (
                        <ul className="ml-[4px] pl-6 border-l-2 border-neutral-800 space-y-3">
                          {group.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="relative text-neutral-300 leading-relaxed text-lg before:content-[''] before:absolute before:-left-6 before:top-3 before:w-4 before:h-px before:bg-neutral-800"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                      {group.subGroups && (
                        <div className="ml-[4px] pl-6 border-l-2 border-neutral-800 space-y-6">
                          {group.subGroups.map((sub, sIdx) => (
                            <div key={sIdx} className="relative">
                              <div className="flex items-center gap-2.5 mb-2 before:content-[''] before:absolute before:-left-6 before:top-3 before:w-4 before:h-px before:bg-neutral-800">
                                <span className="w-2 h-2 shrink-0 rounded-full bg-indigo-400"></span>
                                <h5 className="text-lg font-semibold text-neutral-200">
                                  {sub.heading}
                                </h5>
                              </div>
                              <ul className="ml-[4px] pl-6 border-l border-neutral-800 space-y-2">
                                {sub.points.map((point, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="relative text-neutral-300 leading-relaxed text-base before:content-[''] before:absolute before:-left-6 before:top-3 before:w-4 before:h-px before:bg-neutral-800"
                                  >
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-300 text-lg">
                  {selectedExp.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
