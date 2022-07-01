import { Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Home from "./Home"
import AboutMe from './AboutMe'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'

function HomePortFolio({ scrollToAbout, scrollToContact, scrollToProyects, aboutRef, proyectsRef, contactRef }) {
    return (
        <Flex
            direction={"column"}
            width={"100%"}
            height={"100%"}
            alignItems="center"
            className="App"
        >
            <Flex
                w={{ base: 350, md: 700, lg: 1000, xl: 1200 }}
                direction={"column"}
                minH={"100vh"}
                zIndex={1000}
                h="100vh"
            >
                <Navbar
                    scrollToAbout={scrollToAbout}
                    scrollToProyects={scrollToProyects}
                    scrollToContact={scrollToContact}
                />
                <Home
                    scrollToAbout={scrollToAbout}
                    scrollToContact={scrollToContact}
                    scrollToProyects={scrollToProyects}
                />
            </Flex>
            <AboutMe ref={aboutRef} />
            <ProjectsSection ref={proyectsRef} />
            <ContactSection ref={contactRef} />

        </Flex>
    )
}

export default HomePortFolio