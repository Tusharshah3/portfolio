import React from "react";

const skillCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "C++", "Go (Golang)", "SQL", "Python"],
  },
  {
    category: "Frontend & UI",
    items: ["React.js", "Next.js", "Responsive Web Design", "Tailwind", "WebSocket", "Canvas API"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "RESTful APIs", "Web Services", "GraphQL", "LLM Integration"],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL (RDBMS)", "MongoDB", "DynamoDB", "Redis", "AWS (Basic)"],
  },
  {
    category: "Testing & DevOps",
    items: ["CI/CD Pipelines", "Git", "Docker", "Agile", "Jira", "Unit-Testing"],
  },
  {
    category: "Core Concepts",
    items: ["SDLC", "OOPS", "DSA", "Computer Networking", "DBMS"],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="bg-black text-neutral-200 min-h-screen py-20 flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/20 to-transparent"></div>

      {/* TITLE */}
      <h1 className="text-center text-5xl md:text-7xl font-extrabold 
                     bg-linear-to-r from-neutral-300 via-white to-neutral-300 
                     bg-clip-text text-transparent uppercase tracking-wider mb-20 relative z-10">
        Skills
      </h1>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-12 relative z-10">
        {skillCategories.map((group, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            <div className="lg:w-1/3 shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-neutral-400 pl-4 py-1">
                {group.category}
              </h2>
            </div>
            <div className="lg:w-2/3 flex flex-wrap gap-4">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-5 py-3 bg-neutral-900 rounded-xl border border-neutral-800 
                             text-base font-semibold shadow-xl text-neutral-300
                             hover:text-white hover:bg-neutral-800 hover:border-neutral-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {skill}
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
