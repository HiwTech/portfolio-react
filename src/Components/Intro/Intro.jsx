import React, { useEffect, useState } from "react";
import "./Intro.css";
import PortfolioImg from "../../assets/img/portfolio/hiwot.jpeg";

const titles = [
  "Full Stack Developer",
  "React & Node.js Engineer",
  "MySQL & API Specialist",
];

function Intro() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let charIndex = 0;
    const currentTitle = titles[index];
    let typingTimeout;

    const type = () => {
      if (charIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, charIndex));
        charIndex++;
        typingTimeout = setTimeout(type, 100);
      } else {
        typingTimeout = setTimeout(() => {
          setDisplayedText("");
          setIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    };

    type();

    return () => clearTimeout(typingTimeout);
  }, [index]);
  

  return (
    <section className="intro-section" id="intro">
      <div className="intro-right">
        <img
          src={PortfolioImg}
          
          alt="Hiwot"
          className="profile-img"
        />
      </div>
      <div className="intro-left">
        <h2>Hello, I'm</h2>
        <h1 className="name">Hiwot</h1>
        <h3 className="animated-text">{displayedText}</h3>
        <p className="description">
          I create full-stack applications using modern web technologies.
        </p>
        <a href="#works" className="btn">
          View Portfolio
        </a>
      </div>
    </section>
  );
}

export default Intro;
