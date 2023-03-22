import React from 'react'
import PortfolioCards from '../components/PortfolioCards'
import { motion } from 'framer-motion'

const Portfolio = () => {
    return (
        <>
            <motion.div
                transition={ { duration: 1, delay: .2 } }
                initial={ { opacity: 0, y: -20 } }
                animate={ { opacity: 1, y: 0 } }
                exit={ { opacity: 0 } }
            >
                <PortfolioCards />
                </motion.div>
        </>


    )
}

export default Portfolio