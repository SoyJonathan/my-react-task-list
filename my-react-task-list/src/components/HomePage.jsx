import React from "react";
import { Box, Text } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <div>
      <Box bg='tomato' w='95%' h='5%' p={4} color='white' padding='5' m="5">
        <h1>
          <Text color="purple"  fontSize='32' >¿Qué es mi producto?</Text>
            Lista de tareas
        </h1>
        <p>
            Hola, bienvenidos a nuestra app.
        </p>
        </Box>
    </div>
  );
};

