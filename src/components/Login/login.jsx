import React from "react";
import "./login.css";
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Iniciar Sesión</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        
        <div className="input-container">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" name="contrasena" required />
        </div>
        

        <div className ="botoneslogin">
          <button type="submit">Iniciar Sesión</button>
          <Link to='/register'>
            <button type="submit">Crear cuenta </button>
          
          </Link>


        </div>
        
        
      </form>
    </div>
  );
}
