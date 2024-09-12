function cualEsMayor(primero, segundo){
    if (!Number.isInteger(primero)) {
        throw new TypeError("El parámetro 1 debe ser un entero");
    }

    if (!Number.isInteger(segundo)) {
        throw new TypeError("El parámetro 2 debe ser un entero");
    }
    return primero>segundo?primero:segundo;
}

console.log(cualEsMayor(10,5));
console.log(cualEsMayor(5,10));
console.log(cualEsMayor(5,9));
console.log(cualEsMayor(11,5));
console.log(cualEsMayor(10.2,10));
console.log(cualEsMayor("AS",10));