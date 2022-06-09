import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";
import "./user.css";
import homeImage from "../svg/homeImage.svg";

function User({ scrollToAbout, scrollToProyects, scrollToContact }) {
  return (
    <Flex
      justifyContent={{ base: "space-around", xl: "space-between" }}
      width={"100%"}
      alignItems={"center"}
      minH={"100vh"}
      className="user-container"
      direction={{ base: "column", xl: "row" }}
      position={"relative"}

    >
      <Fade bottom opossite duration={2000}>
        <Stack
          alignItems={{ base: "center", xl: "flex-start" }}
          textAlign={{ base: "center", xl: "left" }}
        >
          <Flex direction={"column"} paddingBottom={5}>
            <Text
              color={"#fff"}
              fontSize={55}
              fontWeight={"bold"}
              lineHeight={"100%"}
            >
              Hola!
            </Text>
            <Text
              color={"primary"}
              fontSize={60}
              fontWeight={"bold"}
              lineHeight={"100%"}
            >
              Soy Leo
            </Text>

            <Text
              fontSize={{ base: 30, xl: 40 }}
              color={{ base: "#fff", xl: "#D9D9D9" }}
            >
              Desarrollador Web
            </Text>
          </Flex>
          <Link
            href="https://www.linkedin.com/in/leonel-tammaro-4a730222a/"
            isExternal
            _hover={{ outline: "none" }}
            _focus={{ border: "none" }}
            w={40}
            backgroundColor={"primary"}
            borderRadius={10}
            color={{ base: "#fff" }}
            padding={2}
            margin="0 !important"
            fontSize={18}
            textAlign="center"
          >
            Contactame
          </Link>
        </Stack>
      </Fade>
      <Image
        src={homeImage}
        display={"flex"}
        h={{ base: 340, md: 400 }}
        paddingBottom={10}
      />

      <Flex
        justifyContent={"space-around"}
        fontSize={20}
        color={"#fff"}
        display={{ base: "flex", md: "none" }}
        gap={8}
        fontWeight={"500"}
      >
        <Text onClick={() => scrollToAbout()}>Sobre mi </Text>
        <Text onClick={() => scrollToProyects()}>Proyectos</Text>
        <Text onClick={() => scrollToContact()}>Redes</Text>
      </Flex>
    </Flex>
  );
}

export default User;
