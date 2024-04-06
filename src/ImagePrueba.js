import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImagePrueba = () => {
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();
  const { dataPRUEBA } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = dataPRUEBA;
  const [imagesLoaded, setImagesLoaded] = useState(false); // State to track image loading

  useEffect(() => {
    const images = [];

    const pngFileNames = ['BBB _GV.jpg', 'BBB _GVH.jpg', 'BBB _SIGNAL.jpg','CARDIOMYOPATHY_GV.jpg','CARDIOMYOPATHY_GVH.jpg','CARDIOMYOPATHY_SIGNAL.jpg','CONTROL_GV.jpg','CONTROL_GVH.jpg','CONTROL_SIGNAL.jpg','DISRHYTMIA_GV.jpg','DISRHYTMIA_GVH.jpg','DISRHYTMIA_SIGNAL.jpg','MYOCARDIAL INFARCTION _GV.jpg','MYOCARDIAL INFARCTION _GVH.jpg','MYOCARDIAL INFARCTION _SIGNAL.jpg'];

    
    // Get all PNG files in the assets folder
    pngFileNames.forEach((fileName) => {
      const imagePath = `${process.env.PUBLIC_URL}/assets/${fileName}`;
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
        navigate('/RespuestaPrueba');
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

export default ImagePrueba;
