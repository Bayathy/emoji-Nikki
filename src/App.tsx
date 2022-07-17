import React from 'react'
import { css, Global } from '@emotion/react'
import { Button } from './components/atom/Button'

export const App: React.FC = () => {
   return (
      <>
         <Global
            styles={css`
               body {
                  background-color: #dcdcdc;
               }
            `}
         />
         <Button />
      </>
   )
}
