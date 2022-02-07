import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Fade } from "react-reveal";
import { useEffect, useState } from "react/cjs/react.development";
import yope from "../images/yope.jpg";
import { imagesTechnologies } from "../services/technologies";
import { webSiteTechnologies } from "../services/technologies";
import TextAboutMe from "./TextAboutMe";

const AboutUser = forwardRef((_, ref) => {
  const [age, setAge] = useState(23);
  const calculateAge = () => {
    const monthBirthday = new Date().getMonth();
    if (monthBirthday === 4) setAge(age + 1);
  };
  useEffect(() => {
    calculateAge();
  }, []);

  return (
    <Flex
      maxH={"100vh"}
      minH={"100vh"}
      width={"100%"}
      zIndex={0}
      bgGradient={"linear(135deg,#02aab0 0%,#00cdac 100%)"}
      clipPath={"polygon(0 0, 100% 0, 100% 90%, 0 100%);"}
      justifyContent={"space-around"}
      direction={"column"}
      alignItems={"center"}
      paddingBottom={100}
      ref={ref}
    >
      <Fade duration={2000}>
        <Text
          fontSize={{ base: 32, md: 32, xl: 44 }}
          fontWeight={600}
          color="white"
          padding="30px"
        >
          Sobre mi
        </Text>
      </Fade>
      <Stack
        justifyContent={"center"}
        padding="30px"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, xl: 20 }}
        divider={<StackDivider />}
        alignItems={"center"}
      >
        <Fade bottom distance={"50px"} duration={1500}>
          <Image
            src={yope}
            w={{ base: 150, md: 200 }}
            h={{ base: 150, md: 200 }}
            borderRadius={"50%"}
            objectFit={{ base: "cover", xl: "none" }}
          />
        </Fade>
        <Fade left distance={"50px"} duration={1500}>
          <Stack w={{ base: 300, xl: 500 }}>
            <TextAboutMe
              description={`Soy Leo, tengo ${age} años y me encuentro en busca de un cambio en mi carrera profesional.`}
            />
            <TextAboutMe
              description={
                "Estoy interesado en introducirme en el ambiente de la informática. Estoy estudiando de forma autodidacta para ser Full Stack Developer."
              }
            />
            <TextAboutMe
              description={
                "En el front-end estuve aprendiendo el framework de React. Desarrollando interfaces de usuarios utilizando la librería Chakra UI. Estuve haciendo integraciones con REST API´s. Además de desarrollo de web siguiendo un diseño. "
              }
            />
            <TextAboutMe
              description={
                "Con respecto al back-end estuve aprendiendo Node JS, Express, bases de datos no relacionales utilizando MONGODB mediante mongoose."
              }
            />
          </Stack>
        </Fade>
      </Stack>
      <Fade duration={3000}>
        <Stack
          direction={"row"}
          spacing={7}
          w="80vw"
          justifyContent={"center"}
          zIndex={100000}
        >
          {imagesTechnologies.map((technology, index) => {
            return (
              <Link
                href={webSiteTechnologies[technology].url}
                isExternal
                key={index}
              >
                <Image
                  src={webSiteTechnologies[technology].logo}
                  h={{ base: "50px", xl: "80px" }}
                  w={{ base: "50px", xl: "80px" }}
                />
              </Link>
            );
          })}
        </Stack>
      </Fade>
    </Flex>
  );
});

export default AboutUser;
