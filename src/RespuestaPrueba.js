
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCombinacion } from './CombinacionContext';
// Make sure to import correctly


const RespuestaPrueba = () => {

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = 'upgrade-insecure-requests';
    document.head.appendChild(meta);
  }, []);

  const navigate = useNavigate();
  const {
    
    setCurrentPositionPRUEBA,
    dataPRUEBA,
    isAllCombinationsGenerated,
    currentPositionPRUEBA // Destructure currentPosition from the context
  } = useCombinacion(); // Call hook once and destructure all needed values

  console.log(currentPositionPRUEBA)
  console.log(dataPRUEBA)

  useEffect(() => {
    if (10 <= currentPositionPRUEBA) {
      navigate('/EndPrueba'); // Navigate to the new component when all combinations are generated
    }
  }, [currentPositionPRUEBA, navigate]);

  

  

  const handleYesClick = async () => {
    
    
    setCurrentPositionPRUEBA(currentPositionPRUEBA + 1);
    navigate('/ImagePrueba');
  };


  const handleNoClick = async () => {
    
    setCurrentPositionPRUEBA(currentPositionPRUEBA + 1);
    navigate('/ImagePrueba');
  };

  return (
    <div>
      <h2>¿Son iguales?</h2>
      <button  onClick={handleYesClick}>Sí</button>
      <button  onClick={handleNoClick}>No</button>
    </div>
  );
};

export default RespuestaPrueba;
