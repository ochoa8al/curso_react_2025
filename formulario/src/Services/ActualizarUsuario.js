import {updateUser} from "../Api/user";

export const actualizarUsuario = async (id, data) => {
  try {
    const response = await updateUser(id, data);
    console.log("Respuesta de actualizarUsuario:", response);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};
