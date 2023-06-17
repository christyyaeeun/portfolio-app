import { Heading, Text, Box, Container, SimpleGrid, useColorModeValue, Flex, } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiAwsamplify } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'


const About = () => {
  const color = useColorModeValue('#65a1c8', '#aed7f5')
  return (
    <>
        <motion.div
          transition={ { duration: 1, delay: .2 } }
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          exit={ { opacity: 0 } }
        >
          <Box h={ { base: "70px", md: "70px", lg: "100px" } }>

          </Box>

          <Container pb={ { base: "5em", md: "6em", lg: "12em" } } px={ { base: "1.3em", md: "2em", lg: "3em" } } maxW={ { base: "xl", md: "2xl", lg: "3xl" } }>
            <Box my="2em">
              <Box>
                <Heading mb=".5em" id="heading-title">About Me</Heading>
              </Box>
              <Flex>
                <Text pb="3" fontSize={ { base: "16px", md: "18px", lg: "20px" } } id="about-text">
                  I am passionate and an avid learner of all things technology and design.
                  I graduated from The University of Texas at Dallas
                  {/* { ' ' }
                  <Link color="#cd7335">The University of Texas at Dallas </Link> */}
                  with a Bachelor’s degree in Information Technology and Systems.
                  I’m self-taught HTML, CSS, and Javascript, and I spent my free time designing web pages throughout college.
                  I entered the web development space these past three years, and throughout the process, I learned many technologies like PHP, Bootstrap, React, and Serverless through AWS.
                  I am truly passionate about building something from the ground up and continue to work on side projects to gain more experience and skills.
                </Text>
              </Flex>
            </Box>


            <Box id="skills-container" pb={ { base: "1em", md: "2em", lg: "5em" } }>
              <Heading mt=".5em" pb="1em" id="heading-title">Skills</Heading>
              <div className="icon-wrap">
                <SimpleGrid color={ useColorModeValue('#505050', 'white') } columns={ [ 2, null, 4 ] } gridGap={ { base: "10px 80px" } }>

                  <Box className="box-icon">
                    <AiFillHtml5 color={ color } />
                    <Text className="icon-title">HTML5</Text>
                  </Box>
                  <Box className="box-icon">
                    <FaCss3Alt color={ color } />
                    <Text className="icon-title">CSS3</Text>
                  </Box>
                  <Box className="box-icon">
                    <SiJavascript color={ color } />
                    <Text className="icon-title">JavaScript</Text>
                  </Box>
                  <Box className="box-icon">
                    <FaReact color={ color } />
                    <Text className="icon-title">React</Text>

                  </Box>
                  <Box className="box-icon">
                    <SiFirebase color={ color } />
                    <Text className="icon-title">Firebase</Text>

                  </Box>
                  <Box className="box-icon">
                    <SiAwsamplify color={ color } />
                    <Text className="icon-title">AWS Amplify</Text>
                  </Box>

                  <Box className="box-icon">
                    <TbBrandVscode color={ color } />
                    <Text className="icon-title">VS Code</Text>
                  </Box>

                  <Box className="box-icon">
                    < FaFigma color={ color } />
                    <Text className="icon-title">Figma</Text>
                  </Box>
                </SimpleGrid>
              </div>
            </Box>

          </Container>
        </motion.div>
    </>

  )
}

export default About