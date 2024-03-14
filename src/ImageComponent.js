import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './assets/style.css';

// Importaciones estáticas para que Webpack pueda encontrar y empaquetar las imágenes
import banda from './assets/banda.png';
import altos from './assets/altos.png';

const ImageComponent = () => {
  
  
  



  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={banda} alt="Gráfico sin filtro" />
        <p></p>
      </div>
      <div className="image-wrapper">
        <img src={altos} alt="Gráfico con filtro Butterworth" />
        <p>butterworth</p>
      </div>
    </div>
  );
};

export default ImageComponent;
