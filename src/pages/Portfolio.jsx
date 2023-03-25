import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCards from '../components/ExperienceCards'
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
                <Box className="portfolio-container" pt={{base:"3em", md:"4em", lg:"5em"}}>
                    <ExperienceCards />
                </Box>
            </motion.div>
        </>
    )
}

export default Portfolio