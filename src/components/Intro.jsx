import { Text, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import TextAnimation from '../components/TextAnimation'

const Intro = () => {

    return (
        <>
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

                        <Box color={ useColorModeValue('#90a1a2', '#9ae1d8') } >
                            {/* <Box color={ useColorModeValue('#a0b3b4', '#9ae1d8') } > */ }
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

                        <motion.div
                            transition={ { duration: 1, delay: 3 } }
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                        >
                            {/* <Text fontSize={ { base: "16px", md: "25px", lg: "25px" } } id="intro-text">
                                Dallas based web designer and developer who builds responsive, user-centric, and intuitive user interfaces for the web.
                            </Text> */}
                        
                        </motion.div>
                    </Box>
                </Container>
            </Box>
        </>

    )
}

export default Intro