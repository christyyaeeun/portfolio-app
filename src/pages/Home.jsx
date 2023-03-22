import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Contact from './Contact';
import Intro from '../components/Intro';
import { Flex, Box } from '@chakra-ui/react'
import PortfolioCards from '../components/PortfolioCards';
import { SlArrowUpCircle } from 'react-icons/sl'
import { MdKeyboardArrowDown} from 'react-icons/md'

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

    const elementRef = useRef(null);

    const handleClick = () => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const listenToScroll = () => {
        let heightSetToVisible = 800;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightSetToVisible) {
            isVisible &&
                setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <>
            <div className="intro-container">
                <Intro />
                <Flex pt="3" justifyContent="center">
                    <motion.div
                        transition={ { duration: 1, delay: 2.5 } }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                    >
                        <Box className="btn-animation">
                            <button id="down-arrow" onClick={ handleClick }><MdKeyboardArrowDown /></button>
                        </Box>
                    </motion.div>
                </Flex>
            </div>

            <Section>
                <div ref={ elementRef }>
                    <PortfolioCards />
                </div>
            </Section>

            <Section><Contact /></Section>
            {
                isVisible
                &&
                <button id="scrollt-btn"
                    onClick={ () => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    } }>
                    <SlArrowUpCircle />
                </button>

            }
        </>
    )
}

export default Home