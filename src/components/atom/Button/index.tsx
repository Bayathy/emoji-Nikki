import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

export const Button: React.FC<Component<'button'>> = ({
   children,
   styles,
   ...rest
}) => {
   return (
      <button {...rest} css={[tw`rounded-2xl px-8`, styles]}>
         {children}
      </button>
   )
}
