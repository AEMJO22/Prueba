import React from "react";

import { Outlet, Link } from "react-router-dom";

const Cuerpo2 = (props) => {
  return (
    <div className="cuerpo2">
      <Link to={props.ruta}> </Link>
      <header className="cabeza1">
        <img
          src={require(`../public/imagenes/img/${props.foto}.jpg`)}
          alt="img0"
          className="img0"
          loading="lazy"
        />
        <div className="contenido-header1">
          <div className="simple-contenido-header">
            <h1 className="simple-contenido-header__title">{props.titulo}</h1>
            <p className="simple-contenido-header__entry-meta">
              {props.tecnica}
              <br />

              {props.medidas}
              <br />
            </p>
            <p className="simple-contenido-header__entry-meta2">
              {props.precio}
            </p>
          </div>
        </div>{" "}
      </header>

      <div className="contenido1">
        <div className="contenidobody">
          <img
            className="tamano"
            src={require(`../public/imagenes/img/${props.im1}.jpg`)}
            alt="imagen1"
            loading="lazy"
          />

          <div className="textoddc">
            <p>Detalles del cuadro</p>
          </div>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/${props.im2}.jpg`)}
            alt="imagen2"
            loading="lazy"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/${props.im3}.jpg`)}
            alt="imagen3"
            loading="lazy"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/${props.im4}.jpg`)}
            alt="imagen4"
            loading="lazy"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/${props.im5}.jpg`)}
            alt="imagen5"
            loading="lazy"
          />

          <br />

          <p className="textoddc">Pintando el cuadro</p>

          <img
            className="tamanopie"
            src={require(`../public/imagenes/img/${props.im6}.jpg`)}
            alt="imagen6"
            loading="lazy"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamanopie"
            src={require(`../public/imagenes/img/${props.im7}.jpg`)}
            alt="imagen7"
            loading="lazy"
          />

          <p>&nbsp;</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Cuerpo2;
