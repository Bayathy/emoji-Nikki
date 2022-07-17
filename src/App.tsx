import React from 'react'
import { css, Global } from '@emotion/react'

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
      </>
   )
}
