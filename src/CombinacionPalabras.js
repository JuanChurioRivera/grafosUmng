import React, { useState } from 'react';

function CombinacionPalabras() {
  // Palabras disponibles para selección
  const palabras5 = ['CONTROL', 'CARDIOPATIA', 'BBB', 'DISRITMIA', 'INFARTO'];
  const palabras3 = ['SIGNAL', 'VG', 'HVG'];

  // Estados para manejar las selecciones del usuario
  const [seleccionPrimera, setSeleccionPrimera] = useState('');
  const [seleccionSegunda, setSeleccionSegunda] = useState('');
  const [seleccionTercera, setSeleccionTercera] = useState('');

  // Función para manejar la selección de las palabras
  const handleSeleccion = (evento, index) => {
    if (index === 1) setSeleccionPrimera(evento.target.value);
    if (index === 2) setSeleccionSegunda(evento.target.value);
    if (index === 3) setSeleccionTercera(evento.target.value);
  };

  // Función para generar la combinación
  const generarCombinacion = () => {
    alert(`Combinación generada: [${seleccionPrimera}, ${seleccionSegunda}, ${seleccionTercera}]`);
  };

  return (
    <div>
      <h2>Selecciona dos palabras y luego una tercera de otro grupo</h2>
      <select value={seleccionPrimera} onChange={(e) => handleSeleccion(e, 1)}>
        <option value="">Selecciona una palabra</option>
        {palabras5.map((palabra, index) => (
          <option key={index} value={palabra}>{palabra}</option>
        ))}
      </select>
      <select value={seleccionSegunda} onChange={(e) => handleSeleccion(e, 2)}>
        <option value="">Selecciona otra palabra</option>
        {palabras5.map((palabra, index) => (
          <option key={index} value={palabra}>{palabra}</option>
        ))}
      </select>
      <select value={seleccionTercera} onChange={(e) => handleSeleccion(e, 3)}>
        <option value="">Selecciona una palabra adicional</option>
        {palabras3.map((palabra, index) => (
          <option key={index} value={palabra}>{palabra}</option>
        ))}
      </select>
      <button onClick={generarCombinacion}>Generar Combinación</button>
    </div>
  );
}

export default CombinacionPalabras;
