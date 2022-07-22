import tw from 'twin.macro'
import React from 'react'
import { Box } from '../../atom/Box'

export const Header: React.FC = () => {
   return (
      <Box
         styles={tw`
            w-screen
            bg-primary
            h-16
         `}
      >
         <Box limeted styles={tw`w-full`}></Box>
      </Box>
   )
}
