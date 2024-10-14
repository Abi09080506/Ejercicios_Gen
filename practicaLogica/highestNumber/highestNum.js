
function encontrarMaximo() {
    let numeros = new Array (10);
    for (let i = 0; i < 10; i++) {
        numeros [i] = +prompt("Ingresa el número " + (i + 1) + ":");
    }
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    console.log("El número más alto es: " + maximo);
}

encontrarMaximo();
