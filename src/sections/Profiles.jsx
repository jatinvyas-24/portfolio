import React, { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    handle: "jatin vyas",
    description:
      "Professional networking, corporate updates, and industry connection hub.",
    url: "https://www.linkedin.com/in/jatin-vyas-1a4043327/",
    color: "#0A66C2",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    handle: "jatin_vyas24",
    description:
      "Algorithmic problem-solving profile, DSA challenges, and technical skills refinement.",
    url: "https://leetcode.com/u/jatin_vyas24/",
    color: "#FFA116",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    handle: "jatinvyas-24",
    description:
      "Open-source contributions, developer projects, and version control repository hosting.",
    url: "https://github.com/jatinvyas-24",
    color: "#FFFFFF",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef />,
    handle: "jatinvyas_24",
    description:
      "Competitive programming contests, problem-solving, and globally ranked tournaments.",
    url: "https://www.codechef.com/users/jatinvyas_24",
    color: "#D1A153",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    handle: "jatinvyas24",
    description:
      "Algorithm practice, data structures, and computer science tutorial platforms.",
    url: "https://www.geeksforgeeks.org/profile/jatinvyas24?tab=activity",
    color: "#2F8D46",
  },
];

export default function Profiles() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="profiles"
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#302b63]/20 via-[#00bf8f]/15 to-[#1cd8d2]/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#1cd8d2]/20 via-[#302b63]/15 to-[#00bf8f]/10 blur-[130px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] pb-2"
        >
          Profiles & Platforms
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
        {profiles.map((profile, idx) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{
              borderColor:
                hoveredIndex === idx
                  ? profile.color
                  : "rgba(255, 255, 255, 0.08)",
              boxShadow:
                hoveredIndex === idx
                  ? `0 15px 30px -10px ${profile.color}33, 0 0 20px ${profile.color}15`
                  : "0 4px 20px -10px rgba(0, 0, 0, 0.4)",
            }}
            className="relative w-full max-w-[340px] flex flex-row items-center gap-3.5 sm:gap-5 p-4 sm:p-5 rounded-2xl border bg-white/5 backdrop-blur-md cursor-pointer transition-all duration-300 group overflow-hidden"
          >
            <div
              style={{
                background: `radial-gradient(circle at 20% 50%, ${profile.color}15 0%, transparent 60%)`,
                opacity: hoveredIndex === idx ? 1 : 0,
              }}
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
            />

            <div
              style={{ color: profile.color }}
              className="text-5xl relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0"
            >
              {profile.icon}
            </div>

            <div className="flex flex-col justify-center relative z-10 w-full overflow-hidden">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 group-hover:text-white/80 transition-colors">
                {profile.name}
              </span>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide truncate w-full mt-0.5">
                {profile.handle}
              </h3>

              <p className="text-[11px] text-gray-400 mt-1 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
                {profile.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
