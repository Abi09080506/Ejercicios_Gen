const arrayMultiplos = function (number,length){ // está es la función
    let resultado= new Array (lenght);
    for (let i=0; i<length;i++){
        resultado [i]= Math.abs (number *(i+1));
    }
    return resultado;
}
let lenght = +prompt("Ingresa el tamaño del arreglo");
let number = +prompt("Ingresa el múltiplo");
// consola
console.log(arrayMultiplos(number,lenght));

console.log (arrayMultiplos (2,10));
console.log (arrayMultiplos(17,6));
