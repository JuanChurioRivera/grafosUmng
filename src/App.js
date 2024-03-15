import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import Respuesta from './Respuesta';

function App() {

  const [combinations, setCombinations] = useState([]);
  const [currentCombination, setCurrentCombination] = useState("");

  // Al iniciar, generar todas las combinaciones posibles
  useEffect(() => {
    const allCombinations = generateCombinations(false); // Obtener todas las combinaciones sin excluir ninguna
    setCombinations(allCombinations.combinations);
  }, []);

  // Función para seleccionar una nueva combinación
  const selectNewCombination = () => {
    if (combinations.length > 0) {
      const randomIndex = Math.floor(Math.random() * combinations.length);
      setCurrentCombination(combinations[randomIndex]);
      // Actualizar las combinaciones para excluir la actualmente seleccionada
      setCombinations(combs => combs.filter((_, index) => index !== randomIndex));
    } else {
      // Manejar el caso cuando se acaben las combinaciones
      alert("Se han utilizado todas las combinaciones posibles.");
    }
  };

  // Seleccionar una combinación al iniciar y cada vez que se modifique combinations
  useEffect(() => {
    selectNewCombination();
  }, [combinations]);

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
