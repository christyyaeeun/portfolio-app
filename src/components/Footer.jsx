import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';

export default function Footer() {

    return (
      <>
     <div className="wavy-border">

                <Icon fill={ useColorModeValue('#8ea6c9','whiteAlpha.200')} version="1.1" id="curved-border" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 116.19">
                    <path class="wave" d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72
	c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43
	z"/></Icon>
                {/* <svg version="1.1" id="curved-border" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1600 116.19">
                    <path class="wave" d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72
	c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43
	z"/></svg> */}
                
            </div>


            <Box
                bg={ useColorModeValue('#8ea6c9', 'whiteAlpha.200') }
                color={ useColorModeValue('gray.700', 'gray.200') }>
          

                <Container
                id="footer"
                    as={ Stack }
                    maxW={ '6xl' }
                    py={ 4 }
                    fontSize={{base:"sm", md:"md", lg:"lg"}}
                    direction={ { base: 'column', md: 'row' } }
                    spacing={ 4 }
                    justify={ { base: 'center', md: 'space-between' } }
                    align={ { base: 'center', md: 'center' } }>
                    <Stack direction={ 'row' } spacing={ 6 }>
                        <Link href={ '/home' }>Home</Link>
                        <Link href={ '/about' }>About</Link>
                        <Link href={ '/portfolio' }>Portfolio</Link>
                        <Link href={ '/contact' }>Contact</Link>
                    </Stack>
                    <Text>© 2023 Christy Park</Text>
                </Container>
           </Box>
        </>
    );
}