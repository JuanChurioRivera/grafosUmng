import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CombinacionProvider } from './CombinacionContext';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';
import Home from  './Home';
import End from './End';
import Caracterizacion from './caracterizacion';

function App() {
  return (
    <CombinacionProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Caracterizacion" element={<Caracterizacion/>} />
            <Route path="/Image" element={<ImageComponent/>} />
            <Route path="/respuesta" element={<Respuesta/>} />
            <Route path="/End" element={<End/>} />
            
            
          </Routes>
        </div>
      </Router>
    </CombinacionProvider>
  );
}

export default App;
