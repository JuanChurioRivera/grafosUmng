import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CombinacionProvider } from './CombinacionContext';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';
import Home from  './Home';

function App() {
  return (
    <CombinacionProvider>
      <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/Image" element={<ImageComponent/>} />
            <Route path="/respuesta" element={<Respuesta/>} />
          </Routes>
        </div>
      </Router>
    </CombinacionProvider>
  );
}

export default App;
