function calcular() {
    const valor = document.getElementById('valor').value;

    const respuesta = document.getElementById('respuesta');
    let temperatura = (valor * 1.8) + 32;
    let textoRespultado = "";
    
    if (temperatura >= 14 && temperatura < 32) {
        textoRespultado = 'Temperatura baja';
    } else if (temperatura >= 32 && temperatura < 68) {
        textoRespultado = 'Temperatura adecuada';
    } else if (temperatura >= 68 && temperatura < 96) {
        textoRespultado = 'Temperatura alta';
    } else {
        textoRespultado = 'Temperatura desconocida';
    }

    respuesta.textContent = `Temperatura en Fahrenheit: ${temperatura}°F - ${textoRespultado}`;
    
}