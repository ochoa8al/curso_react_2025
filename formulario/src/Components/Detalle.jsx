import { useContext } from 'react';
import {Context} from '../Context/UserContext';

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log("Datos del formulario:", userData);
  };

const handleOnchange = (event) => {
    const { name, value } = event.target;
    console.log(`Campo cambiado: ${name}, Nuevo valor: ${value}`);
    // Aquí podrías actualizar el estado si estás usando useState
  }

export const Detalle = () => {

  const {userData} = useContext(Context);
  console.log("********* Contexto del usuario:", userData);


    if (!userData) {
      return <div>Cargando...</div>;
    }
  return (

    <form onSubmit={handleSubmit}>
        <h2>Detalle del Usuario</h2>

        <label htmlFor="name">Nombre:</label>
        <input type="text" value={userData.name} name="name" onChange={handleOnchange}/>
        <label htmlFor="email">Email:</label>
        <input type="email" value={userData.email} name="email"onChange={handleOnchange}/>
        <label htmlFor="dob">Fecha de Nacimiento:</label>
        <input type="date" value={userData.dob} name="dob" onChange={handleOnchange}/>
        <label htmlFor="username">Usuario:</label>
        <input type="text" value={userData.username} name="username"onChange={handleOnchange}/>
    </form>

  );
};
