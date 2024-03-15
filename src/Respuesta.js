import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext'; // Asegúrate de importar correctamente
import './assets/estiloRespuesta.css';

const Respuesta = () => {
  const navigate = useNavigate();
  const { generarNuevaCombinacion } = useCombinacion(); // Usa la nueva función para generar combinaciones

  const handleClick = () => {
    generarNuevaCombinacion(); // Genera una nueva combinación única al hacer clic
    navigate('/'); // Navega de regreso para ver la nueva combinación
  };

  return (
    <div>
      <h2>¿Se parecen?</h2>
      <button className="button" onClick={handleClick}>Sí</button>
      <button className="button" onClick={handleClick}>No</button>
    </div>
  );
};

export default Respuesta;
