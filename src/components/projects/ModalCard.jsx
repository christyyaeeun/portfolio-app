import React from 'react'
import {
    Text, Container, Box, Image, useDisclosure, Modal,
    ModalOverlay,
    ModalContent, ModalBody
} from '@chakra-ui/react'

function ModalCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <Modal isOpen={ isOpen } onClose={ onClose }>
          <ModalOverlay />
          <ModalContent>

              <ModalBody>
                  <Box display="flex" justifyContent="center" maxH="100%" h="700px">
                      <Image maxW={ { base: "160%" } } objectFit="contain" transform={ { base: "rotate(90deg)", md: "rotate(0)" } } src="https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fproject%20files%2FAltitude-ERD-darker.png?alt=media&token=9cc49ff3-ddd7-4d8c-a4a5-6fcc8cc745e7"></Image>
                  </Box>
              </ModalBody>
          </ModalContent>
      </Modal>
  )
}

export default ModalCard