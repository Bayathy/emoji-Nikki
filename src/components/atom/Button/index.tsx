import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

type Button = {
   variant: 'text' | 'icon'
} & Component<'button'>

export const Button: React.FC<Button> = ({
   children,
   styles,
   variant,
   ...rest
}) => {
   return (
      <>
         {(variant == 'text' || undefined) && (
            <button {...rest} css={[tw`rounded-2xl px-8`, styles]}>
               {children}
            </button>
         )}
         {variant == 'icon' && (
            <button {...rest} css={[tw`rounded-2xl`, styles]}>
               {children}
            </button>
         )}
      </>
   )
}
