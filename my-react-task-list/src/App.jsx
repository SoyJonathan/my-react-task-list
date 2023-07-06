import { MainDiv } from "./components/MainDiv.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { HomePage } from "./components/HomePage.jsx"
import { AboutUsPage } from "./components/AboutUsPage.jsx"
import { TareasPage } from "./components/TareasPage.jsx"
import { FormContact } from "./components/Form.jsx"
import * as React from 'react'
import { ChakraProvider, useColorMode, } from '@chakra-ui/react';
import { Box, Button, Text, IconButton, Image,} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <ChakraProvider>
    <BrowserRouter>
        <div>
          <Box bg='tomato' w='90%'  color='white' padding='8' margin="10" >
            <Image borderRadius='full' 
               boxSize='150px' src="https://www.solofondos.com/wp-content/uploads/2015/04/Fondos-de-paisajes.jpg"></Image>
            <div>
              <Text textAlign='center' >
                <IconButton
                    
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    aria-label={colorMode === 'light' ? 'Modo nocturno' : 'Modo diurno'}
                    colorScheme="teal"
                    variant="ghost"
                  />
              <Link to="/" >
                  <Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>Inicio</Button>
                </Link>
            <Link to="/AboutUs" className="mr-3">
              <Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>Nosotros</Button>
            </Link>
            <Link to="/MainDiv" className="mr-3">
              <Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>App</Button>
            </Link>
              <Link to="/Formulario"><Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>Contacto</Button></Link>
              </Text>
            </div>
      <Routes>
        <Route 
          path="/"
          element={
            <HomePage />  
          }
        ></Route >
        <Route
          path="/aboutus"
          element={
              <AboutUsPage />
          }
          ></Route>
          <Route
          path="/MainDiv"
          element={
              <MainDiv />
          }
        ></Route>
        <Route
          path="/Tareas"
          element={
              <TareasPage />
          }
        ></Route >
        <Route
            path="/Formulario"
          element={
              <FormContact/>
          }
        ></Route>
            </Routes>
            </Box>
        </div>
      </BrowserRouter >
      </ChakraProvider>
  );
}


export default App;