import { Flex, Image, Box, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import { useEffect } from "react/cjs/react.development";

function ProjectDescription({ proyectImage, title, index }) {
  const [indexImpar, setIndexImpar] = useState(false);

  useEffect(() => {
    if (index % 2 !== 0) setIndexImpar(true);
  }, []);
  return (
    <Flex
      alignSelf={{ base: "none", xl: indexImpar && "flex-end" }}
      direction={{
        base: "column-reverse",
        xl: indexImpar ? "row-reverse" : "row",
      }}
      padding={10}
    >
      <Fade left>
        <Image
          src={proyectImage}
          height={{ base: 200, md: 300 }}
          w={{ base: 400, md: 500 }}
        />
      </Fade>
      <Fade right>
        <Flex
          direction={"column"}
          justifyContent={{ base: "center", xl: "space-between" }}
          alignItems={"center"}
          height={{ base: 100, xl: 300 }}
          paddingRight={indexImpar && 5}
          paddingLeft={!indexImpar && 5}
        >
          <Text
            fontSize={{ base: 20, xl: 24 }}
            fontWeight={600}
            paddingBottom={{ base: 5 }}
          >
            {title}
          </Text>
          <Flex
            gridGap={5}
            color={"primary"}
            alignItems="center"
            fontSize={{ base: 14, xl: 20 }}
          >
            <Link
              border={"1px solid #02aab0"}
              padding={{ base: 1, xl: 2 }}
              _hover={{ outline: "none" }}
            >
              See Live
            </Link>
            <Link>Repo GitHub</Link>
          </Flex>
        </Flex>
      </Fade>
    </Flex>
  );
}

export default ProjectDescription;
