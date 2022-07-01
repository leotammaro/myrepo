import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../constants/projects'


function ProjectDetail({ scrollToProyects }) {
    const [proyectData, setProyectData] = React.useState({})
    const { pathProyect } = useParams()
    const navigate = useNavigate()

    const goToHome = async () => {
        await navigate("/")
        scrollToProyects()
    }

    useEffect(() => {
        const proyect = projects.find(proyect => proyect.path === pathProyect)
        setProyectData(proyect)
    }, [pathProyect])
    return (

        <Flex color={"#fff"} h="100vh" w="100vw" direction={"column"} padding={5} textAlign="center" alignItems={"center"} >
            <Text fontSize={26} zIndex={1000} _hover={{ cursor: "pointer" }} onClick={goToHome}>{proyectData.title}</Text>
            <Image src={proyectData.proyectImage} h={400} objectFit="contain" zIndex={1000} />
            <Text fontWeight={"semibold"} zIndex={1000} maxW={500}>{proyectData.description}</Text>
            <Flex zIndex={1000} padding={5} gap={5}>
                <Link isExternal href={proyectData.urlProyect} color="primary" _hover={{ outline: "none" }} fontSize={18} fontWeight="semibold" border={"1px solid #02aab0"} padding={3}>Visitar</Link>
                <Link isExternal href={proyectData.repo} color="primary" _hover={{ outline: "none" }} fontSize={18} fontWeight="semibold" border={"1px solid #02aab0"} padding={3}>Repo Github</Link>
            </Flex>
        </Flex>

    )
}

export default ProjectDetail