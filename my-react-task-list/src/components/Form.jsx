import { Form, useForm } from "react-hook-form"
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'



export const FormContact = () => {

  const { register, formState:{errors}, handleSubmit } = useForm();
  const onSubmit = (data) => {
  }
  
  return (
    <div>
      <Box bg='tomato' w='95%' p={4} color='white' padding='5' m="15">
        <Box bg='tomato' w='95%' p={4} color='white' textAlign='center' fontSize='4xl'>
          Formulario
        </Box>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box bg='red'  p={4} color='white' m="15">
          <div>  
              <label>Nombre: </label>
              <Input
                textColor='black'
                bg='white'   
                isInvalid
                errorBorderColor='black'
                type="text" {...register('nombre', {
                required: true 
                })} placeholder="Nombre" />
                {errors.nombre?.type ==='required' && <p>El nombre es requerido</p>} 
          </div>
        </Box>
        <Box bg='red'  p={4} color='white' m="15" >
          <div>
              <label>Email: </label>
              <Input
                textColor='black'
                bg='white' 
                isInvalid
                errorBorderColor='black'
                type="text" {...register('email',  {
                pattern: /\S+@\S+\.\S+/i,
                required: true
                 })} placeholder="Email"  />
                  {errors.email?.type ==='pattern' && <p>El email es requerido</p>}
          </div>
        </Box>
        <Box bg='red'  p={4} color='white' m="15">
        <div>
          <label>Mensaje: </label>
              <Input
                textColor='black'
                bg='white'            
                isInvalid
                errorBorderColor='black'
                type="text" {...register('mensaje')}
                placeholder="Mensaje" />
              </div>
          </Box>
      <Button colorScheme='purple' size='xs' w="99%">Enviar</Button>
        </form>
        </Box>
    </div>
    
  )
}

