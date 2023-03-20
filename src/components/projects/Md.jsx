import React from 'react'
import BackButton from '../BackButton'
import { Box } from '@chakra-ui/react'


function Md() {
  return (
   <>
          <Box id="back-btn" position="fixed" top="10%">
              <BackButton />
          </Box>
   </>
  )
}

export default Md