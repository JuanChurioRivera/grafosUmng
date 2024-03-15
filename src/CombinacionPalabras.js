import React, { useState, useEffect } from 'react';

function CombinacionPalabras() {
  // Palabras disponibles para selección
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  // Estado para manejar la combinación generada
  const [combinacion, setCombinacion] = useState([]);

  useEffect(() => {
    // Función para generar la combinación aleatoria
    const generarCombinacionAleatoria = () => {
      // Seleccionar aleatoriamente dos palabras del primer grupo
      const seleccion1 = palabras5[Math.floor(Math.random() * palabras5.length)];
      const seleccion2 = palabras5[Math.floor(Math.random() * palabras5.length)];

      // Seleccionar aleatoriamente una palabra del segundo grupo
      const seleccion3 = palabras3[Math.floor(Math.random() * palabras3.length)];

      // Establecer la combinación en el estado
      setCombinacion([seleccion1, seleccion2, seleccion3]);
    };

    generarCombinacionAleatoria();
  }, []); // El arreglo vacío asegura que esto se ejecute solo una vez al cargar el componente

  return (
    <div>
      <h2>Combinación Aleatoria de Palabras</h2>
      {combinacion.length > 0 && (
        <p>Combinación generada: [{combinacion.join(', ')}]</p>
      )}
    </div>
  );
}

export default CombinacionPalabras;
