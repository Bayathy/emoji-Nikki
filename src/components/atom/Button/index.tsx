import { SerializedStyles } from '@emotion/react'
import React from 'react'
import tw from 'twin.macro'

type Button = {
   children?: string
   css?: SerializedStyles
} & React.ComponentProps<'button'>

export const Button: React.FC<Button> = ({ children, ...rest }) => {
   return (
      <button {...rest} css={tw`border-b-extra rounded-2xl px-8`}>
         {children}
      </button>
   )
}
