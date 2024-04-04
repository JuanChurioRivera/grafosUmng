import React, { createContext, useState, useContext, useEffect } from 'react';
import Papa from 'papaparse';
import './assets/estiloRespuesta.css';

// Create a context object
const CombinacionPrueba = createContext();

export const useCombinacionTest = () => useContext(CombinacionPrueba);

export const CombinacionProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    // Read CSV file when the component mounts
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/assets/prueba.csv`);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parsedCSV = Papa.parse(csv).data;
      setData(parsedCSV);
    };

    fetchData();
  }, []);

  // Return the context provider with the values
  return (
    <CombinacionPrueba.Provider value={{ data, currentPosition, setCurrentPosition }}>
      {children}
    </CombinacionPrueba.Provider>
  );
};

export default CombinacionPrueba;
