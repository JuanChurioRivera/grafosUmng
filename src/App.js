import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CombinacionProvider } from './CombinacionContext';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';
import Home from  './Home';
import End from './End';
import Caracterizacion from './caracterizacion';
import ImagePrueba from './ImagePrueba';
import RespuestaPrueba from './RespuestaPrueba';
import EndPrueba from './EndPrueba';
import AntesPrueba from './AntesPrueba';

function App() {
  return (
    <CombinacionProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Caracterizacion" element={<Caracterizacion/>} />
            <Route path="/Image" element={<ImageComponent/>} />
            <Route path="/ImagePrueba" element={<ImagePrueba/>} />
            <Route path="/respuesta" element={<Respuesta/>} />
            <Route path="/RespuestaPrueba" element={<RespuestaPrueba/>} />
            <Route path="/End" element={<End/>} />
            <Route path="/EndPrueba" element={<EndPrueba/>} />
            <Route path="/AntePrueba" element={<AntesPrueba/>} />
            
            
          </Routes>
        </div>
      </Router>
    </CombinacionProvider>
  );
}

export default App;
