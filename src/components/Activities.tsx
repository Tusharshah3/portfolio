import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import councilImg from "../images/council.png";
import leetcode from "../images/leetcode.png";

gsap.registerPlugin(ScrollTrigger);

interface ActivityItem {
  title: string;
  link?: string;
  image: string;
  imageStyle?: React.CSSProperties;
  duration: string;
  description: string;
  detailedWork?: string[];
  stats?: { label: string; value: string }[];
}

const activities: ActivityItem[] = [
  {
    title: "Student Council – Leadership",
    image: councilImg,
    duration: "2019 – 2021",
    description:
      "Led the Student Council at JNV Ratlam, serving as the primary liaison between students and management while driving campus-wide initiatives.",
    detailedWork: [
      "Planned and coordinated all major annual school events, managing end-to-end logistics, scheduling, and cross-functional team responsibilities.",
      "Acted as the official student representative to school management — collected, prioritised, and escalated student concerns, ensuring timely resolution.",
      "Organised and led campus-wide cleanliness drives, building a culture of civic responsibility and earning recognition from school administration.",
      "Identified and addressed transparency gaps in the school mess billing system, working with management to introduce clearer billing practices that reduced disputes.",
      "Directed inter-house sports competitions — coordinated team registrations, match scheduling, officiating, and prize ceremonies for the entire school.",
      "Organised and actively participated in quizzes, debates, and extracurricular activities, increasing student engagement and house participation rates.",
    ],
  },
  {
    title: "Problem Solving & DSA",
    link: "https://leetcode.com/u/tusharshah37/",
    image: leetcode,
    imageStyle: { backgroundSize: "cover", backgroundPosition: "0% 50%" },
    duration: "Ongoing",
    description:
      "Solved 600+ LeetCode problems, strengthening data structures and algorithms foundations for performance-optimized code.",
    stats: [
      { label: "Problems Solved", value: "600+" },
      { label: "Platform", value: "LeetCode" },
      { label: "Focus", value: "DSA" },
    ],
  },
];

const Activities: React.FC = () => {
  const hdref = useRef<HTMLHeadingElement | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedActivity]);

  useGSAP(() => {
    if (!hdref.current) return;
    gsap.from(hdref.current, {
      opacity: 0,
      y: 60,
      duration: 0.5,
      scrollTrigger: {
        trigger: hdref.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id="activities" className="bg-zinc-950 text-neutral-200 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/20 to-transparent"></div>

      <div className="text-center mb-16 relative z-10">
        <h2
          ref={hdref}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-neutral-300 via-white to-neutral-300 bg-clip-text text-transparent"
        >
          Activities & Achievements
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-indigo-300 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-neutral-900/60 border border-neutral-800 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4"
          >
            <div
              className="w-full h-44 rounded-xl bg-cover bg-center border border-neutral-800"
              style={{ backgroundImage: `url(${activity.image})`, ...activity.imageStyle }}
            />
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{activity.title}</h3>
              <p className="text-xs text-indigo-400 font-medium mb-3">{activity.duration}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{activity.description}</p>
            </div>
            {activity.stats && (
              <div className="flex gap-6 pt-1">
                {activity.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-indigo-400 font-bold text-lg leading-tight">{stat.value}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-3 mt-auto pt-2">
              {activity.detailedWork && (
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                  View Details
                </button>
              )}
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-neutral-700 hover:border-indigo-500 text-neutral-300 hover:text-white text-sm font-semibold rounded-lg transition-all duration-300"
                >
                  Visit Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedActivity(null)}
          />
          <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{selectedActivity.title}</h3>
                <p className="text-xs text-indigo-400">{selectedActivity.duration}</p>
              </div>
              <button
                onClick={() => setSelectedActivity(null)}
                className="p-2 text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <ul className="space-y-4">
                {selectedActivity.detailedWork?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300">
                    <span className="mt-2 block w-2 h-2 shrink-0 rounded-full bg-indigo-500"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
