import "./App.css";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectModals from "./components/ProjectModal";
import Contact from "./components/Contacts";
import Arrow from "./components/HeroSection/Arrow";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient{
    38.73deg;
    rgba(204,0,187,0.15) 0%,
    rgba(201,32,184,0) 50%
    ),

  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0 ) 50%,
    rgba(0,70,209,0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%,0 100%);
  `;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Contact />
          </Wrapper>
          {openModal.state && (
            <ProjectModals openModal={openModal} setOpenModal={setOpenModal} />
          )}
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}
export default App;
