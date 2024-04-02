import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Caracterizacion = () => {
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

    const handleClick = async () => {


        
        const response = await fetch('https://experimentdeploy.azurewebsites.net/getLatestUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rowData)
        });
       

        const rowData = {
            ID: response.latest_id,
            age: document.getElementById("edad").value,
            gender: document.querySelector('input[name="genero"]:checked'),
            visualImpediment: document.getElementById("visual").value,
    
        };

          const responsePost = await fetch('https://experimentdeploy.azurewebsites.net/insertUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(rowData)
          });


          navigate('/Image');
    }
    

    // Render the component
    return (
        <div>
        <center><h1>REGISTRO</h1></center>
        
        <form id="formulario">
            <label for="edad">Ingrese su edad:</label>
            <input type="text" id="edad" name="edad" placeholder="Escribe tu edad" onChange={handleCheckboxChange}></input>

            <label for="genero">Selecciona tu género:</label>
            <input type="checkbox" id="genero_masculino" name="genero" value="Masculino" onChange={handleCheckboxChange}>Masculino</input>
            
            <input type="checkbox" id="genero_femenino" name="genero" value="Femenino" onChange={handleCheckboxChange}>Femenino</input>
    
            <input type="checkbox" id="genero_otro" name="genero" value="Otro" onChange={handleCheckboxChange}>Otro</input><br></br>
            


            <label for="genero">Padece de alguna enfermedad visual:</label>
            <input type="checkbox" id="genero_masculino" name="visual" value="Si" onChange={handleCheckboxChange}>Si</input>
            
            <input type="checkbox" id="genero_femenino" name="visual" value="No" onChange={handleCheckboxChange}>No</input>
    
            

        <button type="submit" disabled={!allChecked} onClick={handleClick} >Empezar</button>
        </form> 
        </div>
    );
};

export default Caracterizacion;
