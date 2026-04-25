import React from "react";
import { motion } from "framer-motion";

const educationList = [
  {
    institution: "Maulana Azad National Institute Of Technology (NIT Bhopal)",
    degree: "B.Tech • Electrical Engineering",
    duration: "2026",
    score: "CGPA: 7.61",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya Ratlam",
    degree: "CBSE • XII",
    duration: "2021",
    score: "87%",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya Ratlam",
    degree: "CBSE • X",
    duration: "2019",
    score: "93%",
  },
];

const Education: React.FC = () => {
  return (
    <section className="bg-black px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/10 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"></div>
      </motion.div>

      <div className="flex flex-col gap-8 mx-auto w-full max-w-4xl relative z-10">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-linear-to-br from-neutral-900 to-black rounded-2xl shadow-xl border border-neutral-800 hover:border-neutral-600 transition-all duration-500 p-8 lg:p-10 relative group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-2">
                  {edu.institution}
                </h3>
                <p className="text-lg text-neutral-300 font-medium">
                  {edu.degree}
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-neutral-400 italic mb-1">{edu.duration}</p>
                <p className="inline-block px-4 py-1 mt-2 bg-neutral-800 border border-neutral-700 rounded-full text-sm font-semibold text-neutral-200 shadow-inner">
                  {edu.score}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
