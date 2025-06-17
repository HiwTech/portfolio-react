import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
import evangadiForum from "../../assets/img/portfolio/evangadiForum.jpg";
import g3AutoRepair from "../../assets/img/portfolio/Screenshot 2024-06-26 213232.png";
import netFlex from "../../assets/img/portfolio/thibault-penin-AWOl7qqsffM-unsplash.jpg";
import amazon from "../../assets/img/portfolio/christian-wiediger-rymh7EZPqRs-unsplash.jpg";
import socialmedia from "../../assets/img/portfolio/socialmedia.png";
import ots from "../../assets/img/OTS-transportation-logo-with-whiteBG.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      name: "G3 Auto Repair",
      image: g3AutoRepair,
      link: "https://drive.google.com/file/d/10JhYZ9Dinq7Aj1YIS-RPaH3zamYrmK3o/view?usp=drive_link",
      description:
        "A full-stack web application designed to streamline customer and service management for an auto repair business.It features a secure Admin Dashboard with protected routes, allowing only authorized users to access information. Built with React, Node.js, and MySQ.",
      GitHubLink: "https://github.com/SamuelT19/AbeGarage-GROUP",
    },
    {
      name: "Social media Clone",
      image: socialmedia,
      link: " https://drive.google.com/file/d/1treT--yTlIpbjWPxz54mgW4G7wVXE9OQ/view?usp=drive_link",
      description:
        "A full-stack social media application inspired by platforms like Facebook. This project showcases core social features including user authentication, post creation, real-time feed updates, profile management, and the ability to follow/unfollow other users. .",
      GitHubLink: "https://github.com/HiwTech/SocialMedia",
    },
    {
      name: "Amazon Clone",
      image: amazon,
      link: "https://amazon-clone-frontend2024.netlify.app",
      description:
        "A full-featured e-commerce platform inspired by Amazon, built using React, Firebase, and Stripe. The project offers a seamless shopping experience with secure user authentication, product browsing, cart management, and payment integration..",
      GitHubLink: "https://github.com/HiwTech/Amazon-Clone-2024",
    },
    {
      name: "OTS Transportation Service",
      image: ots,
      link: "https://otsbyg3.netlify.app/",
      description: "A taxi transportation service website.",
      GitHubLink: "https://github.com/HiwTech/ots-frontend",
    },
  ];

  return (
    <section id="works">
      <h2>Projects</h2>
      <div className="worksImgs">
        {projects.map(
          ({ name, image, link, description, GitHubLink }, index) => (
            <div className="imageContainer" key={index} data-aos="fade-up">
              <img src={image} alt={name} className="worksImg" loading="lazy" />
              <div className="overlay">
                <div className="overlayContent">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a href={GitHubLink}>GitHub Repository</a>

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${name}`}
                    >
                      View Project <FaExternalLinkAlt className="linkIcon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Portfolio;
