import React from "react";
import "./ListaDeCalculadoras.css";
import CalculadoraDolar from "../Calculadoras/CalculadoraDolar";
import CalculadoraPesos from "../Calculadoras/CalculadoraPesos";

function ListaDeCalculadoras() {
  return (
    <div className="ldc-container">
      <CalculadoraDolar image="https://i.imgur.com/uPCDrrm.png" alt='Steam' />
      <CalculadoraDolar image='https://i.imgur.com/BiO8Zaz.png' alt='EA'/>
      <CalculadoraPesos image='https://i.imgur.com/qaSmAgx.png' alt='XBOX'/>
      <CalculadoraDolar image='https://i.imgur.com/VIRwQrl.png' alt='Playstation'/>
    </div>
  );
}

export default ListaDeCalculadoras;
