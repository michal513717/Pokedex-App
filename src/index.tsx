import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react"; 
import MainView from './Views/MainView';

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <MainView />
    </ChakraProvider>
  // </React.StrictMode> }
)