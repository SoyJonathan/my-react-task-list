import React from "react";
import { Box, Text, Container } from '@chakra-ui/react'

export const AboutUsPage = () => {
  return (
    <div >
      <Box bg='tomato' w='95%' p={4} color='white' padding='50' m="25">
        
          <Text color="purple"  fontSize='32'> ¿Qué es mi producto?</Text>
        
        Lidta de tareas es una plataforma web construida con la tecnologia React Js.
      
      <Text color="purple"  fontSize='32'>¿Para que sirve? </Text>
      <p>
        Es un plataforma que nos servira para llevar el control de todas
        aquellas tareas que se nos presenten en el día a día pero de una manera
        automatizada, es decir que podremos añadir, eliminar y
        actualizar el estado de nuestras tareas. De tal manera que se
        conformemos nuestra propia lista de tareas y ver cuales de ellas nos
        faltan por realizar y las que ya fueron resueltas.
        </p>
      
       <Text color="purple" fontSize='32'> Tecnologias usadas</Text> 
        <li>React js</li>
        <li>Javascript</li>
        <li>Chakra UI</li>
      </Box>
      
    </div>
  );
};

