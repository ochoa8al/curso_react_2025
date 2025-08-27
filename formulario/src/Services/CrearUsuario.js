import {createUser} from '../Api/user';
import { Alert } from '../Utils/Alert';

export const CrearUsuario = (data) => {
    console.log("Data en CrearUsuario:", data);
 //##### API crear usuarios   
     if(!data) return;     
     
    const userData = data;
    const Api_data = {
        name: userData?.nombre,
        email: userData?.email,
        dob: userData?.fechaNacimiento,
        username: userData?.usuario,
        password: userData?.contrasena
    };

    createUser(Api_data).then((res) => {
        // Manejar la respuesta de la API
        if(!res.ok){
        Alert("Error!", "Error al crear el usuario", "error");
        return;          
        }
        //Exito
        Alert("Exito!", "Usuario guardado!", "success");
    });
    }
  
