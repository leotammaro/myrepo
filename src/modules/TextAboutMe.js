import { Text } from "@chakra-ui/react";
import React, { Children } from "react";

function TextAboutMe({ description }) {
  return (
    <Text
      color="white"
      fontWeight={600}
      textAlign={"left"}
      fontSize={{ base: 14, md: 16 }}
      duration={1500}
    >
      {description}
    </Text>
  );
}

export default TextAboutMe;
