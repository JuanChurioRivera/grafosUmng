import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext';
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
        <h3>Se ha terminado el entrenamiento. ¿Se siente preparado para hacer la prueba?. En caso de que lo desee puede hacer una vez más el entrenamiento. La prueba durará aproximadamente cinco (5) minutos. Por favor, pongase comodo. ¿Esta listo para iniciar?</h3>
        <button className="button" onClick={handleYesClick}>Volver a entranamiento</button>
      <button className="button" onClick={handleNoClick}>Empezar</button>
    </div>
);

}

export default EndPrueba;