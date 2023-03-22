import { Text, Box, Container, useColorModeValue, Image } from '@chakra-ui/react'
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
                            <Text id="intro-text" fontSize={ { base: "20px", md: "25px", lg: "35px" } }>Hi, my name is</Text>
                        </motion.div>
                        {/* <motion.div
                            transition={ { duration: 1, delay: 2.5 } }
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                        >
                            <Box w="50%" id="sparkle-wrapper">
                                <Box id="sparkle-png">
                                    <Image filter={ useColorModeValue('invert(.7)', 'invert(0)') } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/sparkle.GIF?alt=media&token=96ecb3c6-dac9-4cf5-906f-d65313873f91' } />
                                </Box>
                            </Box>
                        </motion.div> */}
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
            </Box>
        </>

    )
}

export default Intro