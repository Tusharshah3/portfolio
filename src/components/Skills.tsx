import React from "react";
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiCplusplus,
  SiGo, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiStreamlit, SiNodedotjs, SiExpress, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiGit, SiDocker, SiJira,
  SiAmazonwebservices, SiSocketdotio,
} from "react-icons/si";

type SkillItem = {
  name: string;
  icon?: React.ReactNode;
};

const skillCategories: { category: string; items: SkillItem[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "Go", icon: <SiGo className="text-cyan-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-300" /> },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-red-500" /> },
      { name: "WebSocket", icon: <SiSocketdotio className="text-neutral-300" /> },
      { name: "Canvas API" },
      { name: "Responsive Design" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-neutral-300" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "RESTful APIs" },
      { name: "Web Services" },
      { name: "LLM Integration" },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "AWS", icon: <SiAmazonwebservices className="text-orange-400" /> },
      { name: "DynamoDB" },
    ],
  },
  {
    category: "Testing & DevOps",
    items: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Jira", icon: <SiJira className="text-blue-500" /> },
      { name: "CI/CD Pipelines" },
      { name: "Agile" },
      { name: "Unit-Testing" },
      { name: "LocalStack" },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "SDLC" },
      { name: "OOP" },
      { name: "DSA" },
      { name: "Networking" },
      { name: "DBMS" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="bg-black text-neutral-200 min-h-screen py-20 flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/20 to-transparent"></div>

      <h1 className="text-center text-5xl md:text-7xl font-extrabold
                     bg-linear-to-r from-neutral-300 via-white to-neutral-300
                     bg-clip-text text-transparent uppercase tracking-wider mb-20 relative z-10">
        Skills
      </h1>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12 relative z-10">
        {skillCategories.map((group, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            <div className="lg:w-1/3 shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-indigo-500 pl-4 py-1">
                {group.category}
              </h2>
            </div>
            <div className="lg:w-2/3 flex flex-wrap gap-3">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-neutral-900 rounded-xl border border-neutral-800
                             flex items-center gap-2 text-sm font-semibold shadow-xl text-neutral-300
                             hover:text-white hover:bg-neutral-800 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  {skill.icon && <span className="text-base leading-none">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
