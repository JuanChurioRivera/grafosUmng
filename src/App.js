import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CombinacionProvider } from './CombinacionContext'; // Importa el provider
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';
import CombinacionPalabras from './CombinacionPalabras';

function App() {
  return (
    <CombinacionProvider> {/* Envuelve tu aplicación con el provider */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CombinacionPalabras/>} />
            <Route path="/image" element={<ImageComponent/>} />
            <Route path="/respuesta" element={<Respuesta/>} />
          </Routes>
        </div>
      </Router>
    </CombinacionProvider>
  );
}

export default App;
