import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../estilos/Web2.css";
import Navbar from "./Navbar";
import { Fotter } from "./Fotter";

const PuertoPirata = () => {
  return (
    <div className="castor03">
      <Navbar />
      <Link to="/PuertoPirata" ></Link>
      <header className="cabeza1">
        <img
          src={require(`../public/imagenes/img/puertopirata-1.jpg`)}
          alt="img0"
          className="img0"
          width="100%"
          height="100%"
        />
        <div className="contenido-header1">
          <h1 className="simple-contenido-header__title">Puerto Pirata</h1>
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
            src={require(`../public/imagenes/img/puertopirata-1.jpg`)}
            alt="imagen1"
          />

          <div className="textoddc">
            <p>Detalles del cuadro</p>
          </div>

          <img
            className="tamaño"
            src={require(`../public/imagenes/img/puertopirata-2.jpg`)}
            alt="imagen2"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <img
              className="tamaño"
              src={require(`../public/imagenes/img/puertopirata-3.jpg`)}
              alt="imagen3"
            />
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <img
              className="tamaño"
              src={require(`../public/imagenes/img/puertopirata-4.jpg`)}
              alt="imagen4"
            />
          </p>

          <p className="textoddc">Pintando el cuadro</p>

          <img
            className="tamañopie"
            src={require(`../public/imagenes/img/puertopirata-atril-1.jpg`)}
            alt="imagen6"
            loading="lazy"
          />

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <img
            className="tamañopie"
            src={require(`../public/imagenes/img/puertopirata-atril-2.jpg`)}
            alt="imagen7"
            loading="lazy"
          />
          <img
            className="tamañopie"
            src={require(`../public/imagenes/img/puertopirata-atril-1-2.jpg`)}
            alt="imagen8"
            loading="lazy"
          />
          <img
            className="tamañopie"
            src={require(`../public/imagenes/img/puertopirata-atril-2-2.jpg`)}
            alt="imagen9"
            loading="lazy"
          />
        </div>
      </div>

      <Fotter />
      <Outlet />
    </div>
  );
};

export default PuertoPirata;
