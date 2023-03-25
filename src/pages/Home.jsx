import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Contact from './Contact';
import Intro from '../components/Intro';
import { Flex, Box, useColorModeValue, Tooltip } from '@chakra-ui/react'
import { SlArrowUpCircle } from 'react-icons/sl'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ExperienceCards from "../components/ExperienceCards";

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
    const [ isVisible, setIsVisible ] = useState(true);
    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        setIsVisible(false);
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const listenToScroll = () => {
        let heightSetToVisible = 800;
        const winScroll = document.body.scrollTop ||
            document.querySelector('body').scrollTo(0, 0)

        if (winScroll > heightSetToVisible) {
            isVisible &&
                setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <>
            <Box className="intro-container" h="100vh" pt="10em" bg={ useColorModeValue('#f5f5f6', 'gray.800') }>
                <Intro />
                <Flex pt="3" justifyContent="center">
                    <motion.div
                        transition={ { duration: 1, delay: 2.5 } }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                    >
                            <Tooltip label="click me" aria-label="A tooltip" bg="#a0b3b4" closeDelay={ 1500 }>
                            <Box className="btn-animation" color={ useColorModeValue('#75635b', 'white') }>
                                <button id="down-arrow" onClick={ handleClick }><MdKeyboardArrowDown /></button>
                            </Box>
                        </Tooltip>
                    </motion.div>
                </Flex>
            </Box>

            <Section>
                <div ref={ elementRef } style={ { paddingTop: "2em" } }>
                    <Box pt={{base:"2em",md:"3em", lg:"4em"}} bg={ useColorModeValue('white', 'gray.800') }>
                        <ExperienceCards />
                    </Box>
                </div>
            </Section>

            {
                isVisible
                &&
                <button id="scrollt-btn" color="#75635b" _dark={ { color: "white" } }
                    onClick={ () => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    } }>
                    <SlArrowUpCircle />
                </button>

            }

            <Box className="contact-container" pb="250px">
                <Contact />
            </Box>

        </>
    )
}

export default Home