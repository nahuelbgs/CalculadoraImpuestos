import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <h1 className="banner-title">Calculadora de impuestos</h1>
        <p className="banner-description">
          Obtén el costo final de los videojuegos de manera rápida y sencilla utilizando nuestra
          calculadora de impuestos.
        </p>
      </div>
      <div className="banner-image-container">
        <img
          className="banner-image"
          src="https://i.imgur.com/FVvzB5E.png"
          alt="Spiderman"
        />
      </div>
    </div>
  );
}

export default Banner;
