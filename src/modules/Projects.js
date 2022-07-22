import { Stack } from "@chakra-ui/react";
import React from "react";
import { projects } from "../constants/projects";
import ProjectDescription from "./ProjectDescription";

function Projects() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={{ base: "center", xl: "flex-start" }}

    >
      {projects.map((project, index) => {
        return (
          <ProjectDescription
            key={index}
            project={project}
          />
        );
      })}
    </Stack>
  );
}

export default Projects;
