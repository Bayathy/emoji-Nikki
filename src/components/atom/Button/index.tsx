<<<<<<< HEAD
import { SerializedStyles } from '@emotion/react'
import React from 'react'
import tw from 'twin.macro'

type Button = {
   css?: SerializedStyles
} & Component<'button'>

export const Button: React.FC<Button> = ({ children, ...rest }) => {
   return (
      <button {...rest} css={tw`bg-extra rounded-2xl px-8`}>
         {children}
      </button>
   )
}
=======
import { SerializedStyles } from '@emotion/react'
import React from 'react'
import tw from 'twin.macro'

type Button = {
   children?: string
   css?: SerializedStyles
} & React.ComponentProps<'button'>

export const Button: React.FC<Button> = ({ children, ...rest }) => {
   return (
      <button {...rest} css={tw`bg-extra rounded-2xl px-8`}>
         {children}
      </button>
   )
}
>>>>>>> b235f2c816d8b4468e70ac1c909628b36f3ab065
