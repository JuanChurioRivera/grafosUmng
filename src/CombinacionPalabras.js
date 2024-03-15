import React, { useEffect } from 'react';
import { useCombinacion } from './CombinacionContext'; // Asegúrate de tener este archivo y contexto definidos

function CombinacionPalabras() {
  // Palabras disponibles para selección
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  // Utiliza el hook useCombinacion para establecer la combinación en el contexto
  const { setCombinacion } = useCombinacion();

  useEffect(() => {
    // Función para generar la combinación aleatoria
    const generarCombinacionAleatoria = () => {
      // Seleccionar aleatoriamente dos palabras del primer grupo
      const seleccion1 = palabras5[Math.floor(Math.random() * palabras5.length)];
      const seleccion2 = palabras5[Math.floor(Math.random() * palabras5.length)];

      // Seleccionar aleatoriamente una palabra del segundo grupo
      const seleccion3 = palabras3[Math.floor(Math.random() * palabras3.length)];

      // Establecer la combinación en el contexto para que otros componentes puedan acceder a ella
      setCombinacion([seleccion1, seleccion2, seleccion3]);
    };

    generarCombinacionAleatoria();
  }, [setCombinacion]); // Agrega setCombinacion a la lista de dependencias para seguir las mejores prácticas

  // Este componente no necesita mostrar nada por sí mismo ahora
  return null;
}

export default CombinacionPalabras;
