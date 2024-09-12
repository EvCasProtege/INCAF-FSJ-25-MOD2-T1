function calcularPromedio(edades) {
    const sum = edades.reduce((a, b) => a + b, 0);
    return (sum / edades.length).toFixed(2);
}

function calcular() {
    
    const edadesManana = document.getElementById('manana').value.split(',').map(Number);
    const edadesTarde = document.getElementById('tarde').value.split(',').map(Number);
    const edadesNoche = document.getElementById('noche').value.split(',').map(Number);

    //captura de promedior
    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);
    //Buscar el valor maximo
    const highestAverage = Math.max(promedioManana, promedioTarde, promedioNoche);

    let mayorPromedio = '';

    if(highestAverage === promedioManana){
        mayorPromedio =` Mañana con:  ${promedioManana}`
    }else if(highestAverage === promedioTarde){
        mayorPromedio =` Tarde con:  ${promedioTarde}`
    }else{
        mayorPromedio =` Noche con:  ${promedioNoche}`
    }

    document.getElementById('avgM').innerText = `Promedio de edades del turno mañana: ${promedioManana}`;
    document.getElementById('avgT').innerText = `Promedio de edades del turno tarde: ${promedioTarde}`;
    document.getElementById('avgN').innerText = `Promedio de edades del turno noche: ${promedioNoche}`;
    document.getElementById('mayor').innerText = `El turno con el promedio de edades mayor es el turno: ${mayorPromedio}`;
}