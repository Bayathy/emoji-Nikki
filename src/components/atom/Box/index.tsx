import { SerializedStyles } from '@emotion/react'
import React from 'react'
import tw, { TwStyle } from 'twin.macro'

type Box = {
   limeted?: boolean
   styles?: SerializedStyles | TwStyle
} & Component<'div'>

export const Box: React.FC<Box> = ({ children, limeted, styles , ...rest}) => {
   return (
      <>
         {limeted ? (
            <div css={[tw`max-w-5xl m-auto`, styles]} {...rest}>{children}</div>
         ) : (
            <div css={styles} {...rest}>{children}</div>
         )}
      </>
   )
}
