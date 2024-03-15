import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import './assets/estiloRespuesta.css'; // Asegúrate de que el camino al CSS sea correcto

const Respuesta = () => {
  const navigate = useNavigate(); // Utiliza el hook useNavigate

  // Función para manejar el clic en los botones
  const handleClick = () => {
    navigate('/'); // Utiliza navigate para ir a la ruta de ImageComponent
  };

  return (
    <div>
      <h2>¿Se parecen?</h2>
      {/* Añade el manejador de clics a cada botón */}
      <button className="button" onClick={handleClick}>Sí</button>
      <button className="button" onClick={handleClick}>No</button>
    </div>
  );
};

export default Respuesta;
