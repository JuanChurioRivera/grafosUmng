import React from 'react';
import image1 from './assets/banda.png';
import image2 from './assets/altos.png';
import './assets/style.css'; // Importar el CSS aquí

const ImageComponent = () => {
  return (
    
    <div className="image-container">
    <h1>Se parecen?</h1>
      <div className="image-wrapper">
        <img src={image1} alt="Gráfico sin filtro" />
        <p>sin</p>
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Gráfico con filtro Butterworth" />
        <p>butterworth</p>
      </div>
    </div>
  );
}

export default ImageComponent;
