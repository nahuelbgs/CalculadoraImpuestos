import React from 'react'
import "./ComoSeCalcula.css";
function ComoSeCalcula() {

  return (
    <div className="csc-container">
      <h1 className='csc-title'>¿Cómo se calcula el precio final?</h1>
      <p className='csc-description'>
        El precio final se determina al tomar el valor oficial del dólar (o el peso en caso de que no este dolarizado) y luego se le añaden los siguientes impuestos:
      </p>
      <ul className='csc-list'>
        <li>Percepción de Ganancias <strong>45%</strong></li>
        <li>Ley Impuesto PAIS <strong>30%</strong></li>
        <li>Percepción de Bienes Personales <strong>25%</strong></li>
      </ul>
    </div>
  );
}

export default ComoSeCalcula;
