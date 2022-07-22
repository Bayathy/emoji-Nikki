import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

type Box = {
   limeted?: boolean
} & Component<'div'>

export const Box: React.FC<Box> = ({ children, limeted, styles, ...rest }) => {
   return (
      <>
         {limeted ? (
            <div css={[tw`max-w-5xl m-auto`, styles]} {...rest}>
               {children}
            </div>
         ) : (
            <div css={styles} {...rest}>
               {children}
            </div>
         )}
      </>
   )
}
