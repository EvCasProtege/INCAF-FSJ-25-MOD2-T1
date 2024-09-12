function ingresar() {
    let valor = parseInt(prompt(`Ingrese el valor:`));
    let tablaContext = ``;

    if (!Number.isInteger(valor)) {
        alert("Error debe ser un entero");
    }else{
        if(valor<=0 || valor>=11){
            alert("El valor debe ser mayor que 0 y menor que 11");
        }else{
            for (let i = 1; i <= 10; i++) {
                tablaContext= tablaContext + `` + i +' x '+valor +` = ` + (i*valor) +`<br>`;
                
            }
            document.getElementById('resultado').innerHTML = tablaContext;
        }   
       
    }

    
}