import React from 'react'
import tw from 'twin.macro'

type Box = {
   limeted?: boolean
} & Component<'div'>

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
