import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/estiloRespuesta.css'; // Asegúrate de que el camino al CSS sea correcto

const Respuesta = ({ onDecisionMade }) => {
  let navigate = useNavigate();

  // Función para manejar el clic en los botones
  const handleClick = () => {
    if(onDecisionMade) {
      onDecisionMade(); // Asegura que onDecisionMade se invoca para actualizar la combinación
    }
    navigate('/'); // Navega de vuelta a ImageComponent
  };

  return (
    <div>
      <h2>porfi</h2>
      {/* Añade el manejador de clics a cada botón */}
      <button className="button" onClick={handleClick}>Sí</button>
      <button className="button" onClick={handleClick}>No</button>
    </div>
  );
};

export default Respuesta;
