import React, { createContext, useState, useContext, useEffect } from 'react';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {
  const [combinacion, setCombinacion] = useState([]);
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  useEffect(() => {
    const generarCombinacionAleatoria = () => {
      const seleccion1 = palabras5[Math.floor(Math.random() * palabras5.length)];
      const seleccion2 = palabras5[Math.floor(Math.random() * palabras5.length)];
      const seleccion3 = palabras3[Math.floor(Math.random() * palabras3.length)];
      setCombinacion([seleccion1, seleccion2, seleccion3]);
    };

    generarCombinacionAleatoria();
  }, []); // Asegura que la combinación se genere al cargar la app

  return (
    <CombinacionContext.Provider value={{ combinacion, setCombinacion }}>
      {children}
    </CombinacionContext.Provider>
  );
};
