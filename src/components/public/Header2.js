import React from "react";
import FotoFinal from "./imagenes/img/FotoFinal.jpg";
import Navbar2 from "./Navbar";

const Header2 = () => {
  return (
    <div className="header">
      <Navbar2 />
      <div className="encabezado">
        <img src={FotoFinal} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default Header2;
