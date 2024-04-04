import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImagePrueba = () => {
  const navigate = useNavigate();
  const { dataPRUEBA } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = dataPRUEBA;
  const [imagesLoaded, setImagesLoaded] = useState(false); // State to track image loading

  // Calcula las rutas de las imágenes en la carpeta public
  let imagePath1, imagePath2;
  if (primeraPalabra && segundaPalabra && terceraPalabra) {
    imagePath1 = `${process.env.PUBLIC_URL}/assets/${primeraPalabra}_${terceraPalabra}.jpg`;
    imagePath2 = `${process.env.PUBLIC_URL}/assets/${segundaPalabra}_${terceraPalabra}.jpg`;
  }

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        navigate('/RespuestaPrueba');
      }, 200);
  
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, navigate]);

  return (
    <div className="image-container">
      <div className="image-wrapper">
        {imagePath1 && (
          <img
            src={imagePath1}
            alt="Gráfico 1"
            onLoad={() => setImagesLoaded(true)} // Set imagesLoaded to true when image is loaded
          />
        )}
      </div>
      <div className="image-wrapper">
        {imagePath2 && (
          <img
            src={imagePath2}
            alt="Gráfico 2"
            onLoad={() => setImagesLoaded(true)} // Set imagesLoaded to true when image is loaded
          />
        )}
      </div>
    </div>
  );
};

export default ImagePrueba;
