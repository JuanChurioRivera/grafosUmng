import React, { createContext, useState, useContext, useEffect } from 'react';
import Papa from 'papaparse';

const CombinacionContext = createContext();

export const useCombinacion = () => useContext(CombinacionContext);

export const CombinacionProvider = ({ children }) => {

  const [dataPRUEBA, setDataPRUEBA] = useState([]);
  const [currentPositionPRUEBA, setCurrentPositionPRUEBA] = useState(0);
  const [checkUpdate, setcheckUpdate] = useState([false]);
  const [checkUpdateR, setcheckUpdateR] = useState([false]);
  const [data, setData] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [ID, setID] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [visionImpediment, setVisionImpediment] = useState('');
  const [parsedData, setParsedData] = useState([]);

  

  // Function to check if all combinations are generated
 

  useEffect(() => {
    // Read CSV file when the component mounts
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/assets/cambinaciones.csv`);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parsedCSV = Papa.parse(csv).data;
      setParsedData(parsedCSV);
      if (currentPosition < parsedCSV.length) {
        const currentRow = parsedCSV[currentPosition];
        setData(currentRow);
        setcheckUpdateR(true);
      }
    };

    

    fetchData();
    
  }, [currentPosition]);

  useEffect(() => {
    // Read CSV file when the component mounts
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/assets/cambinaciones.csv`);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parsedCSV = Papa.parse(csv).data;
      setParsedData(parsedCSV);
      if (currentPosition < parsedCSV.length) {
        const currentRow = parsedCSV[currentPositionPRUEBA];
        setDataPRUEBA(currentRow);
        setcheckUpdate(true);
      }
    };

    

    fetchData();
    
  }, [currentPositionPRUEBA]);
    

  // Return the context provider with the values
  return (
    <CombinacionContext.Provider value={{ checkUpdateR,setcheckUpdateR,checkUpdate,setcheckUpdate,currentPositionPRUEBA,setCurrentPositionPRUEBA,dataPRUEBA,setCurrentPosition,parsedData,data,currentPosition,setAge,age,setID,ID,setGender,gender,visionImpediment,setVisionImpediment }}>
      {children}
    </CombinacionContext.Provider>
  );
};
