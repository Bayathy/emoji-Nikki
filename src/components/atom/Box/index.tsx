import React from 'react'
import tw from 'twin.macro'

type Box = {
   children: React.ReactNode
   limeted?: boolean
} & React.ComponentProps<'div'>

export const Box: React.FC<Box> = ({ children, limeted }) => {
   return (
      <>
         {limeted ? (
            <div css={tw`max-w-5xl`}>{children}</div>
         ) : (
            <div>{children}</div>
         )}
      </>
   )
}
