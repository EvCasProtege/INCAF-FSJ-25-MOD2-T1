
function calcularNota(nota , porcentaje){
    return nota * porcentaje;
}

function notaFinalAlumano(nombre,carnet, examen, tareas, asistencia, investigacion){
    let notafinal = calcularNota(examen,0.2) + calcularNota(tareas,0.4)+calcularNota(asistencia,0.1)+calcularNota(investigacion,0.3);
    return {
        nombre : nombre,
        carnet : carnet,
        notafinal : notafinal
    };
}


console.log(notaFinalAlumano("EVER CASTRO","1215610",5,8,5,9));