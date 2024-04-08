import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImageComponent = () => {
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();
  const { data } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  

  


  // Calcula las rutas de las imágenes en la carpeta public
  let imagePath1, imagePath2;
  if (primeraPalabra && segundaPalabra && terceraPalabra) {
    imagePath1 = `${process.env.PUBLIC_URL}/assets/${primeraPalabra}_${terceraPalabra}.jpg`;
    imagePath2 = `${process.env.PUBLIC_URL}/assets/${segundaPalabra}_${terceraPalabra}.jpg`;
  }

  const navigateAfterDelay = () => {
    setTimeout(() => {
      navigate('/respuesta');
    }, 200);
  };

  useEffect(() => {
    if (primeraPalabra && segundaPalabra && terceraPalabra) {
      const imagePath1 = `${process.env.PUBLIC_URL}/assets/${primeraPalabra}_${terceraPalabra}.jpg`;
      const imagePath2 = `${process.env.PUBLIC_URL}/assets/${segundaPalabra}_${terceraPalabra}.jpg`;

      const img1 = new Image();
      const img2 = new Image();

      img1.onload = () => {
        img2.onload = () => {
          navigateAfterDelay();
        };
        img2.src = imagePath2;
      };

      img1.src = imagePath1;
    }
  }, [primeraPalabra, segundaPalabra, terceraPalabra, navigateAfterDelay]);

  return (
    <div className="image-container">
      {showImage && (
        <>
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/assets/${primeraPalabra}_${terceraPalabra}.jpg`} alt="Gráfico 1" />
          </div>
          <div className="image-wrapper">
            <img src={`${process.env.PUBLIC_URL}/assets/${segundaPalabra}_${terceraPalabra}.jpg`} alt="Gráfico 2" />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageComponent;
