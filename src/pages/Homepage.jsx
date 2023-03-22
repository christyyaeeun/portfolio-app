import { ArrowDownIcon } from '@chakra-ui/icons'
import { Flex, Box, Container, Text, Heading, IconButton } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useInView, motion } from "framer-motion";
import Portfolio from './Portfolio'


function Section({ children }) {
    const pageRef = useRef(null)
    const isInView = useInView(pageRef, { once: true });

    return (
        <section ref={ pageRef }>
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

const Homepage = () => {
    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.article
                initial="hidden"
                animate="visible"
                exit={ { opacity: 0, transition: { duration: 0.5 } } }
            >
                <Section>
                    <div className="about">

                        <Container h="100vh" w="100vw" display="flex" alignItems="center" justifyContent="center">
                            <Box px="6">
                                <Text id="about-text" fontSize={ { base: "20px", md: "25px", lg: "35px" } }>Hi, my name is</Text>
                                <Heading id="heading-title" fontSize={ { base: "40px", md: "60px", lg: "80px" } }> Christy Park</Heading>
                                <Text fontSize={ { base: "15px", md: "25px", lg: "25px" } } id="about-text">
                                    Dallas based web designer and developer who builds beautiful and intuitive user interfaces for the web.
                                </Text>
                                <Flex pt="3" justifyContent="center">
                                    <Box className="btn-animation" h="150px">
                                        <IconButton variant="ghost" bg="transparent" icon={ <ArrowDownIcon /> } onClick={ handleClick } />
                                    </Box>
                                </Flex>

                            </Box>
                        </Container>

                    </div>
                </Section>

                <Section>
                    <div ref={ elementRef }>
                        <Portfolio />
                    </div>
                </Section>
            </motion.article>
        </>

    )
}

export default Homepage