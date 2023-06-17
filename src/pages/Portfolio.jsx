import React from 'react'
import { motion } from 'framer-motion'
import ProjectCards from '../components/ProjectCards'
import { Box } from '@chakra-ui/react'

const Portfolio = () => {
    return (
        <>
            <motion.div
                transition={ { duration: 1, delay: .2 } }
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                exit={ { opacity: 0 } }
            >
                <Box className="portfolio-container" pt={{base:"3em", md:"4em", lg:"5em"}} pb="5em">
                    <ProjectCards />
                </Box>
            </motion.div>
        </>
    )
}

export default Portfolio