import React from 'react'
import tw from 'twin.macro'

type Box = {
   limeted?: boolean
} & Component<'div'>

export const Box: React.FC<Box> = ({ children, limeted, ...rest }) => {
   return (
      <>
         {limeted ? (
            <div css={tw`max-w-5xl`} {...rest}>
               {children}
            </div>
         ) : (
            <div {...rest}>{children}</div>
         )}
      </>
   )
}
