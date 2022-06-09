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
        const { proyectImage, repo, title, description, urlProyect } = project;
        return (
          <ProjectDescription
            index={index}
            key={index}
            proyectImage={proyectImage}
            repo={repo}
            title={title}
            description={description}
            urlProyect={urlProyect}
          />
        );
      })}
    </Stack>
  );
}

export default Projects;
