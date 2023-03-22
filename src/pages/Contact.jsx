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
            <Box id="contact" bg={useColorModeValue('white','gray.800')}>
                <motion.div
                    transition={ { duration: 1, delay: .2 } }
                    initial={ { opacity: 0, y: -20 } }
                    animate={ { opacity: 1, y: 0 } }
                    exit={ { opacity: 0 } }
                >
                    <Container pt="8em" pb="5em" h="100%" w="100vw">
                        <Heading>Get in Touch</Heading>
                        <ContactFormCreateForm />
                    </Container>
                </motion.div>
            </Box>
        </>
       
    )
}

export default Contact