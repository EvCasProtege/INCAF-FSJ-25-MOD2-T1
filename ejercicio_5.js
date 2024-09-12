function descuento() {
    const selecionarId = document.getElementById('auto');
    const seleccionValue = selecionarId.value;
    let descuento = 0;

    switch (seleccionValue) {
        case 'FORD FIESTA':
            descuento = 5;
            break;
        case 'FORD FOCUS':
            descuento = 10;
            break;
        case 'FORD ESCAPE':
            descuento = 20;
            break;
        default:
            descuento = 0;
    }

    const respuesta = document.getElementById('respuesta');
    respuesta.textContent = `El coche seleccionado es ${seleccionValue} y el descuento aplicado es del ${descuento}%.`;
}