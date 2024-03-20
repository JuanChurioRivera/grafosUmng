import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const startButton = document.getElementById('startButton');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {

            const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
            
            startButton.disabled = !allChecked;
        });
    });
    const start = async () => {
        try {
            navigate('/')
        } 
        catch (error){ 

            console.log("Error al enviar la respuesta")
        }
    }

return(
    <div>
    <h1>Encabezado</h1>
    <div id="container">
        <textarea id="texto" placeholder="Su tarea será determinar si los dos graficos que vera a continuación pertenecen al mismo paciente, este preparado porque su tiempo será limitado para ver los graficos"></textarea>
        
            <li>
                <input type="checkbox" id="item1"></input>
                <label for="item1">Item 1</label>
            </li>
            <li>
                <input type="checkbox" id="item2"></input>
                <label for="item2">Item 2</label>
            </li>
            <li>
                <input type="checkbox" id="item3"></input>
                <label for="item3">Item 3</label>
            </li>
        onClick={handleNoClick}
        <button id="startButton" disabled onClick={start} >Empezar</button>
    </div>
</div>
);
};

export default Home;