function ingresar() {
    let valores = [];
    let negativos = 0, positivos = 0, multiplos = 0, sumaPares = 0;

    for (let i = 0; i < 10; i++) {
        let valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`));
        valores.push(valor);
    }    

    valores.forEach(valor => {
        if (valor < 0) negativos++;
        if (valor > 0) positivos++;
        if (valor % 15 === 0) multiplos++;
        if (valor % 2 === 0) sumaPares += valor;
    });

    document.getElementById('negativos').innerText = `Cantidad de valores negativos: ${negativos}`;
    document.getElementById('positivos').innerText = `Cantidad de valores positivos: ${positivos}`;
    document.getElementById('multiplos').innerText = `Cantidad de múltiplos de 15: ${multiplos}`;
    document.getElementById('pares').innerText = `Valor acumulado de los números pares: ${sumaPares}`;
}