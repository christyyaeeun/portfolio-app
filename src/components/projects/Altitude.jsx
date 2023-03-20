import React from 'react'
import { Text, Center, Stack, Flex, Heading, Badge, useColorModeValue, Container, Box } from '@chakra-ui/react'
import BackButton from '../BackButton'

function Altitude() {
    return (
        <>
            <Box id="back-btn" position="fixed" top="10%">
                <BackButton />
            </Box>
            <div className="altitude-container">
                <Container py="4em">
                    <Text fontSize={ '1.5rem' } pt={ '8' } color={ 'gray.500' } textAlign={ 'center' }>Altitude</Text>
                    <Container id="problem" pt={ '5' } mb={ '5' } h={ '50vw' }>
                        <Text fontSize={ 'lg' } textAlign={ 'center' }>The Problem</Text>



                    </Container>

                    <Container id="research-discovery" pt={ '5' } mb={ '5' } h={ '50vw' }>
                        <Text fontSize={ 'lg' } textAlign={ 'center' }>Research and Discovery</Text>



                    </Container>

                    <Container id="mockups" pt={ '5' } mb={ '5' } h={ '50vw' }>
                        <Text fontSize={ 'lg' } textAlign={ 'center' }>Mockups</Text>
                    </Container>
                </Container>

            </div>
        </>
    )
}

export default Altitude