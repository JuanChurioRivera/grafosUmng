import React from 'react';
import image1 from './assets/banda.png';
import image2 from './assets/altos.png';

const ImageComponent = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={image1} alt="Image 1" />
        <p>Nombre de la imagen 1</p>
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Image 2" />
        <p>Nombre de la imagen 2.</p>
      </div>
    </div>
  );
}

export default ImageComponent;