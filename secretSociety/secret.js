// Secret Society
 

// Find the name of a secret society based on the first letter of each member's name.
 

// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
function secretName (miembrossecretos) {
    let nombre= miembrossecretos.map( miembro=> miembro [0]).sort().join ("");
    return nombre;
}
let ingreso = prompt("Ingresa los nombres para formar... \n¡La sociedad secreta, más secreta del mundo! \nRecuerda agregar secretos a los secretos de otros para hacerlo más secreto \nSepara los nombres por comas. \nPor ejemplo: Esperanza,Franco,Nia");
let sociedadSuperS = ingreso.split(",").map(nombre=> nombre.trim());

// consola
console.log(secretName(sociedadSuperS));
console.log(secretName(["Esperanza","Franco","Nia"]));
console.log(secretName(["Phoebe","Ross","Chandler", "Joey", "Monica", "Rachel"]));
console.log(secretName(["Harry","Ron","Hermione"]));