import { Flex, Image } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Link } from "@chakra-ui/react";

const ContactSection = forwardRef((_, ref) => {
  return (
    <Flex justifyContent={"center"} padding={5} zIndex={2} gap={6} ref={ref}>
      <Link href="mailto:tammaroleonel@gmail.com" isExternal>
        <Image
          src={"https://cdn-icons-png.flaticon.com/512/5968/5968534.png"}
          h={10}
          w={10}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/leonel-tammaro-4a730222a/"
        isExternal
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          h={10}
          w={10}
        />
      </Link>
      <Link isExternal href="https://github.com/leotammaro">
        <Image
          bg={"#fff"}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          h={10}
          w={10}
        />
      </Link>
    </Flex>
  );
});

export default ContactSection;
