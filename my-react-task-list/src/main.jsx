import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { extendTheme } from '@chakra-ui/react';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
const theme = extendTheme({
 
 
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    light: {
     primary: 'blue',
     secondary: 'green',
    },
   dark: {
     primary: 'black',
     secondary: 'teal',
  },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)