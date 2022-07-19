import React from 'react'
import { css, Global } from '@emotion/react'
import { Main } from './components/page/Main'

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
         <Main />
      </>
   )
}
