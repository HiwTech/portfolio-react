import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m <strong>Hiwot</strong>, a full stack web developer passionate
          about building clean, scalable, and user-focused web applications with
          a two years of coding experience, specializing in React and Node.js to
          build clean, scalable, and interactive web applications. I thrive on
          crafting seamless user experiences and writing efficient, maintainable
          code across the front-end and back-end. My journey has been hands-on,
          developing full-stack applications that showcase state management,
          database integration, and API design. <br />
          🔹
          <strong>Development Philosophy:</strong> I focus on writing clean,
          optimized code, ensuring responsive UI designs, and building scalable
          architectures. <br />
          🔹 <strong>Tech Stack:</strong> React, Context API, Node.js, Express,
          MySQL, Firebase, REST APIs, JavaScript, HTML/CSS, Git. <br />
          🔹 <strong>Future Goals:</strong> I aim to refine my expertise,
          contribute to real-world projects, and continue mastering full-stack
          development for industry-ready applications.
        </p>
        <a href="#contact" className="btn">
          Let’s Connect
        </a>
      </div>
    </section>
  );
}

export default About;
