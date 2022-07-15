import React from 'react'

type Button = {
   children: React.ReactNode
} & React.ComponentProps<'button'>

export const Button: React.FC<Button> = () => {
   return <></>
}
