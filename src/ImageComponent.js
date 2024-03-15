import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImageComponent = () => {
  const navigate = useNavigate();
  const { combinacion } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = combinacion;

  // Construye los nombres de los archivos basado en las palabras de la combinación
  let imagePath1, imagePath2;
  if (primeraPalabra && segundaPalabra && terceraPalabra) {
    imagePath1 = require(`./assets/${primeraPalabra}_${terceraPalabra}.jpg`);
    imagePath2 = require(`./assets/${segundaPalabra}_${terceraPalabra}.jpg`);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/respuesta');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="image-container">
      <div className="image-wrapper">
        {imagePath1 && <img src={imagePath1.default} alt="Gráfico 1" />}
        <p>Combinación: {primeraPalabra}, {segundaPalabra}, {terceraPalabra}</p>
      </div>
      <div className="image-wrapper">
        {imagePath2 && <img src={imagePath2.default} alt="Gráfico 2" />}
        <p>butterworth</p>
      </div>
    </div>
  );
};

export default ImageComponent;
