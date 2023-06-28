import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main className="cuerpo">
        <div className="app-container">
          <main className="main" role="main">
            <div className="container">
              <header className="text-center">
                <h1 className="tituloExpo">Expo</h1>
                <h2>
                  {" "}
                  Carlos Vidal Dominguez
                  <br />
                  Cerro Castor 2023
                </h2>
                <br />
                <div className="row">
                  <div className="abs-center">
                    <p id="copete" align="center">
                      Esta es una selección de obras realizadas entre noviembre
                      2022 y junio 2023 en Tierra del Fuego (en Puerto Almanza y
                      en el Cerro Castor). Gran parte de estas obras estarán
                      expuestas durante el invierno de 2023 en el Cerro Castor
                      (en Hall de recepción, en el restaurante Morada del águila
                      y en algunas cabañas de La Base).
                      <br /> Todas las obras están a la venta, para adquirirlas
                      contactar directamente al artista.
                    </p>
                  </div>
                </div>
              </header>
            </div>
          </main>
        </div>
      </main>
    );
  }
}
