import { Box } from '@chakra-ui/react'
import React from 'react'

function Three() {
  return (
    
    <Box w='100%' h='800px'  bgGradient={[
      'linear(to-tr, teal.300, yellow.400)',
      'linear(to-t, blue.200, teal.500)',
      'linear(to-b, orange.100, purple.300)',
    ]} >
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Rem natus, quas dolor maxime unde iusto incidunt dolorem ullam amet eos expedita odit architecto 
    doloribus ipsam nulla atque, odio ipsa accusantium.</Box>
    
  )
}

export default Three