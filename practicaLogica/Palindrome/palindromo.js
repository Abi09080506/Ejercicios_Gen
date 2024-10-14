function Palindromo(frase) {
    let cleanedFrase = frase.toLowerCase().replace(/[\W_]/g, '');
    let reversoFrase= cleanedFrase.split ("").reverse().join("");
    return {
        original: cleanedFrase,
        reverso: reversoFrase,
        esPalindromo: cleanedFrase=== reversoFrase
    }
}

let ingresarPalabra = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");
let resultado = Palindromo(ingresarPalabra);

if (resultado.esPalindromo) {
    console.log("¡Es un palíndromo!");
} else {
    console.log("No es un palíndromo.");
}
console.log("Frase original: " + resultado.original);
console.log("Frase invertida: " + resultado.reverso );
