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
         // Replace with your actual FastAPI endpoint URL
        const data = await response.json(); // Parse JSON response
        setID(data)
    
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    console.log("termino");

    const rowData = {
        ID: ID,
        age: checkboxes.edad,
        gender: checkboxes.genero,
        visualImpediment: checkboxes.visual
    };

    try {
        const insertResponse = await fetch('https://experimentdeploy.azurewebsites.net/insertUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rowData)
        });

        if (insertResponse.ok) {
            setGender(checkboxes.genero);
            setAge(checkboxes.edad);
            setVisionImpediment(checkboxes.visualImpediment);
            navigate('/Image');
        } else {
            console.error('Failed to insert user');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
