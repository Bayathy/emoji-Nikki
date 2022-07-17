import { SerializedStyles } from '@emotion/react'
import React from 'react'
import tw from 'twin.macro'

type Button = {
   children?: React.ReactNode
   css?: SerializedStyles
} & React.ComponentProps<'button'>

export const Button: React.FC<Button> = ({ children, ...rest }) => {
   return (
      <button {...rest} css={tw`bg-extra rounded-2xl px-8`}>
         aaa
      </button>
   )
}
