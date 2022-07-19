import { SerializedStyles } from '@emotion/react'
import React from 'react'
import tw, { TwStyle } from 'twin.macro'

type Box = {
   limeted?: boolean
   styles: SerializedStyles | TwStyle
} & Component<'div'>

export const Box: React.FC<Box> = ({ children, limeted, styles }) => {
   return (
      <>
         {limeted ? (
            <div css={[tw`max-w-5xl`, styles]}>{children}</div>
         ) : (
            <div css={[tw`max-w-5xl`, styles]}>{children}</div>
         )}
      </>
   )
}
