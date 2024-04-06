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

  useEffect(() => {
    const images = [];
    
    // Require all PNG files from the assets folder
    const requireImages = require.context(`${process.env.PUBLIC_URL}/assets`, false, /\.png$/);
    
    // Loop through each required image and preload it
    requireImages.keys().forEach((imageName) => {
      const imagePath = requireImages(imageName).default;
      const img = new Image();
      img.src = imagePath;
      images.push(imagePath); // Store the image path in the images array
    });
  }, []);

  


  // Calcula las rutas de las imágenes en la carpeta public
  let imagePath1, imagePath2;
  if (primeraPalabra && segundaPalabra && terceraPalabra) {
    imagePath1 = `${process.env.PUBLIC_URL}/assets/${primeraPalabra}_${terceraPalabra}.jpg`;
    imagePath2 = `${process.env.PUBLIC_URL}/assets/${segundaPalabra}_${terceraPalabra}.jpg`;
  }

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setShowImage(false);
        navigate('/respuesta');
      }, 200);
  
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, navigate]);

  return (
    <div className="image-container">
      <div className="image-wrapper">
      {showImage && (
        <img
          src={imagePath1}
          alt="Gráfico 2"
          onLoad={() => setImagesLoaded(true)}
          />
        )}
      </div>
      <div className="image-wrapper">
        {showImage && (
          <img
            src={imagePath2}
            alt="Gráfico 2"
            onLoad={() => setImagesLoaded(true)}
          // Set imagesLoaded to true when image is loaded
            />
        )}
      </div>
    </div>
  );
};

export default ImageComponent;
