// import React from 'react';
// import {
//     SimpleGrid, Box, Text, Flex, Container, Heading, useColorModeValue, useDisclosure,
//     Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerFooter, DrawerHeader, Spacer, IconButton, Button, Image, Stack, Center,
// } from '@chakra-ui/react'
// import projects from '../pages/data/projects.json'
// import SkillTags from './SkillTags';
// import { BsArrowLeftCircle } from 'react-icons/bs'
// import { ExternalLinkIcon } from '@chakra-ui/icons';

// interface ProjectModalProps {
//     name: string;
//     description: string;
//     roles: string;
//     tools: string;
//     about: string;
//     imgURL: string;
//     onClick: () => void;
// }

// const ProjectModal: React.FC<ProjectModalProps> = ({
//     name,
//     description,
//     roles,
//     tools,
//     about,
//     imgURL,
//     onClick,
// }) => {

//     const { isOpen, onClose } = useDisclosure();

//     return (
//         <Drawer isOpen={ isOpen } onClose={ onClose } size={ { base: "sm", md: "md", lg: "lg" } }>
//             <DrawerOverlay />
//             <DrawerContent className="modal-content" bg="#1c1c1c">
//                 <DrawerHeader>
//                     <Flex minWidth='max-content' alignItems='center' gap='2' color="white">
//                         <IconButton onClick={ onClose } icon={ <BsArrowLeftCircle /> } fontSize="30px" variant="ghost" />
//                         <Spacer />
//                         <Box p='2'>
//                             <Heading size='md'>Back to projects</Heading>
//                         </Box>
//                     </Flex>
//                 </DrawerHeader>
//                 <DrawerBody color="white">
//                     <Heading>{ name }</Heading>
//                     <Text className="project-text">{ description }</Text>
//                     <Text className="project-subtitle" id="pb">Technologies</Text>
//                     <Stack direction={ { base: "column", md: "row" } } spacing="6" mb="1em">
//                         <Box display="flex" flexDir="column">
//                             <Text className="project-subtitle">Roles & Responsibilities</Text>
//                             <Text>{roles}</Text>
//                         </Box>
//                         <Box>
//                             <Text className="project-subtitle">
//                                 Tools
//                             </Text>
//                             <Text>{tools}</Text>
//                         </Box>
//                     </Stack>
//                     <Text className="project-subtitle">About</Text>
//                     <Text className="project-text">
//                     </Text>
//                     <a href={ imgURL } target="_blank" rel="noreferrer">
//                         <img alt="Project 3" src={ imgURL } />
//                     </a>
//                 </DrawerBody>
//                 <DrawerFooter justifyContent="center">
//                     <Button className='external-btn' as='a' rightIcon={ <ExternalLinkIcon /> } variant='ghost'>
//                         View More
//                     </Button>
//                 </DrawerFooter>
//             </DrawerContent>
//         </Drawer>
//     );
// };

// export default ProjectModal;


import React from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Heading,
    Text,
    Stack,
    Box,
    IconButton,
    Button,
    Image,
} from '@chakra-ui/react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import SkillTags from './SkillTags';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) {
        return null;
    }

    const { name, description, roles, tools, about, imgURL, tags } = project;

    return (
        <Drawer isOpen={ isOpen } onClose={ onClose } size={ { base: 'sm', md: 'md', lg: 'lg' } }>
            <DrawerOverlay />
            <DrawerContent className="modal-content" bg="#1c1c1c">
                <DrawerHeader>
                    <Box display="flex" alignItems="center" color="white">
                        <IconButton onClick={ onClose } icon={ <BsArrowLeftCircle /> } fontSize="30px" variant="ghost" />
                        <Box p="2">
                            <Heading size="md">Back to projects</Heading>
                        </Box>
                    </Box>
                </DrawerHeader>
                <DrawerBody color="white">
                    <Heading>{ name }</Heading>
                    <Text className="project-text">{ description }</Text>
                    <Text className="project-subtitle" id="pb">
                        Technologies
                    </Text>
                    <SkillTags tags={ tags } marginTop="1em" />
                    <Stack direction={ { base: 'column', md: 'row' } } spacing="6" mb="1em">
                        <Box display="flex" flexDir="column">
                            <Text className="project-subtitle">Roles & Responsibilities</Text>
                            <Text>{ roles }</Text>
                        </Box>
                        <Box>
                            <Text className="project-subtitle">Tools</Text>
                            <Text>{ tools }</Text>
                        </Box>
                    </Stack>
                    <Text className="project-subtitle">About</Text>
                    <Text className="project-text">{ about }</Text>
                    <a href={ imgURL } target="_blank" rel="noreferrer">
                        <Image alt="Project Image"
                            src={ imgURL }
                        />
                    </a>
                </DrawerBody>
                <DrawerFooter justifyContent="center">
                    <Button className="external-btn" as="a" rightIcon={ <ExternalLinkIcon /> } variant="ghost">
                        View More
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default ProjectModal;
