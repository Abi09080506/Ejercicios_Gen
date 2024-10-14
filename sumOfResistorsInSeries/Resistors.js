
const sumaResistencias = function (resistencia){ // está es la función
    let totalResistencia=0;
    for (let i=0; i<resistencia.length;i++){
        totalResistencia += Math.abs (resistencia[i]);
    }
    return totalResistencia + "ohms";
}

let input = prompt("Ingresa los números de resistencias separados por comas (ej. 1,2,3)");
let resistenciaArray = input.split(",").map(Number);

// consola
console.log(sumaResistencias(resistenciaArray));

console.log (sumaResistencias ([-1,5,6,3]));
console.log (sumaResistencias ([14,3.5,6]));
console.log (sumaResistencias ([8,15,100]));





