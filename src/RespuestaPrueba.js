
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCombinacionTest } from './CombinacionPrueba';// Make sure to import correctly
import './assets/estiloRespuesta.css';

const RespuestaPrueba = () => {

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
  } = useCombinacionTest(); // Call hook once and destructure all needed values

  const [primeraPalabra, segundaPalabra, terceraPalabra] = data;
  console.log(data)
  console.log(isAllCombinationsGenerated)
  console.log(currentPosition)

  var ControlVar = 0;
  var Error = 1;
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (180 <= currentPosition) {
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
    
    
    setCurrentPosition(currentPosition + 1);
    navigate('/ImagePrueba');
  };


  const handleNoClick = async () => {
    
    setCurrentPosition(currentPosition + 1);
    navigate('/ImagePrueba');
  };

  return (
    <div>
      <h2>¿Son iguales?</h2>
      <button className="button" onClick={handleYesClick}>Sí</button>
      <button className="button" onClick={handleNoClick}>No</button>
    </div>
  );
};

export default RespuestaPrueba;
