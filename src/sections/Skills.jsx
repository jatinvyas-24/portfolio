import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiCplusplus,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from "framer-motion";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: <DiNodejsSmall />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express", color: "#FFFFFF" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiGithub />, name: "GitHub", color: "#FFFFFF" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-[-10%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[130px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] pb-2"
        >
          My Skills
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-6 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -6 }}
            style={{
              borderColor:
                hoveredIndex === idx
                  ? skill.color
                  : "rgba(255, 255, 255, 0.08)",
              boxShadow:
                hoveredIndex === idx
                  ? `0 15px 30px -10px ${skill.color}33, 0 0 20px ${skill.color}15`
                  : "0 4px 20px -10px rgba(0, 0, 0, 0.4)",
            }}
            className="relative w-full aspect-square max-w-[130px] sm:max-w-[150px] flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-300 group"
          >
            <div
              style={{ color: skill.color }}
              className="text-5xl transition-transform duration-300 group-hover:scale-110"
            >
              {skill.icon}
            </div>

            <p className="mt-3 text-xs font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
