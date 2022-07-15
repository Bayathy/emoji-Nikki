import { GlobalStyles } from 'twin.macro'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import React from 'react'

const container = document.querySelector('#root')
const root = createRoot(container!)
root.render(
   <React.StrictMode>
      <GlobalStyles />
      <App />
   </React.StrictMode>
)
