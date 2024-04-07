import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext';
import './assets/estiloRespuesta.css';

const AntesPrueba = () => {
    const {setCurrentPositionPRUEBA} = useCombinacion(); 
    const navigate = useNavigate();

    const handleYesClick = async () => {
    
    
        
        navigate('/ImagePrueba');
      };
    
    
      
return(
    <div>
        <h1>ENTRENAMIENTO</h1>
        <h3>Vamos a hacer una  prueba de entrenamiento para verificar que se entendió la tareas a realizar y pueda adaptarse a la velocidad en que las gráficas son presentadas. Este entrenamiento se puede realizar cuantas veces lo crea necesario. </h3>
        <button className="button" onClick={handleYesClick}>Empezar entranamiento</button>
      
    </div>
);

}

export default AntesPrueba;