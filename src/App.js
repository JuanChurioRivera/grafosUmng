import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';

// Función generateCombinations() aquí (sin cambios)

function App() {
  // Estado para mantener las combinaciones restantes y la actual
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ImageComponent combination={currentCombination} />} />
          <Route path="/respuesta" element={<Respuesta onDecisionMade={selectNewCombination} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
