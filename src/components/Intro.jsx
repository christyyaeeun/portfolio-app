import { Text, Box, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import TextAnimation from '../components/TextAnimation'
import sparkle from '../img/sparkle.GIF';

const Intro = () => {

    return (
        <>
            <div className="intro">
                <Container w="100vw" display="flex" alignItems="center" justifyContent="center">
                    <Box px="6">
                        <motion.div
                            transition={ { duration: 1, delay: 2 } }
                            initial={ { opacity: 0, y: -20 } }
                            animate={ { opacity: 1, y: 0 } }
                            exit={ { opacity: 0 } }
                        >
                            <Text id="intro-text" fontSize={ { base: "20px", md: "25px", lg: "35px" } }>Hi, my name is</Text>
                        </motion.div>
                        <motion.div
                            transition={ { duration: 1, delay: 2.5 } }
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                        >
                        <Box w="50%" id="sparkle-wrapper">
                            <Box id="sparkle-png">
                                    <img style={ { filter:"invert(.7)"}} src={ sparkle } />
                            </Box>
                        </Box>
                        </motion.div>
                        <TextAnimation />

                        <motion.div
                            transition={ { duration: 1, delay: 2.5 } }
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                        >
                            <Text fontSize={ { base: "15px", md: "25px", lg: "25px" } } id="intro-text">
                                Dallas based aspiring web designer and developer who builds beautiful and intuitive user interfaces for the web.
                            </Text>

                        </motion.div>
                    </Box>
                </Container>

            </div>
        </>

    )
}

export default Intro