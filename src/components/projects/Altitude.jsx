import React, { useState } from 'react'
import {
    Text,
    Container,
    Box,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalBody,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
} from '@chakra-ui/react'
import BackButton from '../BackButton'
import { motion } from 'framer-motion'
import { SmallAddIcon } from '@chakra-ui/icons'

const variants = {
    open: { opacity: 1, scale: 1.5 },
    closed: { opacity: 1, scale: 1 },
}


function Altitude() {
    const [ isClicked, setIsClicked ] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box id="back-btn" position="fixed" top="10%">
                <BackButton />
            </Box>
            <div className="altitude-container">



                <Container maxW="100%" py="4em">
                    {/* <Text className="project-h1" fontSize={ '1.5rem' } pt={ '8' } color={ 'gray.500' } textAlign={ 'center' }>Altitude</Text>
                    <Box p="1em" boxShadow="lg" borderRadius="2xl" bg="#dae9f8" maxW="500px" m="2em auto">
                        <List spacing={ 3 } p="1em" fontWeight="500">
                            <Text>XAMPP Stack</Text>
                            <Text fontSize='medium' fontWeight="500" textTransform="uppercase" color="black">
                                Development Tools
                            </Text>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                PHP
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                MySQL
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                Apache
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                Spotify API
                            </ListItem>
                            <ListItem>
                                <ListIcon as={ SmallAddIcon } />
                                Cyberduck
                            </ListItem>
                        </List>
                    </Box> */}

                    <SimpleGrid columns={ [ 1, null, 2 ] } spacing='40px' maxW="1400px">
                        <Box display="flex" justifyContent="center" alignItems="center" height={ { base: "50px", md:"200px", lg:"400px" } }>
                            <Text className="project-h1" fontSize={ { base: "2rem", md: "3rem", lg: "4rem" } } pt={ '8' } color={ 'gray.500' } textAlign={ 'center' }>Altitude</Text>

                        </Box>
                        <Box height={ { base: "400px" } }>
                            <Box p="1em" boxShadow="lg" borderRadius="2xl" bg="#dae9f8" maxW="500px" m="2em auto">

                                <List spacing={ 3 } p="1em" fontWeight="500">
                                    <Text>XAMPP Stack</Text>
                                    <Text fontSize='medium' fontWeight="500" textTransform="uppercase" color="black">
                                        Development Tools
                                    </Text>
                                    <ListItem>
                                        <ListIcon as={ SmallAddIcon } />
                                        PHP
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={ SmallAddIcon } />
                                        MySQL
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={ SmallAddIcon } />
                                        Apache
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={ SmallAddIcon } />
                                        Spotify API
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={ SmallAddIcon } />
                                        Cyberduck
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </SimpleGrid>


                    <Container id="problem" pt={ '5' } mb={ '5' }>
                        <Text fontSize={ 'lg' } textAlign={ 'center' }>The Problem</Text>
                        <Text>
                            Provide users the ability to search and share other user-curated playlists
                            using a relevancy tag system. Includes integration with Spotify.


                            Despite the availability of several music sharing apps in the market,
                            there is still a gap for a platform that caters to independent and emerging
                            musicians who struggle to gain visibility in the crowded music industry.
                            Traditional music streaming services prioritize mainstream and popular artists,
                            leaving lesser-known artists to struggle for recognition.
                            As a result, there is a need for a music sharing app that serves as a platform for
                            independent artists to showcase their talent, gain visibility, and build a community
                            of loyal listeners while offering a unique experience to music enthusiasts.
                        </Text>

                    </Container>

                    <Text pt="1em" fontSize={ 'lg' } textAlign={ 'center' }>Entity Relationship Diagram (ERD)</Text>

                    <motion.div animate={ isClicked ? "open" : "closed" } variants={ variants }>
                        <Box>
                            <Image m="0 auto" maxW={ { base: "100%", md: "90%", lg: "80%" } } onClick={ onOpen } src="https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fproject%20files%2FAltitude-ERD-darker.png?alt=media&token=9cc49ff3-ddd7-4d8c-a4a5-6fcc8cc745e7"></Image>
                        </Box>
                        <Modal isOpen={ isOpen } onClose={ onClose } size={ { md: "full", lg: "full" } }>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box pt={ { base: "0", md: "3em", lg: "5em" } } display="flex" justifyContent="center" maxH="100%" h={ { base: "700px", md: "100%", lg: "100%" } }>
                                        <Image maxW={ { base: "160%", md: "80%", lg: "90%" } } objectFit="contain" transform={ { base: "rotate(90deg)", md: "rotate(0)" } } src="https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fproject%20files%2FAltitude-ERD-darker.png?alt=media&token=9cc49ff3-ddd7-4d8c-a4a5-6fcc8cc745e7"></Image>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </motion.div>

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