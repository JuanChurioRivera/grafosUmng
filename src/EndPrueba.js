import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionPrueba';
import './assets/estiloRespuesta.css';

const EndPrueba = () => {
    const {setCurrentPositionPRUEBA} = useCombinacion(); 
    const navigate = useNavigate();

    const handleYesClick = async () => {
    
    
        setCurrentPositionPRUEBA(0);
        navigate('/ImagePrueba');
      };
    
    
      const handleNoClick = async () => {
        
        
        navigate('/Image');
      };
return(
    <div>
        <h1>FIN ENTRENAMIENTO</h1>
        <h3>Ha terminado el entranamiento</h3>
        <button className="button" onClick={handleYesClick}>Volver a entranamiento</button>
      <button className="button" onClick={handleNoClick}>Empezar</button>
    </div>
);

}

export default EndPrueba;