import React, { useState } from "react";
import "./register.css";
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function Register() {
  const [name, nombre]=useState("")
  const [password, contraseña] =useState("")
  const [email, correoElectronico]=useState("")
  const [repeatPassword, repetirContraseña] =useState("")
  const registro = async (e) =>{
    e.preventDefault()
    if (password === repeatPassword){
      try {
        await axios.post("http://localhost:8080/register",{email,password,name})
        console.log("inicio de sesion exitoso")
        
      } catch (error) {
        console.log("no se pudo iniciar sesion")
        
      }

      
    }
    else{
      console.log("las contraseñas no son iguales")
    }
    
  }

  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Cree su cuenta</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value ={name} onChange={(e) => nombre (e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" value ={email} onChange={(e) => correoElectronico (e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" name="contrasena" value ={password} onChange={(e) => contraseña (e.target.value)} required />
        </div>
        <div className="input-container">
          <label htmlFor="repetir-contrasena">Repetir Contraseña</label>
          <input
            type="password"
            id="repetir-contrasena"
            name="repetir-contrasena" value ={repeatPassword} onChange={(e) => repetirContraseña (e.target.value)}
            required
          />
        </div>

        <div className ="botoneslogin">
          
          <Link>
            <button type="submit" onClick = {registro}>Crear cuenta </button>
          
          </Link>


        </div>
        
        
      </form>
    </div>
  );
}
