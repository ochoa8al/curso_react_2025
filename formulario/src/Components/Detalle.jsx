import { useContext } from 'react';
import {Context} from '../Context/UserContext';

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    console.log("Datos del formulario:", userData);
  };

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
        <input type="text" value={userData.name} name="name"/>
        <label htmlFor="email">Email:</label>
        <input type="email" value={userData.email} name="email"/>
        <label htmlFor="dob">Fecha de Nacimiento:</label>
        <input type="date" value={userData.dob} name="dob"/>
        <label htmlFor="username">Usuario:</label>
        <input type="text" value={userData.username} name="username"/>
    </form>

  );
};
