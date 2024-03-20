import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    // Initialize the state for each checkbox
    const [checkboxes, setCheckboxes] = useState({
        item1: false,
        item2: false,
        item3: false
    });

    // Derived state to determine if all checkboxes are checked
    const allChecked = Object.values(checkboxes).every(checked => checked);

    // Function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        setCheckboxes({
            ...checkboxes,
            [event.target.id]: event.target.checked
        });
    };

    // Function to handle the start action
    const start = () => {
        try {
            navigate('/Image');
        } catch (error) {
            console.log("Error al enviar la respuesta");
        }
    };

    // Render the component
    return (
        <div>
            <h1>EXPERIMENTO</h1>
            <div id="container">
                <textarea

                    id="texto"
                    placeholder="Su tarea será determinar si los dos graficos que vera a continuación pertenecen al mismo paciente, este preparado porque su tiempo será limitado para ver los graficos."
                    cols = "40"
                    rows= "20"

                />
                <div>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="item1"
                            checked={checkboxes.item1}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="item1">Entiendo lo que dice arriba</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="item2"
                            checked={checkboxes.item2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="item2">Acepto que la información dada por las respuestas sea usado con fines investigativos</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="item3"
                            checked={checkboxes.item3}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="item3">Solo hare esta prueba una unica vez</label>
                    </li>
                </ul>
                </div>
                <button id="startButton" disabled={!allChecked} onClick={start}>
                    Empezar
                </button>
            </div>
        </div>
    );
};

export default Home;
