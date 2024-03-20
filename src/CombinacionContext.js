import React, { createContext, useState, useContext, useEffect } from 'react';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {
  const [combinacion, setCombinacion] = useState([]);
  const [historialCombinaciones, setHistorialCombinaciones] = useState([]);
  const [setsCompletados, setSetsCompletados] = useState(0); // Track completed sets
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  const esCombinacionValida = (combinacion) => {
    const [palabra1, palabra2, palabra3] = combinacion;
    return palabras5.includes(palabra1) && palabras5.includes(palabra2) && palabras3.includes(palabra3);
  };

  const generarNuevaCombinacion = () => {
    if (setsCompletados >= 10) { // Stop after 10 sets
      alert("Se han completado 10 sets de combinaciones.");
      return;
    }

    let combinacionesPosibles = [];

    // Generate all possible combinations
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

    // Filter out used combinations
    combinacionesPosibles = combinacionesPosibles.filter((combinacion) =>
      !historialCombinaciones.find((usada) => JSON.stringify(usada) === JSON.stringify(combinacion))
    );

    if (combinacionesPosibles.length === 0) {
      setHistorialCombinaciones([]); // Reset historialCombinaciones
      setSetsCompletados(setsCompletados + 1); // Increment setsCompletados
      if (setsCompletados < 9) { // Check before regenerating
        generarNuevaCombinacion(); // Regenerate combinations for the new set
      } else {
        alert("Todas las combinaciones de 10 sets han sido generadas.");
      }
      return;
    }

    // Choose a random combination from the remaining
    let nuevaCombinacion = combinacionesPosibles[Math.floor(Math.random() * combinacionesPosibles.length)];

    // Update the state with the new combination and add it to the history
    setCombinacion(nuevaCombinacion);
    setHistorialCombinaciones((prev) => [...prev, nuevaCombinacion]);
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
