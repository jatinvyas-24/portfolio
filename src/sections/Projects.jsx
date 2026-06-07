import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";

const projects = [
  {
    title: "Exam Notes AI",
    description:
      "A premium MERN-stack web application with note generation, revision cheat sheets, Stripe payment integration, and PDF download functionality.",
    demoLink: "https://examnotesai-client-t0bl.onrender.com/",
    codeLink: "https://github.com/jatinvyas-24/ExamNotesAi.git",
    image: img1,
    tags: ["React", "Gemini AI", "Stripe","MongoDB"],
    glowColor: "rgba(0, 191, 143, 0.35)",
  },
  {
    title: "Interview-IQ",
    description:
      "A MERN stack AI-powered interview preparation platform with voice-based interactions, resume upload, and instant performance evaluation.",
    demoLink: "https://gamilyapp.com/",
    codeLink: "https://github.com/jatinvyas-24/AI-Interview-Agent.git",
    image: img2,
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    glowColor: "rgba(56, 132, 211, 0.35)",
  },
  {
    title: "Hungry Tiger",
    description:
      "An elegant, interactive culinary e-commerce ordering system built with custom cart tracking, instant validations, and fast APIs.",
    demoLink: "https://www.eathungrytiger.com/",
    codeLink: "https://github.com/jatinvyas-24/hungry-tiger",
    image: img3,
    tags: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
    glowColor: "rgba(220, 147, 23, 0.35)",
  },
];

function ProjectCard3D({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 22,
  });

  const glareOpacity = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [0.15, 0.5]),
    {
      stiffness: 300,
      damping: 22,
    },
  );
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relX);
    mouseY.set(relY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="w-full flex items-center justify-center p-2"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 35px ${project.glowColor}`
            : "0 20px 40px -15px rgba(0,0,0,0.6)",
        }}
        className="relative w-full max-w-[420px] aspect-[3/4.2] sm:aspect-[4/5] rounded-3xl cursor-pointer overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 hover:border-white/20"
      >
        <div className="absolute top-4 inset-x-4 h-[42%] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out"
            style={{
              transform: hovered
                ? "scale(1.06) translateZ(10px)"
                : "scale(1) translateZ(0px)",
            }}
            loading="lazy"
          />
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            opacity: hovered ? glareOpacity : 0,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        />

        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-x-0 bottom-0 h-[54%] p-6 flex flex-col justify-between bg-[#0c0c0e]/95 backdrop-blur-md border-t border-white/5 z-10"
        >
          <div className="flex flex-col gap-2">
            <div
              style={{ transform: "translateZ(20px)" }}
              className="flex flex-row flex-nowrap items-center gap-1.5 overflow-hidden"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wider text-[#1cd8d2] border border-[#1cd8d2]/20 bg-[#1cd8d2]/5 uppercase whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3
              style={{ transform: "translateZ(40px)" }}
              className="text-2xl font-bold text-white tracking-wide mt-1"
            >
              {project.title}
            </h3>

            <p
              style={{ transform: "translateZ(25px)" }}
              className="text-xs text-gray-400 leading-relaxed font-medium line-clamp-3"
            >
              {project.description}
            </p>
          </div>

          <div
            style={{ transform: "translateZ(50px)" }}
            className="flex items-center gap-3.5 mt-4 z-20"
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs tracking-wider uppercase text-black bg-[#1cd8d2] hover:bg-[#1cd8d2]/85 transition-all shadow-[0_0_20px_rgba(28,216,210,0.12)] hover:shadow-[0_0_25px_rgba(28,216,210,0.22)] active:scale-95"
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </a>

            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs tracking-wider uppercase text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all active:scale-95"
            >
              <FaGithub size={13} />
              Code Link
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-[-15%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#302b63]/25 to-[#00bf8f]/20 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/3 right-[-15%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#1CD8D2]/25 to-[#302b63]/20 blur-[130px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
        >
          Featured Work
        </motion.h2>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard3D key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
