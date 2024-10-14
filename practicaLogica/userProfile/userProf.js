let userName = prompt("Ingresa tu nombre de usuario");
let age = prompt("Ingresa tu edad");
let movies = prompt("Ingresa una lista de tus películas favoritas. \nSeparalas por comas, por favor. Ejemplo: Batman, Flash, Wonderwoman");
let favoriteMovies= movies.split (",").map (movies=> movies.trim());
function generarMensaje(movie) {
    const mensajes = [
        "La película " + movie + " es una de mis favoritas.",
        "¡Me encanta " + movie + " !",
        movie + " siempre me hace sentir bien.",
        "No puedo dejar de recomendar " + movie,
        "He visto " + movie +" incontables veces.",
        movie + " es una joya cinematográfica.",
    ];
    return mensajes[Math.floor(Math.random() * mensajes.length)];
}
// consola
console.log("Tu usuario es: " + userName);
console.log("Tienes " + age + " años");
console.log("Tus peliculas favoritas son: " + favoriteMovies);
favoriteMovies.forEach(movie => {
    console.log(generarMensaje(movie));
});