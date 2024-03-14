import React from 'react';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

        <Route>
          exact
          path="/"
          element={<ImageComponent/>}
        </Route>

        <Route>
          
          path="/"
          element={<Respuesta/>}
        </Route>




        </Routes>
      </Router>




      <ImageComponent/>
    </div>
  );
}

export default App;