import React, { createContext, useState, useContext, useEffect } from 'react';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {
  const [combinacion, setCombinacion] = useState([]);
  const [historialCombinaciones, setHistorialCombinaciones] = useState([]);
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  const generarNuevaCombinacion = () => {
    let nuevaCombinacion;
    let combinacionesPosibles = [];

    // Genera todas las combinaciones posibles
    palabras5.forEach((palabra1) => {
      palabras5.forEach((palabra2) => {
        if (palabra1 !== palabra2) {
          palabras3.forEach((palabra3) => {
            combinacionesPosibles.push([palabra1, palabra2, palabra3].sort());
          });
        }
      });
    });

    // Filtra las combinaciones que no han sido usadas aún
    combinacionesPosibles = combinacionesPosibles.filter((combinacion) =>
      !historialCombinaciones.find((usada) => JSON.stringify(usada) === JSON.stringify(combinacion))
    );

    if (combinacionesPosibles.length === 0) {
      alert("Todas las combinaciones posibles han sido generadas.");
      return;
    }

    // Elige una combinación al azar de las posibles
    nuevaCombinacion = combinacionesPosibles[Math.floor(Math.random() * combinacionesPosibles.length)];

    // Actualiza el estado con la nueva combinación y agrega al historial
    setCombinacion(nuevaCombinacion);
    setHistorialCombinaciones((prev) => [...prev, nuevaCombinacion]);
  };

  // Genera una combinación inicial
  useEffect(() => {
    generarNuevaCombinacion();
  }, []);

  return (
    <CombinacionContext.Provider value={{ combinacion, generarNuevaCombinacion }}>
      {children}
    </CombinacionContext.Provider>
  );
};
