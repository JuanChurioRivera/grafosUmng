import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImageComponent = () => {
  const navigate = useNavigate();
  const { combinacion } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = combinacion;

  // Calcula las rutas de las imágenes en la carpeta public
  let imagePath1, imagePath2;
  if (primeraPalabra && segundaPalabra && terceraPalabra) {
    imagePath1 = `${process.env.PUBLIC_URL}/assets/${primeraPalabra}_${terceraPalabra}.jpg`;
    imagePath2 = `${process.env.PUBLIC_URL}/assets/${segundaPalabra}_${terceraPalabra}.jpg`;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/respuesta');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="image-container">
      <div className="image-wrapper">
        {imagePath1 && <img src={imagePath1} alt="Gráfico 1" />}
        
      </div>
      <div className="image-wrapper">
        {imagePath2 && <img src={imagePath2} alt="Gráfico 2" />}
        
      </div>
    </div>
  );
};

export default ImageComponent;
