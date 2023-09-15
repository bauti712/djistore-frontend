import "./header.css";
import Logo from '../../multimedia/Logo.jpg'
import Usuario from '../../multimedia/Usuario.png'
import Carrito from '../../multimedia/carrito.png'
import {Link} from 'react-router-dom';



export default function Header() {
    return (
      <header>
        <div class="header__superior">
          <div class="logo">
            <Link to='/'>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div class="search">
            <input type="search" placeholder="¿Que deseas buscar?" />
          </div>
          <div>
            <Link to='/login'>
              <img class="usuario" src={Usuario} alt="logo" />
            </Link>
          </div>
          <div class="carrito">
            <Link to='/carrito'>
              <img class="carrito" src={Carrito} alt="logo" />
            </Link>
          </div>
          
          
        </div>
        <div class="container__menu">
          <div class="menu">
            <nav>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a>
                  <ul>
                    <li><a href="#">Filmación</a></li>
                    <Link to='/terrenos'>
                      <li><a href="#">Mapeo de terrenos</a></li>
                    </Link>

                    

                    <li><a href="#">Compra de equipos</a></li>
                  </ul>
                </li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Contactos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  