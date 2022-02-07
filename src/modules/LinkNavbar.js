import { Link } from "@chakra-ui/react";
import "./linknavbar.css";
import React from "react";
import { Fade } from "react-reveal";

function LinkNavbar({ children, delay, onClick }) {
  return (
    <Fade top opposite collapse duration={400} delay={delay}>
      <Link
        className="link-navbar"
        _hover={{ outline: "none" }}
        onClick={onClick}
        color={{ base: "#000", md: "#fff" }}
        display={{ base: "none", md: "block" }}
      >
        {children}
      </Link>
    </Fade>
  );
}

export default LinkNavbar;
