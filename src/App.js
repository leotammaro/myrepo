import "./App.css";
import React, { useRef } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./services/theme";
import Navbar from "./modules/Navbar";
import AboutUser from "./modules/AboutUser";
import ProjectsSection from "./modules/ProjectsSection";
import User from "./modules/User";
import imageBackground from "../src/images/fondo.svg";
import ContactSection from "./modules/ContactSection";

function App() {
  const aboutRef = useRef(null);
  const proyectsRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProyects = () => {
    proyectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex direction={"column"}>
        <Flex
          direction={"column"}
          backgroundImage={imageBackground}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"right"}
          backgroundSize={"cover"}
          alignItems={"space-between"}
          width={"100%"}
          padding={10}
          height={"100vh"}
        >
          <Navbar
            scrollToAbout={scrollToAbout}
            scrollToProyects={scrollToProyects}
          />
          <User />
        </Flex>
        <AboutUser ref={aboutRef} />
        <ProjectsSection ref={proyectsRef} />
        <ContactSection />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
