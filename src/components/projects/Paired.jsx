import React from 'react'
import { Text, Heading, Box, Container, Image } from '@chakra-ui/react'
import './olt.css'
import BackButton from '../BackButton'

function Paired() {
    return (
        <>

            <Box id="back-btn" position="fixed" top="10%">
                <BackButton />
            </Box>
            <Container id="problem" mt={{base:"5em", lg:"5em"}} p='0' maxW='100%' borderBottom='1px black solid'>

                <div className="container1" m='0 auto' p='0'>
                    <Box className="problemtext">
                        <Text fontSize='small'>
                            What comes to your mind when you hear the word communication?

                            Most think of the verbal forms, but some are just as important but not as obvious - nonverbal, emotional awareness, and even listening.

                            Communication is complicated - we're clouded with assumptions, disconnected by viewpoints, and
                            misunderstood by miscommunication.

                            Thanks to the digital age, were changing the way we communicate--but it's full of noise.
                            Sometimes, our emails, text messages, and social media notifications consume us too much from being present to the people around us.
                        </Text>
                    </Box>
                    <Box className="bg1">
                        <Box className="problemtitle">
                            <Heading pl='4'>Paired</Heading>

                        </Box>
                    </Box>
                    <Box className="mobile-title" mb='2'>

                        <Heading>Paired</Heading>

                    </Box>
                </div>
            </Container>





            <Container id="vision" mt={ { base: "5em", lg:"2em"}} p='0' maxW='100%' borderBottom='1px black solid'>
                <div className="container-vision">
                    <Box className="vision-title-box">
                        <Box className="vision-title">
                            <Heading textAlign='right' pr='4'>The Vision</Heading>

                        </Box>
                    </Box>
                    <Box className="vision-text">
                        <Text fontSize='.9rem'>

                        </Text>
                    </Box>
                    <Box className="mobile-vision-box">

                        <Box className="mobile-vision-title">
                            <Heading>The Vision</Heading>
                        </Box>
                    </Box>
                </div>
            </Container>

            <Container id="problem" mt='1em' p='0' maxW='100%' borderBottom='1px black solid'>

                <div className="container1" m='0 auto' p='0'>
                    <Box className="problemtext">
                        <Text fontSize='small'>
                            What comes to your mind when you hear the word communication?

                            Most think of the verbal forms, but some are just as important but not as obvious - nonverbal, emotional awareness, and even listening.

                            Communication is complicated - we're clouded with assumptions, disconnected by viewpoints, and
                            misunderstood by miscommunication.

                            Thanks to the digital age, were changing the way we communicate--but it's full of noise.
                            Sometimes, our emails, text messages, and social media notifications consume us too much from being present to the people around us.
                        </Text>
                    </Box>
                    <Box className="bg1">
                        <Box className="problemtitle">
                            <Heading pl='4'>The Problem</Heading>

                        </Box>
                    </Box>
                    <Box className="mobile-title" mb='2'>

                        <Heading>The Problem</Heading>

                    </Box>
                </div>
            </Container>


            <div className="container4">
                <div className="img1">
                    <Image src={ 'https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/olt%20photos%2Fprototype-pt1.png?alt=media&token=f928223b-42b7-450e-a673-e2f7e905124a' }>
                    </Image>
                </div>
                <div className="cap1">
                    <Heading pl='4'>Prototype</Heading>

                    <div className="c4txt1">
                        <div className="text">
                            <Text>Getting Started</Text>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Paired