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

  const load = function(){
    fetch( './public/assets/cambinaciones.csv' )
        .then( response => response.text() )
        .then( responseText => {
            setText( responseText );
  })
};

  const generarNuevaCombinacion = () => {
    // Código para generar una nueva combinación
  };

  const isAllCombinationsGenerated = () => {
    if (currentPosition < parsedData.length) {
      return false
    }else{
      return true
    }
  };

  useEffect(() => {
    // Lee el archivo CSV al inicializar el contexto
    const fetchData = async () => {
      const response = await fetch('/public/assets/cambinaciones.csv'); 
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parsedData = Papa.parse(csv).data;
      if (currentPosition < parsedData.length) {
        const currentRow = parsedData[currentPosition];
        setData(currentRow);
        // Incrementa la posición
      }
    };

    fetchData();
  }, [currentPosition]);

  return (
    <CombinacionContext.Provider value={{ currentRow,data,setCurrentPosition, ID, setID, gender, setGender, age, setAge, visionImpediment, setVisionImpediment, generarNuevaCombinacion, isAllCombinationsGenerated }}>
      {children}
    </CombinacionContext.Provider>
  );
};
