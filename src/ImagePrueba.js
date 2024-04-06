import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';
import { useCombinacion } from './CombinacionContext';

const ImagePrueba = () => {
  const [showImage, setShowImage] = useState(false); // Initially hide images
  const navigate = useNavigate();
  const { dataPRUEBA } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = dataPRUEBA;

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

    setShowImage(true); // Show images after preloading
  }, []);

  const navigateAfterDelay = () => {
    setTimeout(() => {
      navigate('/RespuestaPrueba');
    }, 1000);
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

export default ImagePrueba;
