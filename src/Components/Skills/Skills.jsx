import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";



import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVite,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  
  { name: "Node.js", icon: <FaNode /> },
  { name: "Express.js", icon: <SiExpress /> },
  
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  // { name: "Vite", icon: <SiVite /> },
  { name: "Postman", icon: <SiPostman /> },
];

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
