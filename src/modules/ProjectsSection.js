import { Box, Text } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Projects from "./Projects";
import { Fade } from "react-reveal";

const ProjectsSection = forwardRef((_, ref) => {
  return (
    <Box ref={ref} paddingTop={20} zIndex={1000}>
      <Fade>
        <Text
          fontSize={40}
          fontWeight={"bold"}
          paddingBottom={20}
          textAlign={"center"}
          color="#fff"
        >
          Proyectos
        </Text>
      </Fade>
      <Projects />
    </Box>
  );
});

export default ProjectsSection;
