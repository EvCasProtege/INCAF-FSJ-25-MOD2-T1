function descuento() {
    const origen = document.getElementById('origen').value.trim().toUpperCase();
    const destino = document.getElementById('destino').value.trim().toUpperCase();
    const respuesta = document.getElementById('respuesta');
    let descuento = 0;

    if (origen === 'PALMA') {
        switch (destino) {
            case 'LA COSTA DEL SOL':
                descuento = 5;
                break;
            case 'PANCHIMALCO':
                descuento = 10;
                break;
            case 'PUERTO EL TRIUNFO':
                descuento = 15;
                break;
            default:
                descuento = 0;
        }
    }
    
    if (descuento > 0) {
        respuesta.textContent = `Del origin: ${origen} al destino: ${destino} el descuento aplicado es del ${descuento}%.`;
    } else {
        respuesta.textContent = `No hay descuento disponible desde origin: ${origen} hasta destino: ${destino}.`;
    }
}