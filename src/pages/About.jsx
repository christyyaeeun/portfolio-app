import { Heading, Text, Box, Container, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiAwsamplify } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'


const About = () => {

  return (
    <>
      <div className="about">
        <motion.div
          transition={ { duration: 1, delay: .2 } }
          initial={ { opacity: 0, y: -20 } }
          animate={ { opacity: 1, y: 0 } }
          exit={ { opacity: 0 } }
        >
          <Box h={ { base: "70px", md: "70px", lg: "100px" } }>

          </Box>

          <Container maxW={ { base: "2xl", md: "3xl", lg: "5xl" } }>
            <Box my="2em">
              <Box>
                <Heading mb=".5em" id="heading-title">About Me</Heading>
              </Box>

              <Text pb="3" fontSize={ { base: "15px", md: "18px", lg: "20px" } } id="about-text">
                I am passionate and an avid learner of all things technology and design.
                I graduated from The University of Texas at Dallas with a Bachelor’s degree in Information Technology and Systems.
                I’m self-taught HTML, CSS, and Javascript, and I spent my free time designing web pages throughout college.
              </Text>
              <Text fontSize={ { base: "15px", md: "18px", lg: "20px" } } id="about-text">
                I entered the web development space these past three years, and throughout the process, I learned many technologies like PHP, Bootstrap, React, and Serverless through AWS.
                I am truly passionate about building something from the ground up and continue to work on side projects to gain more experience and skills.
              </Text>
            </Box>


            <Box>
              <Heading mt=".5em" pb="1em" id="heading-title">Skills</Heading>
              <div className="icon-container">
                <SimpleGrid columns={ [ 2, null, 4 ] } gridGap={ { base: "10px 80px" } }>

                  <Box className="box-icon">
                    <AiFillHtml5 />
                    <Text className="icon-title">HTML5</Text>
                  </Box>
                  <Box className="box-icon">
                    <FaCss3Alt />
                    <Text className="icon-title">CSS3</Text>
                  </Box>
                  <Box className="box-icon">
                    <SiJavascript />
                    <Text className="icon-title">JavaScript</Text>
                  </Box>
                  <Box className="box-icon">
                    <FaReact />
                    <Text className="icon-title">React</Text>

                  </Box>
                  <Box className="box-icon">
                    <SiFirebase />
                    <Text className="icon-title">Firebase</Text>

                  </Box>
                  <Box className="box-icon">
                    <SiAwsamplify />
                    <Text className="icon-title">AWS Amplify</Text>
                  </Box>

                  <Box className="box-icon">
                    <TbBrandVscode />
                    <Text className="icon-title">VS Code</Text>
                  </Box>

                  <Box className="box-icon">
                    < FaFigma />
                    <Text className="icon-title">Figma</Text>
                  </Box>


                  <Box className="box-icon">
                  </Box>
                </SimpleGrid>
              </div>
            </Box>

          </Container>
        </motion.div>
      </div>
    </>

  )
}

export default About