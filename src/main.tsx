import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { theme } from './theme/theme'

ReactDOM.render(
   <React.StrictMode>
      <ChakraProvider theme={theme}></ChakraProvider>
   </React.StrictMode>,
   document.querySelector('#root')
)
