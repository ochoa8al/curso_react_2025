import { getUsers } from "../Api/user";
import { Alert } from "../Utils/Alert";

export const ConsultarUsuarios = async () => {
    const users = await getUsers();
    if (!users) {
        Alert("Error!", "No se pudieron obtener los usuarios", "error");
        return;
    }
    return users;
    //dispatch({ type: "GET_ALL_USER", payload: res });
  
};

