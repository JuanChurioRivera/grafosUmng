import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import image1 from './assets/banda.png';
import image2 from './assets/altos.png';
import './assets/style.css';

const ImageComponent = () => {
  const navigate = useNavigate(); // Hook para navegar

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/respuesta'); // Ruta a la que quieres redirigir
    }, 200);

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, [navigate]); // Dependencias del efecto

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={image1} alt="Gráfico sin filtro" />
        <p>shim</p>
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Gráfico con filtro Butterworth" />
        <p>butterworth</p>
      </div>
    </div>
  );
};

export default ImageComponent;
