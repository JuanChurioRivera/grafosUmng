import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styleCarac.css';

const Caracterizacion = () => {
    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        edad: '',
        genero: '',
        visual: ''
    });

    const allChecked = Object.values(checkboxes).every(value => value);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setCheckboxes({
            ...checkboxes,
            [id]: value
        });
    };

    const handleClick = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        const rowData = {
            age: checkboxes.edad,
            gender: checkboxes.genero,
            visualImpairment: checkboxes.visual
        };

        try {
            const response = await fetch('https://experimentdeploy.azurewebsites.net/insertUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rowData)
            });

            if (response.ok) {
                navigate('/Image');
            } else {
                console.error('Failed to insert user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <center><h1>REGISTRO</h1></center>
            <form id="formulario">
                <label htmlFor="edad">Ingrese su edad:</label>
                <input type="text" id="edad" name="edad" placeholder="Escribe tu edad" onChange={handleInputChange} />

                <label>Selecciona tu género:</label>
                <input type="radio" id="genero_masculino" name="genero" value="Masculino" onChange={handleInputChange} /> Masculino
                <input type="radio" id="genero_femenino" name="genero" value="Femenino" onChange={handleInputChange} /> Femenino
                <input type="radio" id="genero_otro" name="genero" value="Otro" onChange={handleInputChange} /> Otro

                <label>Padece de alguna enfermedad visual:</label>
                <input type="radio" id="visual_si" name="visual" value="Si" onChange={handleInputChange} /> Si
                <input type="radio" id="visual_no" name="visual" value="No" onChange={handleInputChange} /> No

                <button type="submit" disabled={!allChecked} onClick={handleClick}>Empezar</button>
            </form>
        </div>
    );
};

export default Caracterizacion;
