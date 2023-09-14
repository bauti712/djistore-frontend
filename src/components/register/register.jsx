import React from "react";
import "./register.css";
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <div className="login-container">
      <form className="login-form" action="#" method="post">
        <h2>Cree su cuenta</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" name="contrasena" required />
        </div>
        <div className="input-container">
          <label htmlFor="repetir-contrasena">Repetir Contraseña</label>
          <input
            type="password"
            id="repetir-contrasena"
            name="repetir-contrasena"
            required
          />
        </div>

        <div className ="botoneslogin">
          
          <Link>
            <button type="submit">Crear cuenta </button>
          
          </Link>


        </div>
        
        
      </form>
    </div>
  );
}
