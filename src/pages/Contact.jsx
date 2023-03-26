import React from 'react'
import {
    Container,
    Heading,
    useColorModeValue,
    Box,
} from '@chakra-ui/react';
import ContactFormCreateForm from '../ui-components/ContactFormCreateForm'
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <Box id="contact" mt="6em" bg={ useColorModeValue('white', 'gray.800') }>
                <motion.div
                    transition={ { duration: 1, delay: .2 } }
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0 } }
                >
                    <Container className="contact-wrap" maxW="lg" p={ { base: "1em", md: "1.5em", lg: "2em" } } mt="3em" bg={ useColorModeValue('transparent', '#2c313d') } borderRadius="2xl">
                        <Heading>Get in Touch</Heading>
                        <Box>
                            <ContactFormCreateForm />
                        </Box>
                       
                    </Container>
                </motion.div>
            </Box>
        </>

    )
}

export default Contact