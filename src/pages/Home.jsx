import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Intro from '../components/Intro';
import { Flex, Box, IconButton, Container } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import PortfolioCards from '../components/PortfolioCards';
import { motion } from 'framer-motion'

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
    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="about-container">
                <About />
                <Flex pt="3" justifyContent="center">
                    <motion.div
                        transition={ { duration: 1, delay: 2.5 } }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                    >
                        <Box className="btn-animation">
                            <IconButton variant="ghost" bg="transparent" icon={ <ArrowDownIcon /> } onClick={ handleClick } />
                        </Box>
                    </motion.div>
                </Flex>
            </div>
            {/* <Section>
                <div id="intro-section">
                    <Intro />
                    <Flex pt="3" justifyContent="center">
                        <Box className="btn-animation">
                            <IconButton variant="ghost" bg="transparent" icon={ <ArrowDownIcon /> } onClick={ handleClick } />
                        </Box>
                    </Flex>
                </div>
            </Section> */}

            <Section>
                <div ref={ elementRef }>
                    <PortfolioCards />
                </div>
            </Section>

            <Section><Contact /></Section>
        </>
    )
}

export default Home