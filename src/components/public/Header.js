import React from "react";
import FotoFinal from "./imagenes/img/FotoFinal.jpg";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="encabezado">
        <img src={FotoFinal} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default Header;
