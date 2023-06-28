import React from "react";
import "../estilos/Caja.css";
import { Outlet, Link } from "react-router-dom";


function Cuadro(props) {
  return (
    <div className="contenedorTexto">
      <Link to={props.ruta} className="grid-item__link">
        
          <img
            className="contenedorImagen"
            src={require(`../public/imagenes/img/${props.imagen}.jpg`)}
            alt={props.altImagen}
          />
        
        <h5 className="contenedorTitulo"> {props.titulo}</h5>
        <p className="contenedorParrafo">
          {props.texto} <br />
          {props.tamaño}
          <br />
          {props.precio}
        </p>
      </Link>

      <Outlet />
    </div>
  );
}

export default Cuadro;
