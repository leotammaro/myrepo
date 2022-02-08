import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import moon from "../svg/moon.svg";
import LinkNavbar from "./LinkNavbar";

function Navbar({ scrollToAbout, scrollToProyects }) {
  const sections = ["Sobre mi", "Proyectos", "Contactame"];

  const scrollToSection = (section) => {
    if (section === "Sobre mi") scrollToAbout();
    else if (section === "Proyectos") scrollToProyects();
    else {
      scrollToProyects();
    }
  };

  return (
    <Flex
      color={"#fff"}
      fontSize={18}
      height={"80px"}
      justifyContent={"space-between"}
      width={"100%"}
      fontWeight={"600"}
    >
      <Text color={"#000"} marginRight={"auto"}>
        Leonel Tammaro
      </Text>
      <Stack
        spacing={6}
        direction={"row"}
        display={{ base: "none", md: "flex" }}
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
      <Image src={moon} h={8} w={8} marginLeft={5} />
    </Flex>
  );
}

export default Navbar;
