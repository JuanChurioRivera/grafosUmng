import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styleCarac.css';
import { useCombinacion } from './CombinacionContext';

const Caracterizacion = () => {
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = 'upgrade-insecure-requests';
        document.head.appendChild(meta);
    }, []);

    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        edad: '',
        genero: '',
        visual: ''
    });

    const { ID, setID, setGender, setAge, setVisionImpediment } = useCombinacion();
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
    
        console.log("porfi");
    
        try {
            const response = await fetch('https://experimentdeploy.azurewebsites.net/getLatestUser', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
    
            const data = await response.json(); // Parse JSON response
    
            setID(data)
    
            
    
            const rowData = {
                ID: data + 1, // Update rowData with the new ID value
                age: checkboxes.edad,
                gender: checkboxes.genero,
                visionImpediment: checkboxes.visual
            };
    
            console.log(rowData);
    
            const insertResponse = await fetch('https://experimentdeploy.azurewebsites.net/insertUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rowData)
            });
    
            if (insertResponse.ok) {
                setGender(rowData.gender);
                setAge(rowData.age);
                setVisionImpediment(rowData.visual);
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
                <input type="radio" id="genero" name="genero" value="Masculino" onChange={handleInputChange} /> Masculino
                <input type="radio" id="genero" name="genero" value="Femenino" onChange={handleInputChange} /> Femenino
                <input type="radio" id="genero" name="genero" value="Otro" onChange={handleInputChange} /> Otro

                <label>Padece de alguna enfermedad visual:</label>
                <input type="radio" id="visual" name="visual" value="Si" onChange={handleInputChange} /> Si
                <input type="radio" id="visual" name="visual" value="No" onChange={handleInputChange} /> No

                <button type="submit" onClick={handleClick}>Empezar</button>
            </form>
        </div>
    );
};

export default Caracterizacion;
