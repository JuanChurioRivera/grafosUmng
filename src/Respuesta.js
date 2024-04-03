import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext'; // Make sure to import correctly
import './assets/estiloRespuesta.css';

const Respuesta = () => {

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = 'upgrade-insecure-requests';
    document.head.appendChild(meta);
  }, []);

  const navigate = useNavigate();
  const {
    parsedData,
    setCurrentPosition,
    ID,
    age,
    gender,
    visionImpediment,
    data,
    isAllCombinationsGenerated,
    currentPosition // Destructure currentPosition from the context
  } = useCombinacion(); // Call hook once and destructure all needed values

  const [primeraPalabra, segundaPalabra, terceraPalabra] = data;
  console.log(data)
  console.log(isAllCombinationsGenerated)
  console.log(currentPosition)

  var ControlVar = 0;
  var Error = 1;
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (parsedData.lenght <= currentPosition) {
      navigate('/End'); // Navigate to the new component when all combinations are generated
    }
  }, [currentPosition, navigate]);

  if (primeraPalabra === segundaPalabra) {
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
        ID: ID,
        gender: gender,
        age: age,
        visionImpediment: visionImpediment,
        CONDITION_A: primeraPalabra,
        CONDITION_B: segundaPalabra,
        GRAPH: terceraPalabra,
        timeTaken: timeSpent,
        Error: Error,
        controlCondition: ControlVar,
        timePer: 1000
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

      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error(':(', error);
    }
    setCurrentPosition(currentPosition + 1);
    navigate('/Image');
  };


  const handleNoClick = async () => {
    try {
      const timeSpent = new Date().getTime() - startTime;

      if (ControlVar === 0) {
        Error = 0;
      }
      const rowData = {
        ID: ID,
        gender: gender,
        age: age,
        visionImpediment: visionImpediment,
        CONDITION_A: primeraPalabra,
        CONDITION_B: segundaPalabra,
        GRAPH: terceraPalabra,
        timeTaken: timeSpent,
        Error: Error,
        controlCondition: ControlVar,
        timePer: 1000
      };

      const response = await fetch('https://experimentdeploy.azurewebsites.net/insertRows', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Host': 'experimentdeploy.azurewebsites.net'
        },
        body: JSON.stringify(rowData)
      });


      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error(':(', error);
    }
    setCurrentPosition(currentPosition + 1);
    navigate('/Image');
  };

  return (
    <div>
      <h2>¿Son iguales?</h2>
      <button className="button" onClick={handleYesClick}>Sí</button>
      <button className="button" onClick={handleNoClick}>No</button>
    </div>
  );
};

export default Respuesta;
