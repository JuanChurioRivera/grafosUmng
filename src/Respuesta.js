import axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext'; // Asegúrate de importar correctamente
import './assets/estiloRespuesta.css';

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

      if(ControlVar === 1) {
        Error = 0
      }
      const rowData = {
        CONDITION_A: primeraPalabra,
        CONDITION_B: segundaPalabra,
        GRAPH: terceraPalabra,
        timeTaken: 200, // this should be a number
        Error: Error, // this should be a number indicating if there was an error
        controlCondition: ControlVar,
        timePer: timeSpent // this should be a number
      };
      console.log("wtf")
      const response = await axios.post('experimentdeploy.azurewebsites.net/insertRows', rowData);
      console.log(response.data);

      
    } catch (error) {
      console.error('POST method fail', error);
    }
    generarNuevaCombinacion();
    navigate('/');
  };

  const handleNoClick = async () => {
    
    console.log("wtf")

    try {
      const timeSpent = new Date().getTime() - startTime;
      const rowData = {
        CONDITION_A: primeraPalabra,
        CONDITION_B: segundaPalabra,
        GRAPH: terceraPalabra,
        timeTaken: 200, // this should be a number
        Error: Error, // this should be a number indicating if there was an error
        controlCondition: ControlVar,
        timePer: timeSpent // this should be a number
      };
      const response = await axios.post('experimentdeploy.azurewebsites.net/insertRows', rowData);


      console.log(response.data);
    } catch (error) {
      console.error('POST method fail', error);
    }
    generarNuevaCombinacion();
    navigate('/');
  };

  return (
    <div>
      <h2>¿Se parecen?</h2>
      <button className="button" onClick={handleYesClick}>Sí</button>
      <button className="button" onClick={handleNoClick}>No</button>
    </div>
  );
};

export default Respuesta;
