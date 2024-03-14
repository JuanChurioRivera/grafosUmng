import React from 'react';
import image1 from './assets/banda.png';
import image2 from './assets/altos.png';
import './assets/style.css'; // Importar el CSS aquí

const ImageComponent = () => {
  return (
    <div className="image-container">
      <h1>¿Se parecen?</h1> {/* Encabezado agregado */}
      <div className="image-wrapper">
        <img src={image1} alt="Imagen 1" />
        <p>cambio</p>
      </div>
      <div className="image-wrapper">
        <img src={image2} alt="Imagen 2" />
        <p>Nombre de la imagen 2</p>
      </div>
    </div>
  );
}

export default ImageComponent;
