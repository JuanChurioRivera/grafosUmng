import React from 'react';
import image1 from './assets/banda.png';
import image2 from './assets/altos.png';
import RedirectWithDelay from './Delay';
import './assets/style.css'; // Importar el CSS aquí

const ImageComponent = () => {
  return (
    <div className="image-container">
    
    
      <div className="image-wrapper">
        <img src={image1} alt="Gráfico sin filtro" />
        
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Gráfico con filtro Butterworth" />
        
      </div>

      <RedirectWithDelay to="/" delay={200} />
    </div>
  );
}

export default ImageComponent;
