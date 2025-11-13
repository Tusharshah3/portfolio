import React from "react";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Redis",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Git",
  "C++",
  "Python",
  "SQL",
  "GenAI",
];

const Skills: React.FC = () => {
  return (
    <div className="bg-black text-neutral-200 min-h-screen py-20">

      {/* TITLE */}
      <h1 className="text-center text-6xl md:text-8xl font-extrabold 
                     bg-linear-to-r from-neutral-300 via-white to-neutral-300 
                     bg-clip-text text-transparent uppercase tracking-wider">
        Skills
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 md:px-20 mt-20">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="px-6 py-4 bg-neutral-900 rounded-xl border border-neutral-800 
                       text-lg font-semibold text-center shadow-lg 
                       hover:bg-neutral-800 hover:scale-105 transition-all duration-200"
          >
            {skill}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
