import React, { useState } from 'react'
import {
    Text,
    Heading,
    Box,
    Container,
    Image,
    useDisclosure,
    Modal,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import './olt.css'
import BackButton from '../BackButton'
import { SmallAddIcon } from '@chakra-ui/icons'

function Paired() {
    const [ isClicked, setIsClicked ] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Box id="back-btn" position="absolute" top={ { base: "-50px", md: "-20px", lg:"10px" } }>
                <BackButton />
            </Box>
            <Container id="problem" mt={ { base: "5.5em", lg: "5em" } } p='0' maxW='100%' borderBottom='1px black solid'>

                <div className="container1" m='0 auto' p='0'>
                    <Box className="problemtext" display={{base:"block"}}>
                        <Box p="1em" boxShadow="lg" borderRadius="2xl" bg="#dae9f8" maxW="500px">

                        <List spacing={ 3 } fontWeight="500">
                            <Text> Full-stack web application</Text>
                            <Text fontSize='medium' fontWeight="500" textTransform="uppercase" color="black">
                                Development Tools
                            </Text>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                React
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                Hooks
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                Chakra UI
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                React Router
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                CI/CD
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                               GraphQL API
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                Amazon Cognito
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                               S3
                            </ListItem>
                        </List>
                        </Box>
                    </Box>
                    <Box className="bg1">
                        <Box className="problemtitle">
                            <Heading textAlign="center" pl='4'>Paired</Heading>

                        </Box>
                    </Box>
                    <Box className="mobile-title" mb='2'>

                        <Heading>Paired</Heading>
                    </Box>
                </div>
            </Container>





            <Container id="vision" mt={ { base: "5em", lg: "2em" } } p='0' maxW='100%' borderBottom='1px black solid'>
                <div className="container-vision">
                    <Box className="vision-title-box">
                        <Box className="vision-title">
                            <Heading textAlign='right' pr='4'>Mockup</Heading>

                        </Box>
                    </Box>
                    <Box className="vision-text">
                        <Image onClick={ onOpen } maxW={ { base: "100%",md:"65%", lg: "55%" } } src="https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/olt%20photos%2Fprototype-pt1.png?alt=media&token=f928223b-42b7-450e-a673-e2f7e905124a"></Image>
                        <Modal size="full" isOpen={ isOpen } onClose={ onClose }>
                            <ModalOverlay />
                            <ModalContent pt="2em">
                                <ModalHeader>Mockup</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box display="flex" justifyContent="center">
                                        <Image maxW={ { base: "100%", lg: "70%" } } objectFit="contain" src="https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/olt%20photos%2Fprototype-pt1.png?alt=media&token=f928223b-42b7-450e-a673-e2f7e905124a"></Image>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
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