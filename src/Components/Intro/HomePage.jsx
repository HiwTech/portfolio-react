import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Intro from "./Intro";

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
`;

/* Welcome Section */
const WelcomeBanner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  // background: linear-gradient(to right,rgb(254, 164, 79),rgb(0, 25, 254));
  color: white;
  padding: 1rem;
`;

const CTAButton = styled(motion.button)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #4facfe;
  background: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

/* Featured Project Section */
const FeaturedSection = styled.section`
  padding: 3rem 1rem;
  background-color: #f9f9f9;
`;

const ProjectCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ViewDetailsButton = styled(motion.button)`
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: #4facfe;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #3a7fda;
  }
`;

const HomePage = () => {
  return (
    <PageContainer id="intro">
      {/* Welcome Section */}
      <WelcomeBanner>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "3.5rem", fontWeight: "bold" }}
        >
          Hi, I'm Hiwot
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: "1.5rem", marginTop: "1rem" }}
        >
          React Developer | Full-stack web development
        </motion.p>
        <CTAButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Explore My Work
        </CTAButton>
      </WelcomeBanner>

      {/* Featured Project Section */}
      {/* <FeaturedSection>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Featured Project
        </h2>
        <ProjectCard>
          <h3>Project Name</h3>
          <p>
            A short description of your standout project. Highlight its key
            features and the technologies used.
          </p>
          <ViewDetailsButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </ViewDetailsButton>
        </ProjectCard>
      </FeaturedSection> */}
        </PageContainer>
  );
};

export default HomePage;
