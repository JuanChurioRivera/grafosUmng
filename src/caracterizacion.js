import React, { useState } from 'react';
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
    const { setID, setGender, setAge, setVisionImpediment } = useCombinacion();
    const [edad, setEdad] = useState('');
    const [genero, setGenero] = useState('');
    const [visual, setVisual] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setLoading(true);

        const rowData = {
            age: edad,
            gender: genero,
            visualImpairment: visual
        };

        try {
            const response = await fetch('experimentdeploy.azurewebsites.net/insertUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rowData)
            });

            if (response.ok) {
                const data = await response.json();
                setID(data.latest_id);
                setGender(genero);
                setAge(edad);
                setVisionImpediment(visual);
                navigate('/Image');
            } else {
                console.error('Failed to insert user');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <center><h1>REGISTRO</h1></center>
            <form id="formulario">
                <label htmlFor="edad">Ingrese su edad:</label>
                <input type="text" id="edad" name="edad" placeholder="Escribe tu edad" value={edad} onChange={(e) => setEdad(e.target.value)} />

                <label>Selecciona tu género:</label>
                <input type="radio" id="genero_masculino" name="genero" value="Masculino" checked={genero === 'Masculino'} onChange={(e) => setGenero(e.target.value)} /> Masculino
                <input type="radio" id="genero_femenino" name="genero" value="Femenino" checked={genero === 'Femenino'} onChange={(e) => setGenero(e.target.value)} /> Femenino
                <input type="radio" id="genero_otro" name="genero" value="Otro" checked={genero === 'Otro'} onChange={(e) => setGenero(e.target.value)} /> Otro

                <label>Padece de alguna enfermedad visual:</label>
                <input type="radio" id="visual_si" name="visual" value="Si" checked={visual === 'Si'} onChange={(e) => setVisual(e.target.value)} /> Si
                <input type="radio" id="visual_no" name="visual" value="No" checked={visual === 'No'} onChange={(e) => setVisual(e.target.value)} /> No

                <button type="submit" disabled={loading || !(edad && genero && visual)} onClick={handleClick}>{loading ? 'Cargando...' : 'Empezar'}</button>
            </form>
        </div>
    );
};

export default Caracterizacion;
