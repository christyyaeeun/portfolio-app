import React from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Heading,
    Text,
    Stack,
    Box,
    IconButton,
    Image,
} from '@chakra-ui/react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import SkillTags from './SkillTags';
import VideoPlayer from './VideoPlayer';
import FigmaEmbed from './FigmaEmbed';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) {
        return null;
    }

    const { name, description, roles, tools, about, imgURL, tags, gifURL, figmaURL } = project;

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
                <DrawerBody color="white" pb="5em">
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
                    <Box mb="1em">
                {gifURL &&   <VideoPlayer gifURL={ gifURL } /> }
                    </Box>
                    { imgURL && (
                        <a href={ imgURL } target="_blank" rel="noreferrer">
                            <Image alt="Project Image" src={ imgURL } />
                        </a>
                    ) }
                    { figmaURL && <FigmaEmbed figmaURL={ figmaURL } /> }
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default ProjectModal;
