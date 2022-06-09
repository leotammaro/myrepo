import { Flex, Image, Text, Link, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";

function ProjectDescription({ proyectImage, description, title, urlProyect }) {
  const opacity = useBreakpointValue({ base: "0,5", lg: "1" })

  return (
    <Fade left>
      <Flex
        direction={
          "column"}
        padding={10}
        fontWeight="600"
        zIndex={1000}
      >
        <Text
          fontSize={{ base: 18, xl: 24 }}
          textDecoration="underline"
          fontWeight={600}
          color="#fff"
          zIndex={1000}
        >
          {title}
        </Text>
        <Flex alignItems={"center"}>

          <Image
            src={proyectImage}
            w={180}
            objectFit="contain"
            borderRadius={28}
            _hover={{ opacity }}
          />
          <Flex
            direction={"column"}
            justifyContent={{ base: "center", xl: "space-between" }}
            alignItems={"center"}
            w={600}
            h="100%"
            paddingLeft={5}
            display={{ base: "none", lg: "flex" }}
          >
            <Text color={"#fff"} fontSize={14} textAlign="left">
              {description}
            </Text>
            <Flex
              padding={5}
              gridGap={5}
              color={"primary"}
              alignItems="center"
              fontSize={{ base: 14, xl: 16 }}
            >
              <Link
                border={"1px solid #02aab0"}
                padding={{ base: 1, xl: 2 }}
                _hover={{ outline: "none" }}
                href={urlProyect}
                isExternal
                _focus={{ boxShadow: "none" }}
              >
                See Live
              </Link>
              <Link>Repo GitHub</Link>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </Fade>
  );
}

export default ProjectDescription;
