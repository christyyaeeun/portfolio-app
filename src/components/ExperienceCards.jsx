import {
    SimpleGrid, Box, Text, Flex, Container, Heading, useColorModeValue, Center, HStack, Tag, useDisclosure,
    Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerFooter, DrawerHeader, Spacer, IconButton, Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs'
import { ExternalLinkIcon } from '@chakra-ui/icons';

const project1 = {
    title: 'Pair',
    imgURL: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fpair-gettingstarted.png?alt=media&token=e2dc926c-811c-4617-b9f6-62fb7d038be1',
    description: 'A full-stack serverless relationship enrichment web app using AWS Amplify, Cognito, GraphQL, and S3.',
}

const project2 = {
    title: 'Altitude',
    imgURL: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fproject%20files%2Falt-landing.png?alt=media&token=6ce3af7a-fc4b-46b0-b2cd-74fff770fdb6',
    description: 'A Spotify connected music sharing platform that lets users share other user-curated playlists.',
}

const project3 = {
    title: 'Morning Donuts',
    imgURL: 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/morning-web.png?alt=media&token=44bf7658-8c7e-48ac-a09f-25d7d5648a4b',
    description: 'A website design and development project for a small business.',
}

interface ExperienceCardProps {
    title: string;
    topic: String;
    description: String;
    imgURL: String;
}

interface ISkillTags {
    tags: Array<string>;
    marginTop?: SpaceProps[ 'marginTop' ];
}

const SkillTags: React.FC<ISkillTags> = (props) => {
    return (
        <HStack mb="4" spacing={ 2 } marginTop={ props.marginTop }>
            { props.tags.map((tag) => {
                return (
                    <Tag size={ 'md' } variant="solid" bg="#e7d64d" color="black" key={ tag }>
                        { tag }
                    </Tag>
                );
            }) }
        </HStack>
    );
};

function ExperienceCard(props: ExperienceCardProps) {
    const { title, topic, description, imgURL } = props;

    return (
        <div className='portfolio-item'>
            <Center p={ 6 }>
                <Box
                    className="hover-bg"
                    position="relative"
                    maxW={ '445px' }
                    w={ 'full' }
                    bg={ useColorModeValue('white', 'gray.900') }
                    boxShadow={ '2xl' }
                    rounded={ 'md' }
                    overflow={ 'hidden' }>
                    <Text className="hover-text">
                        <Heading>{ title }</Heading>
                        { description }
                        <h4>{ topic }</h4>
                    </Text>

                    <img
                        src={ imgURL }
                        className='img-responsive'
                        alt={ title }
                    />{ ' ' }
                </Box>
            </Center>
        </div>
    )
}


export default function ExperienceCards() {
    // let navigate = useNavigate();
    const {
        isOpen: isOpenP1Modal,
        onOpen: onOpenP1Modal,
        onClose: onCloseP1Modal
    } = useDisclosure()

    const {
        isOpen: isOpenP2Modal,
        onOpen: onOpenP2Modal,
        onClose: onCloseP2Modal
    } = useDisclosure()
    const {
        isOpen: isOpenP3Modal,
        onOpen: onOpenP3Modal,
        onClose: onCloseP3Modal
    } = useDisclosure()

    return (
        <>
            <motion.div
                transition={ { duration: 1, delay: .2 } }
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                exit={ { opacity: 0 } }
            >
                <Box className="portfolio-wrapper" w="100vw" pb="5em" bg={ useColorModeValue('white', 'gray.800') }>
                    <Container maxW="100vw" className="experience-container" mt="2em" pb="5em">
                        <Box w="100%" mt="2em" ml={ { base: "0", lg: "4" } }>
                            <Heading id="heading-title">Portfolio</Heading>
                        </Box>
                        <SimpleGrid columns={ [ 1, null, 2 ] } minChildWidth="350px" justifyContent="center" justifyItems={ { lg: "center" } }>

                            <div onClick={ onOpenP1Modal }>
                                <ExperienceCard title={ 'Paired' } tags={ 'React Serverless' } topic={ 'Serverless Application' } description={ 'A relationship enrichment app.' } imgURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fproject%20files%2FPaired-login.png?alt=media&token=30fb6100-48fc-4875-be2b-c1702c22702a' } />
                                <Drawer isOpen={ isOpenP1Modal } onClose={ onCloseP1Modal } size={ { base: "sm", md: "md" } }>
                                    <DrawerOverlay />
                                    <DrawerContent className="modal-content" bg="#1c1c1c">
                                        <DrawerHeader>
                                            <Flex minWidth='max-content' alignItems='center' gap='2' color="white">
                                                <IconButton className="back-btn" onClick={ onCloseP1Modal } icon={ <BsArrowLeftCircle /> } fontSize="30px" variant="ghost" />
                                                <Spacer />
                                                <Box p='2'>
                                                    <Heading size='md'>Back to projects</Heading>
                                                </Box>
                                            </Flex>
                                        </DrawerHeader>

                                        <DrawerBody color="white">
                                            <Heading>{ project1.title }</Heading>
                                            <Text className="project-text">{ project1.description }</Text>
                                            <Text id="project-subtitle">Technologies</Text>
                                            <SkillTags tags={ [ 'React', 'Hooks', 'GraphQL', 'AWS' ] } />
                                            <Text id="project-subtitle">About</Text>
                                            <Text className="project-text">
                                                In the modern age of technology, although we have multiple social media platforms to communicate,
                                                people are often lost mindlessly scrolling through their feed instead of nurturing their close relationships.
                                                The Pair app aims to break these communication barriers and provide a safe platform solely to cater to these intimate relationships in an interactive, engaging and unique way.
                                                Pair enables users to share their inner thoughts and feelings, plan interactive events,
                                                look back on treasured memories, and nurture close relationships.
                                            </Text>
                                            <a href={ project1.imgURL } target="_blank" rel="noreferrer">
                                                <img src={ project1.imgURL } alt="Project 1" />
                                            </a>
                                        </DrawerBody>

                                        <DrawerFooter justifyContent="center">
                                            <Button className='external-btn' as='a' href='https://docs.google.com/document/d/e/2PACX-1vSrpRh2cHsTXVbWyeIpA9hQW3CxMkQxCP_Ajzq6GMnyjMFTbyM8ChiGYvMIXiNvsX8qq2UNIfNThRXD/pub' target="_blank" rel="noreferrer" rightIcon={ <ExternalLinkIcon /> } variant='ghost'>
                                                View More
                                            </Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </div>

                            {/* <div onClick={ () => navigate('/altitude') }> */ }
                            <div onClick={ onOpenP2Modal }>
                                <ExperienceCard title={ 'Altitude' } topic={ 'User Experience' } description={ 'A music application' } imgURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/altitude-cover.png?alt=media&token=5cccb586-6485-4cbe-aaca-c7f96af4151b' } />
                                <Drawer isOpen={ isOpenP2Modal } onClose={ onCloseP2Modal } size={ { base: "sm", md: "md" } }>
                                    <DrawerOverlay />
                                    <DrawerContent className="modal-content" bg="#1c1c1c">
                                        <DrawerHeader>
                                            <Flex minWidth='max-content' alignItems='center' gap='2' color="white">
                                                <IconButton onClick={ onCloseP2Modal } icon={ <BsArrowLeftCircle /> } fontSize="30px" variant="ghost" />
                                                <Spacer />
                                                <Box p='2'>
                                                    <Heading size='md'>Back to projects</Heading>
                                                </Box>
                                            </Flex>
                                        </DrawerHeader>

                                        <DrawerBody color="white">
                                            <Heading mb=".5em">{ project2.title }</Heading>
                                            <Text className="project-text">{ project2.description }</Text>
                                            <Text id="project-subtitle">Technologies</Text>
                                            <SkillTags tags={ [ 'PHP', 'MySQL', 'Apache', 'Spotify API' ] } />
                                            <Text id="project-subtitle">About</Text>
                                            <Text className="project-text">
                                                Despite the availability of several music sharing apps in the market,
                                                there is still a gap for a platform that caters to independent and emerging
                                                musicians who struggle to gain visibility in the crowded music industry.
                                                Traditional music streaming services prioritize mainstream and popular artists,
                                                leaving lesser-known artists to struggle for recognition. Altitude allows users
                                                to share curated playlists without the mainstream influence.
                                            </Text>

                                            <a href={ project2.imgURL } target="_blank" rel="noreferrer">
                                                <img src={ project2.imgURL } alt="Project 2" />
                                            </a>
                                        </DrawerBody>

                                        <DrawerFooter justifyContent="center">
                                            <Button className='external-btn' as='a' rightIcon={ <ExternalLinkIcon /> } variant='ghost'>
                                                View More
                                            </Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                            {/* <div onClick={ () => navigate('/md') }> */ }
                            <div onClick={ onOpenP3Modal }>
                                <ExperienceCard title={ 'Morning Donuts' } topic={ 'Website Design & Development' } description={ 'A website for a small business' } imgURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/morning-web.png?alt=media&token=44bf7658-8c7e-48ac-a09f-25d7d5648a4b' } />
                                <Drawer isOpen={ isOpenP3Modal } onClose={ onCloseP3Modal } size={ { base: "sm", md: "md" } }>
                                    <DrawerOverlay />
                                    <DrawerContent className="modal-content" bg="#1c1c1c">
                                        <DrawerHeader>
                                            <Flex minWidth='max-content' alignItems='center' gap='2' color="white">
                                                <IconButton onClick={ onCloseP3Modal } icon={ <BsArrowLeftCircle /> } fontSize="30px" variant="ghost" />
                                                <Spacer />
                                                <Box p='2'>
                                                    <Heading size='md'>Back to projects</Heading>
                                                </Box>
                                            </Flex>
                                        </DrawerHeader>

                                        <DrawerBody color="white">
                                            <Heading>{ project3.title }</Heading>
                                            <Text className="project-text">{ project3.description }</Text>
                                            <Text id="project-subtitle">Technologies</Text>
                                            <SkillTags tags={ [ 'React', 'Firebase', 'GraphQL' ] } />
                                            <Text id="project-subtitle">About</Text>
                                            <Text className="project-text">
                                            </Text>

                                            <a href={ project3.imgURL } target="_blank" rel="noreferrer">
                                                <img alt="Project 3" src={ project3.imgURL } />
                                            </a>
                                        </DrawerBody>

                                        <DrawerFooter justifyContent="center">
                                            <Button className='external-btn' as='a' rightIcon={ <ExternalLinkIcon /> } variant='ghost'>
                                                View More
                                            </Button>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                        </SimpleGrid>
                    </Container>
                </Box>
            </motion.div>
        </>
    )
}
