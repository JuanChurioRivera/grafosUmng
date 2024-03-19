
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext'; // Asegúrate de importar correctamente
import './assets/estiloRespuesta.css';
import { Helmet } from 'react-helmet';

const Respuesta = () => {
  const navigate = useNavigate();
  const { combinacion } = useCombinacion();
  const [primeraPalabra, segundaPalabra, terceraPalabra] = combinacion;
  const { generarNuevaCombinacion } = useCombinacion(); // Usa la nueva función para generar combinaciones
  var ControlVar = 0;
  var Error = 1;
  const [startTime, setStartTime] = useState(null);
  if(primeraPalabra == segundaPalabra){
    ControlVar = 1;
  }

  useEffect(() => {
    setStartTime(new Date().getTime()); // Set the start time to the current time
  }, []);



  const handleYesClick = async () => {
    try {
      const timeSpent = new Date().getTime() - startTime;
    
      if (ControlVar === 1) {
        Error = 0;
      }
      const rowData = {
        CONDITION_A: primeraPalabra,
        CONDITION_B: segundaPalabra,
        GRAPH: terceraPalabra,
        timeTaken: timeSpent,
        Error: Error,
        controlCondition: ControlVar,
        timePer: timeSpent
      };
      
      const response = await fetch('https://experimentdeploy.azurewebsites.net/insertRows', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rowData)
      });
  
      if (!response.ok) {
        throw new TypeError('Network response was not ok.');
      }
      
      // Check the response type before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      
      const data = await response.json();
      console.log(data);
    
    } catch (error) {
      console.error(':(', error);
    }
    generarNuevaCombinacion();
    navigate('/');
  };
  

  const handleNoClick = async () => {
    try {
      const timeSpent = new Date().getTime() - startTime;
  
      
      const rowData = {
        CONDITION_A: primeraPalabra,
        CONDITION_B: segundaPalabra,
        GRAPH: terceraPalabra,
        timeTaken: timeSpent, // make sure this is a number
        Error: Error, // this should be a number indicating if there was an error
        controlCondition: ControlVar,
        timePer: timeSpent // this should be a number
      };
      
      const response = await fetch('https://experimentdeploy.azurewebsites.net/insertRows', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Host': 'experimentdeploy.azurewebsites.net'
          },
          body: JSON.stringify(rowData)
      });
  
  
      const data = await response.json();
      console.log(data);
  
    } catch (error) {
      console.error(':(', error);
    }
    generarNuevaCombinacion();
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Helmet>
      <div>
        <h2>¿Se parecen?</h2>
        <button className="button" onClick={handleYesClick}>Sí</button>
        <button className="button" onClick={handleNoClick}>No</button>
      </div>
    </>
  );
};

export default Respuesta;
