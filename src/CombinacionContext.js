import React, { createContext, useState, useContext, useEffect } from 'react';
import Papa from 'papaparse';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [ID, setID] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [visionImpediment, setVisionImpediment] = useState('');
  const [parsedData, setParsedData] = useState([]);

  // Function to generate new combination
  const generarNuevaCombinacion = () => {
    // Implementation of generating a new combination
  };

  // Function to check if all combinations are generated
  const isAllCombinationsGenerated = () => {
    // Check if currentPosition is less than the length of parsedData
    if (currentPosition < parsedData.length) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    // Read CSV file when the component mounts
    const fetchData = async () => {
      const response = await fetch('/assets/cambinaciones.csv'); 
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parsedCSV = Papa.parse(csv).data;
      setParsedData(parsedCSV);
      if (currentPosition < parsedCSV.length) {
        const currentRow = parsedCSV[currentPosition];
        setData(currentRow);
      }
    };

    fetchData();
  }, [currentPosition]);

  // Return the context provider with the values
  return (
    <CombinacionContext.Provider value={{ data, setCurrentPosition, ID, setID, gender, setGender, age, setAge, visionImpediment, setVisionImpediment, generarNuevaCombinacion, isAllCombinationsGenerated }}>
      {children}
    </CombinacionContext.Provider>
  );
};
