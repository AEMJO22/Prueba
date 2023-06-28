import React from "react";
import "../estilos/Caja1.css";

function FotoPie(props) {
  return (
    <div className="contenedorTexto1">
      
      <img
        className="contenedorImagen1"
        src={require(`../public/imagenes/img/${props.imagen1}.jpg`)}
        alt={props.altImagen1}
      />
      <p className="contenedorParrafo1">
        {props.texto1} <br />
        {props.tamaño1}
            
      </p>
    </div>
  );
}

export default FotoPie;
