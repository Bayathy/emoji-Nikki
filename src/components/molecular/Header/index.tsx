import tw from 'twin.macro'
import React from 'react'
import { Box } from '../../atom/Box'
import { Card } from '../../atom/Card'

export const Header: React.FC = () => {
   return (
      <Box
         styles={tw`
            w-screen
            bg-primary
            h-16
         `}
      >
         <Box limeted styles={tw`w-full h-full flex items-center`}>
            <Card
               styles={tw`
               w-max
               bg-white
               ml-8
            `}
            >
               <p css={tw`px-8`}>title</p>
            </Card>
         </Box>
      </Box>
   )
}
