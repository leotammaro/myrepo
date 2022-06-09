import { Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";
import LinkNavbar from "./LinkNavbar";
import portfolioImage from "../images/portfolioImage.jpg";

function Navbar({ scrollToAbout, scrollToProyects, scrollToContact }) {
  const sections = ["Sobre mi", "Proyectos", "Contactame"];

  const scrollToSection = (section) => {
    if (section === "Sobre mi") scrollToAbout();
    else if (section === "Proyectos") {
      scrollToProyects();
    } else {
      scrollToContact();
    }
  };

  return (
    <Flex
      color={"#000"}
      fontSize={18}
      height={"80px"}
      justifyContent={"space-between"}
      paddingTop={10}
      paddingX={{ base: "10px", lg: "0" }}
      fontWeight={"600"}
      alignItems={"center"}
      display={{ base: "none", md: "flex" }}
      minH="80px"
    >
      <Image src={portfolioImage} w={20} h={10} />
      <Stack
        gap={3}
        direction={"row"}
        display={{ base: "none", md: "flex" }}
        alignItems={"center"}
      >
        {sections.map((section, index) => (
          <LinkNavbar
            key={index}
            delay={(index + 1) * 300}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </LinkNavbar>
        ))}
      </Stack>
    </Flex>
  );
}

export default Navbar;
