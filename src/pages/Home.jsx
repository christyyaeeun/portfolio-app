import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Contact from './Contact';
import { Text, Container, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProjectCards from "../components/ProjectCards";
import TextAnimation from "../components/TextAnimation";

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ ref }>
            <span
                style={ {
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                } }
            >
                { children }
            </span>
        </section>
    );
}

function Home() {
    const textColor = useColorModeValue("#72b3df", "#90cdf4");

    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Box className="intro-container" h="100vh" pt="10em" bg={ useColorModeValue('#ffffff', 'gray.800') }>
                <Box className="intro">
                    <Container w="100vw" display="flex" alignItems="center" justifyContent="center">
                        <Box px="6">
                            <motion.div
                                transition={ { duration: 1, delay: 2 } }
                                initial={ { opacity: 0, y: -20 } }
                                animate={ { opacity: 1, y: 0 } }
                                exit={ { opacity: 0 } }
                            >
                                <Text id="intro-text" fontSize={ { base: "22px", md: "25px", lg: "35px" } }>Hi, my name is</Text>
                            </motion.div>
                            <Box color={ textColor }>
                                <TextAnimation />
                            </Box>
                            <motion.div
                                transition={ { duration: 1, delay: 2.5 } }
                                initial={ { opacity: 0 } }
                                animate={ { opacity: 1 } }
                                exit={ { opacity: 0 } }
                            >
                                <Text id="intro-text" fontSize={ { base: "16px", md: "25px", lg: "25px" } } fontWeight="400">
                                    Dallas based front-end developer & visual designer who builds responsive, user-centric, and intuitive user interfaces for the web.
                                </Text>
                            </motion.div>
                        </Box>
                    </Container>
                </Box>
                <Flex pt="3" justifyContent="center">
                    <motion.div
                        transition={ { duration: 1, delay: 3.5 } }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                    >
                        <Box className="btn-animation" color={textColor}>
                            <button id="down-arrow" onClick={ handleClick }><MdKeyboardArrowDown /></button>
                        </Box>
                    </motion.div>
                </Flex>
            </Box>

            <Section>
                <div ref={ elementRef } style={ { paddingTop: "2em" } }>
                    <Box pt={ { base: "2em", md: "3em", lg: "4em" } } bg={ useColorModeValue('white', 'gray.800') }>
                        <ProjectCards />
                    </Box>
                </div>
            </Section>

            <Section>
                <Box className="contact-container" pb="250px" width="lg">
                    <Contact />
                </Box>
            </Section>

        </>
    )
}

export default Home