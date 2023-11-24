import React, { useState } from "react";
import "./login.css";
import {Link} from 'react-router-dom';
import axios from "axios";



export default function Login() {
  const [email, nombre]=useState("")
  const [password, contraseña] =useState("")
  const login = async (e) =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/login",{email,password})
      console.log("inicio de sesion exitoso")
      
      
    } catch (error) {
      console.log("no se pudo iniciar sesion")
      console.log(email,password)

      
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Iniciar Sesión</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value ={email} onChange={(e) => nombre (e.target.value)} required />
        </div>
        
        <div className="input-container">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" name="contrasena" value ={password} onChange={(e) => contraseña (e.target.value)} required />
        </div>
        

        <div className ="botoneslogin">
          <button type="submit"  onClick ={login}>Iniciar Sesión  </button>
          <Link to='/register'>
            <button type="submit">Crear cuenta </button>
          
          </Link>


        </div>
        
        
      </form>
    </div>
  );
}
