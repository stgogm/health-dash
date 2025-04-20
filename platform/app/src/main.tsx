import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={defaultSystem}>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
)
