import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import image1 from './assets/banda.png';
import image2 from './assets/altos.png';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImageComponent = () => {
  const navigate = useNavigate(); // Hook para navegar
  const { combinacion } = useCombinacion(); // Usa el hook para obtener la combinación

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/respuesta'); // Ruta a la que quieres redirigir
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, [navigate]); // Dependencias del efecto

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={image1} alt="Gráfico sin filtro" />
        <p>Combinación: {combinacion.join(', ')}</p>
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Gráfico con filtro Butterworth" />
        <p>butterworth</p>
      </div>
    </div>
  );
};

export default ImageComponent;
