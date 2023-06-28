import React from "react";
import "../estilos/Web2.css";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import { Fotter } from "./Fotter";

const Almanza04 = () => {
  return (
    <div>
      <Navbar />
      <header className="cabeza1">
        <img
          src={require(`../public/imagenes/img/almanza04-1.jpg`)}
          alt="img0"
          className="img0"
          width="100%"
          height="100%"
        />
        <div className="contenido-header1">
          <h1 className="simple-contenido-header__title">Almanza 04</h1>
          <p className="simple-contenido-header__entry-meta">
            "Oleo Sobre Tela"
            <br />
            25cm X 17,5cm
            <br />
          </p>
          <p className="simple-contenido-header__entry-meta2">u$d 350</p>
        </div>{" "}
      </header>

      <div className="contenido1">
        <div className="col-sm-8 ">
          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza04-1.jpg`)}
            alt="imagen1"
          />

          <div className="textoddc">
            <p>Detalles del cuadro</p>
          </div>

          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza04-2.jpg`)}
            alt="imagen2"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <img
              className="tamaño"
              src={require(`../public/imagenes/img/almanza04-3.jpg`)}
              alt="imagen3"
            />
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <img
              className="tamaño"
              src={require(`../public/imagenes/img/almanza04-4.jpg`)}
              alt="imagen4"
            />
          </p>

          <p className="textoddc">Pintando el cuadro</p>

          <img
            className="tamañopie"
            src={require(`../public/imagenes/img/almanza04-atril-1.jpg`)}
            alt="imagen6"
            loading="lazy"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          </div>
      </div>
      <Fotter />
      <Outlet />
    </div>
  );
};

export default Almanza04;
