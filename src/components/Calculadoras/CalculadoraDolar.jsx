import { useEffect, useState, React } from "react";
import "./CalculadoraDolar.css";

function Calculadora({image, alt}) {
  const [precioDolar, setPrecioDolar] = useState(0);
  const [precioFinal, setPrecioFinal] = useState(0);
  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/oficial")
      .then((response) => response.json())
      .then((data) => setPrecioDolar(data.venta));
  }, []);
  const handleInput = (e) => {
    setPrecioFinal(e.target.value * (precioDolar * 2));
  };
  return (
    <div className="calculadora-container">
      <div className="calculadora-image-container">
        <img className="calculadora-image" src={image} alt={alt} />
      </div>
      <div className="calculadora-text">
        <input className="calculadora-input" type="number" onChange={handleInput} placeholder="0.00 USD" />
        <p>Precio Final</p>
        <p>{precioFinal}</p>
      </div>
    </div>
  );
}

export default Calculadora;
