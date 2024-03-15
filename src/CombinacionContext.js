import React, { createContext, useState, useContext } from 'react';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {
  const [combinacion, setCombinacion] = useState([]);

  return (
    <CombinacionContext.Provider value={{ combinacion, setCombinacion }}>
      {children}
    </CombinacionContext.Provider>
  );
};
