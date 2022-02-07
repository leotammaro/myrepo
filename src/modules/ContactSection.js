import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";

function ContactSection() {
  return (
    <Flex justifyContent={"center"} padding={5}>
      <Link href="https://chakra-ui.com" isExternal>
        <Image
          src={"https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}
          h={10}
          w={10}
        />
      </Link>

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        h={10}
        w={10}
      />
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        h={10}
        w={10}
      />
    </Flex>
  );
}

export default ContactSection;
