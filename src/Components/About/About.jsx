import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m <strong>Hiwot</strong>, a full-stack web developer passionate
          about building clean, intuitive, and user-focused applications. Over
          the past two years, I’ve developed several full-stack projects that
          simulate production-level challenges:
        </p>

        <ul>
          <li>
            <strong>Amazon Clone</strong> – E-commerce platform built with React
            and Firebase, featuring category-based product listings, a cart
            system, protected routes, and Stripe payments.
          </li>
          <li>
            <strong>Social Media App</strong> – A React + Node.js app for user
            authentication, profile management, real-time posts, and follow
            system.
          </li>
          <li>
            <strong>G3 Auto Repair App</strong> – Service management system
            built for real business needs, tracking customers, vehicles, and
            workflows.
          </li>
        </ul>
        <p>
          My experience is hands-on and self-driven—focused on writing scalable
          and maintainable code across the stack.
        </p>
        <p>
          🔹 <strong>Tech Stack:</strong> React, Node.js, Express, MySQL,
          Firebase, Context API, REST APIs, JavaScript, HTML/CSS, Git.
        </p>
        <a href="#contact" className="btn">
          Let’s Connect
        </a>
      </div>
    </section>
  );
}

export default About;
