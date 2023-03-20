import React from 'react'
import { Box, Text, Container, Heading, Flex, IconButton } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'
import TextAnimation from './TextAnimation'


function Intro() {
    return (
        <>
            <div className="intro">

                <Container w="100vw" display="flex" alignItems="center" justifyContent="center">
                    <Box px="6">
                        <Text id="about-text" fontSize={ { base: "20px", md: "25px", lg: "35px" } }>Hi, my name is</Text>
                        
                        <Heading id="heading-title" fontSize={ { base: "40px", md: "60px", lg: "80px" } }> Christy Park</Heading>
                        <Text fontSize={ { base: "15px", md: "25px", lg: "25px" } } id="about-text">
                            Dallas based aspiring web designer and developer who builds beautiful and intuitive user interfaces for the web.
                        </Text>
                    </Box>
                </Container>

            </div>
        </>

    )
}

export default Intro