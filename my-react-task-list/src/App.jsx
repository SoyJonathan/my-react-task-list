import { MainDiv } from "./components/MainDiv.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { HomePage } from "./components/HomePage.jsx"
import { AboutUsPage } from "./components/AboutUsPage.jsx"
import { TareasPage } from "./components/TareasPage.jsx"
import { FormContact } from "./components/Form.jsx"
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Button, Text, Image } from '@chakra-ui/react'




function App() {
  
  return (
    <ChakraProvider>
    <BrowserRouter>
        <div>
          <Box bg='tomato' w='100%' p={4} color='white' padding='5'>
            <div>
              <Text textAlign='center' >
              <Link to="/" >
                  <Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>Home</Button>
            </Link>
            <Link to="/AboutUs" className="mr-3">
              <Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>AboutUs</Button>
            </Link>
            <Link to="/MainDiv" className="mr-3">
              <Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>Main</Button>
            </Link>
              <Link to="/Formulario"><Button m='2' color='white' background={"purple.900"} _hover={{
                    background: 'brown'
                  }}>Contacto</Button></Link>
            </Text></div>
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