/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedStyles } from '@emotion/react'
import { JSXElementConstructor } from 'react'
import { TwStyle } from 'twin.macro'

export type Component<
   T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = {
   children?: React.ReactNode
   styles?: SerializedStyles | TwStyle
} & React.ComponentProps<T>
