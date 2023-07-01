import React from 'react'

import { Outlet,Link } from "react-router-dom";
import Cuerpo2 from "./Cuerpo2";
import Navbar from './Navbar';
import { Fotter } from './Fotter';



const Castor021 = () => {
  return (
    <div>
      <Navbar />
      <Cuerpo2
        ruta="/castor0211"
        foto="Castor02-1"
        titulo="Castor 02"
        tecnica="Oleo Sobre Tela"
        medidas="25cm X 17,5"
        precio="u$d 350"
        im1="Castor02-1"
        im2="Castor02-2"
        im3="Castor02-3"
        im4="Castor02-4"
        im5="Castor02-5"
        im6="Castor02-atril-1"
        im7="Castor02-atril-2"
      />
      <Fotter />
      <Outlet />
    </div>
  );
}

export default Castor021
