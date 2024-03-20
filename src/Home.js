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
            navigate('/');
        } catch (error) {
            console.log("Error al enviar la respuesta");
        }
    };

    // Render the component
    return (
        <div>
            <h1>Encabezado</h1>
            <div id="container">
                <textarea
                    id="texto"
                    placeholder="Su tarea será determinar si los dos graficos que vera a continuación pertenecen al mismo paciente, este preparado porque su tiempo será limitado para ver los graficos"
                />
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="item1"
                            checked={checkboxes.item1}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="item1">Item 1</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="item2"
                            checked={checkboxes.item2}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="item2">Item 2</label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="item3"
                            checked={checkboxes.item3}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="item3">Item 3</label>
                    </li>
                </ul>
                <button id="startButton" disabled={!allChecked} onClick={start}>
                    Empezar
                </button>
            </div>
        </div>
    );
};

export default Home;
