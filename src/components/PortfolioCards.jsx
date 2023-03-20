import { SimpleGrid, Box, Button, Text, Flex, Image, Container, Heading, } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

interface PortfolioCardProps {
    title: string;
    topic: String;
    description: String;
    imgURL: String;
}

function PortfolioCard(props: PortfolioCardProps) {
    const { title, topic, description, imgURL } = props;
    return (
        <Box p="6" maxW={ { base: "100%", md: "350px", lg: "450px" } }>
            <motion.div whileHover={ { scale: .98, duration: 1.5 } }>
                <Image w="100%" src={ imgURL } />
            </motion.div>
            <Flex direction="column" spacing="6">
                <Text id="project-title">{ title }</Text>
                <Text id="project-topic">{ topic }</Text>
                <Text id="project-description">{ description }</Text>

            </Flex>
        </Box>
    )
}


export default function PortfolioCards() {
    let navigate = useNavigate();

    return (
        <>
            <div className="portfolio-wrapper">
                <Container maxW="100%" className="portfolio-container" mt="2em">
                    <Box ml={ { base: "0", lg: "6" } }>
                        <Heading id="heading-title">Portfolio</Heading>
                    </Box>
                    <SimpleGrid columns={ [ 1, null, 2 ] } minChildWidth="400px" justifyContent="center" justifyItems={ { lg: "center" } }>
                        <div onClick={ () => navigate('/altitude') }>
                            <PortfolioCard title={ 'Altitude' } topic={ 'User Experience' } description={ 'A music application' } imgURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/altitude-cover.png?alt=media&token=5cccb586-6485-4cbe-aaca-c7f96af4151b' } />

                        </div>
                        <div onClick={ () => navigate('/paired') }>
                            <PortfolioCard title={ 'Paired' } topic={ 'Serverless Application' } description={ 'A relationship enrichment app.' } imgURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/olt-img.png?alt=media&token=1dc64eb9-e46c-4f35-9460-6247ce239059' } />

                        </div>
                        <div onClick={ () => navigate('/md') }>

                            <PortfolioCard title={ 'Morning Donuts' } topic={ 'Website Design & Development' } description={ 'A website for a small business' } imgURL={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/morning-web.png?alt=media&token=44bf7658-8c7e-48ac-a09f-25d7d5648a4b' } />
                        </div>
                    </SimpleGrid>
                </Container>
            </div>


        </>
    )
}

