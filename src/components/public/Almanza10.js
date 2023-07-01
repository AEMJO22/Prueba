import React from "react";
import { Outlet, Link } from "react-router-dom";

import Navbar from "./Navbar";
import { Fotter } from "./Fotter";

const Almanza10 = () => {
  return (
    <div className="castor03">
      <Navbar />
      <Link to="/Almanza10"></Link>
      <header className="cabeza1">
        <img
          src={require(`../public/imagenes/img/almanza10-1.jpg`)}
          alt="img0"
          className="img0"
          width="100%"
          height="100%"
        />
        <div className="contenido-header1">
          <h1 className="simple-contenido-header__title">Almanza 10</h1>
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
            className="tamano"
            src={require(`../public/imagenes/img/almanza10-1.jpg`)}
            alt="imagen1"
          />

          <div className="textoddc">
            <p>Detalles del cuadro</p>
          </div>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/almanza10-1.jpg`)}
            alt="imagen2"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/almanza10-2.jpg`)}
            alt="imagen3"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/almanza10-3.jpg`)}
            alt="imagen4"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/almanza10-4.jpg`)}
            alt="imagen4"
          />
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamano"
            src={require(`../public/imagenes/img/almanza10-atril-1.jpg`)}
            alt="imagen4"
          />
        </div>
      </div>

      <Fotter />
      <Outlet />
    </div>
  );
};

export default Almanza10;
