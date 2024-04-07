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
            navigate('/Caracterizacion');
        } catch (error) {
            console.log("Error al enviar la respuesta");
        }
    };

    // Render the component
    return (
        <div>
            <h1>EXPERIMENTO</h1>
            <div id="container">
                <p>Bienvenido, la tarea a realizar es comparar visualmente dos gráficas e identificar si son iguales o no. Las gráficas se presentarán por un breve espacio de tiempo, debe estar muy atento.</p>
                <div>
                <ul>
                <label for="item1">Entendí las instrucciones de la prueba que voy a realizar</label>
                    <li>
                        <input
                            type="checkbox"
                            id="item1"
                            checked={checkboxes.item1}
                            onChange={handleCheckboxChange}
                        />
                        
                    </li>
                    <li>
                    <label for="item2">Acepto que la información dada por las respuestas sea usado con fines investigativos</label>
                        <input
                            type="checkbox"
                            id="item2"
                            checked={checkboxes.item2}
                            onChange={handleCheckboxChange}
                        />
                        
                    </li>
                    <li>
                    <label for="item3">Solo hare esta prueba una unica vez</label>
                        <input
                            type="checkbox"
                            id="item3"
                            checked={checkboxes.item3}
                            onChange={handleCheckboxChange}
                        />
                        
                    </li>

                    <li>
                    <label for="item3">Declaro que estoy haciendo la prueba de forma voluntaria y que en cualquier momento puedo abandonarla.</label>

                        <input
                            type="checkbox"
                            id="item3"
                            checked={checkboxes.item3}
                            onChange={handleCheckboxChange}
                        />
                        </li>

                    <li>
                        
                    </li>
                </ul>
                </div>
                <button id="startButton" disabled={!allChecked} onClick={start}>
                    Seguir
                </button>
            </div>
        </div>
    );
};

export default Home;
