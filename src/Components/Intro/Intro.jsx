import React, { useEffect, useState } from "react";
import "./Intro.css";
import PortfolioImg from "../../assets/img/portfolio/hiwot.jpeg";
import PortfolioImg1 from "../../assets/img/portfolio/hiwot.jpg";
import HomePage from "./HomePage";

const titles = [
  "React Developer",
  "UI/UX Enthusiast",
  "Full-Stack Explorer",
  "Application Developer",
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
      <div className="intro-left">
        <h2 className="greeting">Built from Curiosity. Ready for Production</h2>
        <h1 className="name">Hello I 'm Hiwot</h1>
        <h3 className="animated-text">{displayedText}</h3>
        <p className="description">
          Passionate React developer delivering responsive, and dynamic
          applications—from UI to efficient backend architecture.
        </p>
        <a href="#works" className="btn">
          View Portfolio
        </a>
      </div>
      <div className="intro-right">
        <img src={PortfolioImg1} alt="Hiwot" className="profile-img" />
      </div>
    </section>
  );
}

export default Intro;