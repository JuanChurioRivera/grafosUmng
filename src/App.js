import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ImageComponent/>} />
          <Route path="/respuesta" element={<Respuesta/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
