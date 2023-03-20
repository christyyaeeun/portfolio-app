import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    Box,
    Flex,
    useColorModeValue,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box className="drawer-nav" w="100vw">
                <Flex
                    bg={ useColorModeValue('white', 'gray.800') }
                    // color={ useColorModeValue('gray.600', 'white') }
                    minH={ '60px' }
                    py={ { base: 2 } }
                    px={ { base: 4 } }
                    borderBottom={ 1 }
                    borderStyle={ 'solid' }
                    borderColor={ useColorModeValue('gray.200', 'gray.900') }
                    align={ 'center' }>
                <IconButton id="menu-icon" ref={ btnRef } icon={
                    isOpen ? <CloseIcon w={ 3 } h={ 3 } /> : <HamburgerIcon w={ 5 } h={ 5 } />
                } onClick={ onOpen }>
                    Open
                </IconButton>

                <Drawer
                    isOpen={ isOpen }
                    placement='right'
                    onClose={ onClose }
                    finalFocusRef={ btnRef }
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader> </DrawerHeader>

                        <DrawerBody>
                                <Stack
                                    bg={ useColorModeValue('white', 'gray.800') }
                                    p={ 4 }>
                                    <Flex
                                        py={ 2 }
                                        flexDirection="column"
                                        flexWrap="nowrap"
                                        justify={ 'space-between' }
                                        align={ 'flex-start' }
                                        fontSize="large"
                                        fontWeight="700"
                                        _hover={ {
                                            textDecoration: 'none',
                                        } }>
                                        <Box mt="0.1rem">
                                            <NavLink to="/home">
                                                Home
                                            </NavLink>
                                        </Box>
                                        <Box mt="0.5rem">
                                            <NavLink to="/about">
                                                About
                                            </NavLink>
                                        </Box>
                                        <Box mt="0.5rem">
                                            <NavLink to="/portfolio">
                                                Portfolio
                                            </NavLink>
                                        </Box>
                                        <Box mt="0.5rem">
                                            <NavLink to="/contact">
                                                Contact
                                            </NavLink>
                                        </Box>
                                    </Flex>
                                </Stack>
                        </DrawerBody>

                        <DrawerFooter>

                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                </Flex>

                
            </Box>
        </>
    )
}