import React from 'react'
import tw from 'twin.macro'
import { Component } from '../../../model/component'

export const Card: React.FC<Component<'div'>> = ({ children, styles }) => (
   <div css={[tw`rounded-2xl p-1.5`, styles]}>{children}</div>
)
