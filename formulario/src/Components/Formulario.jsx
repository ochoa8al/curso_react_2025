/*
Como ejercicio pueden hacer un formulario con los siguientes campos = nombre, correo electrónico, fecha de nacimiento, usuario y contraseña.
*/

import { useRef } from "react"
import { CrearUsuario } from "../Services/CrearUsuario"

//validar los campos segun su expresion regular correspondiente
const validarCampo = (campo) => {
    if(!campo.name || !campo.value) return false
    console.log(campo)
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        fechaNacimiento: /^\d{4}-\d{2}-\d{2}$/,
        usuario: /^[a-zA-Z0-9]{4,12}$/,
        contrasena: /^.{4,12}$/
    }
    const esValido = expresiones[campo.name]?.test(campo.value)
    if(esValido === false) {
        alert(`El campo ${campo.name} no es válido`)
        return
    }
    return esValido
}

const handleSubmit = (event) => {
    event.preventDefault();
    //document.querySelector(".form-container").classList.add("expandido")

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    //Crear usuario
    CrearUsuario(data);

    //Resetear el formulario
    event.target.reset();

};

export const Formulario = () => {
    const txtNombre = useRef()
    const txtEmail = useRef()
    const txtFechaNacimiento = useRef()
    const txtUsuario = useRef()
    const txtContrasena = useRef()

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit} >
            <h3 className="title">Ingresa tus datos</h3>
            <div className="field-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required ref={txtNombre} onBlur={() => validarCampo({name: txtNombre.current?.name, value: txtNombre.current?.value})} />
            </div>
            <div className="field-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required ref={txtEmail} onBlur={() => validarCampo({name: txtEmail.current?.name, value: txtEmail.current?.value})} />
            </div>
            <div className="field-group form-row">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" required ref={txtFechaNacimiento} onBlur={() => validarCampo({name: txtFechaNacimiento.current?.name, value: txtFechaNacimiento.current?.value})} />
            </div>
            <div className="field-group">
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" id="usuario" name="usuario" required ref={txtUsuario} onBlur={() => validarCampo({name: txtUsuario.current?.name, value: txtUsuario.current?.value})} />
            </div>

            <div className="field-group">
                <label htmlFor="contrasena">Contraseña:</label>
                <input type="password" id="contrasena" name="contrasena" required ref={txtContrasena} onBlur={() => validarCampo({name: txtContrasena.current?.name, value: txtContrasena.current?.value})} />
            </div>          

            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}