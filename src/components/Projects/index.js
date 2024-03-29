import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCard";
import { Element } from "react-scroll";

const Container = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
  }
`;
const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elementOffset = document.getElementById("projects").offsetTop;

    setIsVisible(scrollTop > elementOffset - window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const projectsElement = document.getElementById("projects");
      projectsElement.classList.add("fade-in");
    }
  }, [isVisible]);

  return (
    <Element name="projects">
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            This are some of the projects I have made such as wireframe and web
            apps.
          </Desc>
          <ToggleButtonGroup>
            {toggle === "all" ? (
              <ToggleButton active value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            ) : (
              <ToggleButton value="all" onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            )}
            <Divider />
            {toggle === "programming" ? (
              <ToggleButton
                active
                value="programming"
                onClick={() => setToggle("programming")}
              >
                Programming
              </ToggleButton>
            ) : (
              <ToggleButton
                value="programming"
                onClick={() => setToggle("programming")}
              >
                Programming
              </ToggleButton>
            )}
            <Divider />
            {toggle === "wireframe" ? (
              <ToggleButton
                active
                value="wireframe"
                onClick={() => setToggle("wireframe")}
              >
                Wireframe
              </ToggleButton>
            ) : (
              <ToggleButton
                value="wireframe"
                onClick={() => setToggle("wireframe")}
              >
                Wireframe
              </ToggleButton>
            )}
          </ToggleButtonGroup>

          <CardContainer>
            {toggle === "all" &&
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </Element>
  );
};

export default Projects;
