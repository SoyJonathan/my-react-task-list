import { Form, useForm } from "react-hook-form"

export const FormContact = () => {

  const { register, formState:{errors}, handleSubmit } = useForm();
  const onSubmit = (data) => {
        
  }
  return (
    <div>
      <h2>Formulario</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre: </label>
          <input type="text" {...register('nombre', {
            required: true  
          })} placeholder="Nombre" />
          {errors.nombre?.type ==='required' && <p>El nombre es requerido</p>}
      </div>
      <div>
        <label>Email: </label>
          <input type="text" {...register('email', {
            pattern: /\S+@\S+\.\S+/i,
            required: true
          })} placeholder="Email" />
          {errors.email?.type ==='pattern' && <p>El email es requerido</p>}
      </div>
      <div>
        <label>Mensaje: </label>
        <input type="text" {...register('mensaje')} placeholder="Mensaje" />
      </div>
      <input type="submit" value="Enviar" />
      </form>
      </div>
  )
}