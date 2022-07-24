import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

type Button = {
   type?: 'text' | 'icon'
} & Component<'button'>

export const Button: React.FC<Button> = ({
   children,
   styles,
   type,
   ...rest
}) => {
   return (
      <>
         {(type == 'text' || undefined) && (
            <button {...rest} css={[tw`rounded-2xl px-8`, styles]}>
               {children}
            </button>
         )}
         {type == 'icon' && (
            <button {...rest} css={[tw`rounded-2xl px-8`, styles]}>
               {children}
            </button>
         )}
      </>
   )
}
