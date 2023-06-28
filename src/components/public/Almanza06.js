import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../estilos/Web2.css";
import Navbar from "./Navbar";
import { Fotter } from "./Fotter";

const Almanza05 = () => {
  return (
    <div className="castor03">
      <Navbar />
      <Link to="/Almanza06"></Link>
      <header className="cabeza1">
        <img
          src={require(`../public/imagenes/img/almanza06-1.jpg`)}
          alt="img0"
          className="img0"
          width="100%"
          height="100%"
        />
        <div className="contenido-header1">
          <h1 className="simple-contenido-header__title">Almanza 06</h1>
          <p className="simple-contenido-header__entry-meta">
            "Oleo Sobre Tela"
            <br />
            53cm X 23cm
            <br />
          </p>
          <p className="simple-contenido-header__entry-meta2">u$d 450</p>
        </div>{" "}
      </header>

      <div className="contenido1">
        <div className="col-sm-8 ">
          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza06-1.jpg`)}
            alt="imagen1"
          />

          <div className="textoddc">
            <p>Detalles del cuadro</p>
          </div>

          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza06-1.jpg`)}
            alt="imagen2"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza06-2.jpg`)}
            alt="imagen3"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza06-3.jpg`)}
            alt="imagen4"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamaño"
            src={require(`../public/imagenes/img/almanza06-4.jpg`)}
            alt="imagen5"
          />
        </div>
      </div>

      <Fotter />
      <Outlet />
    </div>
  );
};

export default Almanza06;
