import "./App.css";
import React, { useRef, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./services/theme";
import Navbar from "./modules/Navbar";
import AboutMe from "./modules/AboutMe";
import ProjectsSection from "./modules/ProjectsSection";
import Home from "./modules/Home";
import ContactSection from "./modules/ContactSection";
import "./App.css";
import ParticlesBackGround from "./modules/Particles";

function App() {
  const aboutRef = useRef(null);
  const proyectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProyects = () => {
    proyectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction={"column"}
        width={"100%"}
        height={"100%"}
        alignItems="center"
        className="App"
      >

        <Flex
          w={{ base: "100vw", md: 700, lg: 1000, xl: 1200 }}
          direction={"column"}
          minH={"100vh"}
          zIndex={1000}
        >
          <Navbar
            scrollToAbout={scrollToAbout}
            scrollToProyects={scrollToProyects}
            scrollToContact={scrollToContact}
          />
          <Home
            scrollToAbout={scrollToAbout}
            scrollToContact={scrollToContact}
            scrollToProyects={scrollToProyects}
          />
        </Flex>
        <AboutMe ref={aboutRef} />
        <ProjectsSection ref={proyectsRef} />
        <ContactSection ref={contactRef} />
        <ParticlesBackGround />
      </Flex>
    </ChakraProvider >
  );
}

export default App;
