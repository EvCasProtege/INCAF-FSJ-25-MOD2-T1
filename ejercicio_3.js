function calculoAumento(salario, porcentaje){
    return salario *porcentaje;
}

function aumento(nombre, salario, categoria){
    let aumento = 0;
    const simbolo = "$ ";
    switch (categoria) {
        case "A":
            aumento = calculoAumento(salario,0.15);
            break;
        case "B":
            aumento = calculoAumento(salario,0.30);
            break;
        case "C":
            aumento = calculoAumento(salario,0.10);
            break;
        case "D":
            aumento = calculoAumento(salario,0.20);
            break;
    
        default:
            break;
    }
    return {
        nombre : nombre, 
        salario: simbolo+salario, 
        categoria: categoria,
        aumento : simbolo+aumento
    }

}

console.log(aumento("JOSE ESTRADA",100,"A"))
console.log(aumento("JOSE ESTRADA",100,"B"))
console.log(aumento("JOSE ESTRADA",100,"C"))
console.log(aumento("JOSE ESTRADA",100,"D"))