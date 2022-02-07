import { Text } from "@chakra-ui/react";
import React from "react";

function TextDescription({ text, color, fontSize, fontWeight }) {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color || "#000"}
      textAlign={"center"}
    >
      {text}
    </Text>
  );
}

export default TextDescription;
