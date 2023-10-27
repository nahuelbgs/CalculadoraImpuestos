import { useState, React } from "react";

function CalculadoraPesos({ image, alt }) {
  const [precioFinal, setPrecioFinal] = useState(0);
  const handleInput = (e) => {
    setPrecioFinal(e.target.value * 2);
  };
  return (
    <div className="calculadora-container">
      <div className="calculadora-image-container">
        <img className="calculadora-image" src={image} alt={alt} />
      </div>
      <div className="calculadora-text">
        <input
          className="calculadora-input"
          type="number"
          onChange={handleInput}
          placeholder="0.00 ARS"
        />
        <p>Precio Final</p>
        <p>{precioFinal}</p>
      </div>
    </div>
  );
}

export default CalculadoraPesos;
