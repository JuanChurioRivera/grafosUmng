import React, { createContext, useState, useContext, useEffect } from 'react';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {
  const [combinacion, setCombinacion] = useState([]);
  const [historialCombinaciones, setHistorialCombinaciones] = useState([]);
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  const esCombinacionValida = (combinacion) => {
    // Verifica si la combinación cumple con los requisitos
    const [palabra1, palabra2, palabra3] = combinacion;
    return palabras5.includes(palabra1) && palabras5.includes(palabra2) && palabras3.includes(palabra3);
  };

  const generarNuevaCombinacion = () => {
    let nuevaCombinacion;
    let combinacionesPosibles = [];
    var setCombinacion = 0;
    // Genera todas las combinaciones posibles
    palabras5.forEach((palabra1) => {
      palabras5.forEach((palabra2) => {
        palabras3.forEach((palabra3) => {
          let posibleCombinacion = [palabra1, palabra2, palabra3].sort();
          if (esCombinacionValida(posibleCombinacion)) {
            combinacionesPosibles.push(posibleCombinacion);
          }
        });
      });
    });

    // Elimina las combinaciones ya utilizadas
    combinacionesPosibles = combinacionesPosibles.filter((combinacion) =>
      !historialCombinaciones.find((usada) => JSON.stringify(usada) === JSON.stringify(combinacion))
    );

    if (combinacionesPosibles.length === 0) {
      setCombinacion+=1;
      combinacionesPosibles.length = 0;
      return;
    }

    if(setCombinacion >= 10  && combinacionesPosibles.length === 0){

    // Elige una combinación al azar de las posibles
    alert("YA TERMINO PORFAVOR NO HAGA NADA MÁS")
    }
  };

  useEffect(() => {
    generarNuevaCombinacion();
  }, []);

  return (
    <CombinacionContext.Provider value={{ combinacion, generarNuevaCombinacion }}>
      {children}
    </CombinacionContext.Provider>
  );
};
