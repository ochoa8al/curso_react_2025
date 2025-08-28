import { useContext } from "react";
import { Context } from "../Context/UserContext";
import { ConsultarUsuarios } from "../Services/ConsultarUsuarios";
import { formatDate } from "../Utils/dateutils";
import { Link } from "react-router-dom";

const data = await ConsultarUsuarios()


export const Table = () => {

  const {setUserData} = useContext(Context)
  
  const handleEditUser = (user) => {
    console.log("Editar usuario con ID:", user);
    setUserData(user)
  };
  
  const handleDeleteUser = (id) => {
    console.log("Eliminar usuario con ID:", id);
  };


  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Fecha de Nacimiento</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        {        
        data && data?.map((user,index) => (
          <tr key={user._id}>
            <td>{index+1}</td>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{formatDate(user.dob)}</td>
            <td>{user.username}</td>
            <td>
              <button id="openDialog" onClick={() =>handleEditUser(user)}>
                <Link to={`/detalle/${user._id}`} state={user} >Editar</Link>
              </button>
            </td>
            <td>
              <button onClick={() => handleDeleteUser(user._id)}>Eliminar</button>
            </td>
          </tr>
     
          
        ))}
      </tbody>
    </table>
  );
};
