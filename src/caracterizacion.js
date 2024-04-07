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
        visual: '',
        condicion: '',
        email: ''
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
    
            const newRowID = parseInt(data) + 1; // Increment ID
            setID(newRowID);
            const rowData = {
                ID: newRowID, // Update rowData with the new ID value
                gender: checkboxes.genero,
                age: checkboxes.edad,
                email: checkboxes.email,
                visionImpediment: checkboxes.visual,
                condition: checkboxes.condicion
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
                alert("Usuario creado correctamente");
                
                setGender(rowData.gender);
                setAge(rowData.age);
                setVisionImpediment(rowData.visionImpediment);
            } else {
                console.error('Failed to insert user');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        navigate('/AntesPrueba');
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

                <label htmlFor="email">Correo electrónico (El correo electrónico sólo se usará para el registro):</label>
                <input type="email" id="email" name="email" pattern=".+@example\.com" size="30" required onChange={handleInputChange} />

                <label>Padece de alguna enfermedad visual:</label>
                <input type="radio" id="visual" name="visual" value="Sí" onChange={handleInputChange} /> Si
                <input type="radio" id="visual" name="visual" value="No" onChange={handleInputChange} /> No

                <label htmlFor="condicion">En caso de haber respondido Sí en la anterior pregunta, seleccione la condición que mejor lo describe</label>
                <select name="condicion" id="condicion" onChange={handleInputChange}>
                    <option value=" "> </option>
                    <option value="miopia">Miopía</option>
                    <option value="hipermetropia">Hipermetropía</option>
                    <option value="astigmatismo">Astigmatismo</option>
                    <option value="miopia-astigmatismo">Miopía-Astigmatismo</option>
                    <option value="hipermetropia-astigmatismo">Hipermetropía-Astigmatismo</option>
                    <option value="otro">Otro</option>
                </select>

                <button type="submit" onClick={handleClick}>Empezar Prueba</button>
            </form>
        </div>
    );
};

export default Caracterizacion;
