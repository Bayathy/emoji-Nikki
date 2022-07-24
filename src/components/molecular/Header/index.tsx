import tw from 'twin.macro'
import React from 'react'
import { Box } from '../../atom/Box'
import { Card } from '../../atom/Card'
import { Button } from '../../atom/Button'
import { Icon } from '@iconify-icon/react'

export const Header: React.FC = () => {
   return (
      <Box
         styles={tw`
            w-screen
            bg-primary
            h-16
         `}
      >
         <Box
            limeted
            styles={tw`w-11/12 h-full flex items-center justify-between`}
         >
            <Card
               styles={tw`
               w-max
               bg-white
            `}
            >
               <p css={tw`px-8`}>Wedia</p>
            </Card>
            <Button css={tw`bg-white py-1.5`}>
               <Icon width={'2rem'} icon="tabler:user" />
            </Button>
         </Box>
      </Box>
   )
}
