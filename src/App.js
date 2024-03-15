import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';
import CombinacionPalabras from './CombinacionPalabras'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CombinacionPalabras/>} /> {/* Cambio aquí */}
          <Route path="/image" element={<ImageComponent/>} />
          <Route path="/respuesta" element={<Respuesta/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
