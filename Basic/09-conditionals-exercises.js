/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miName = 1
if (miName == 1) {
    console.log('Daniel')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos


let password = "murilascue",
    user = "Admin";

if (password === 'murilascue' && user === 'Admin') {
    console.log(`Bienvenido ${user}`);
} else {
    console.log("Credenciales incorrectas");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 78;

if (number === 0) {
    console.log("Cero");
} else if (number < 0) {
    console.log("Negativo");
} else {
    console.log("Positivo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let persona = 10;

if (persona >= 18) {
    console.log("Puedes votar");
} else {
    // console.log("Aún no puedes votar, te faltan" + " " + faltan + " " + "años");
    console.log(`Aún no puedes votar, te faltan ${18 - persona} años`);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
//    dependiendo de la edad 

let person = 80;

console.log(person >= 18 ? "Adulto" : "Menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mounth = 10,
    nowMounth;

switch (mounth) {
    case 0:
        nowMounth = 'Enero'
        break;
    case 1:
        nowMounth = 'Febrero'
        break;
    case 2:
        nowMounth = 'Marzo'
        break;
    case 3:
        nowMounth = "Abril"
        break;
    case 4:
        nowMounth = "Mayo"
        break;
    case 5:
        nowMounth = "Junio"
        break;
    case 6:
        nowMounth = "Julio"
        break;
    case 7:
        nowMounth = "Agosto"
        break;
    case 8:
        nowMounth = "Septiembre"
        break
    case 9:
        nowMounth = "Octubre"
        break;
    case 10:
        nowMounth = "Noviembre"
        break;
    case 11:
        nowMounth = "Diciembre"
        break;
    default:
        nowMounth = "Elige algún mes"
        break;
}
console.log(nowMounth);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let arrMes = [0, 2, 4, 6, 7, 9, 11];
if (mounth === 1) {
    console.log(`${nowMounth} tiene 28 o 29 días`);
} else if (arrMes.includes(mounth)) {
    console.log(`${nowMounth} tiene 31 días`);
} else {
    console.log(`${nowMounth} tiene 30 días`);
}


/*
Mi versión larga

if (mounth === 1) {
    console.log(`${nowMounth} tiene 28 o 29 días`);
} else if (mounth === 0 || mounth === 2 || mounth === 4 || mounth === 6 || mounth === 7 || mounth === 9 || mounth === 11) {
    console.log(`${nowMounth} tiene 31 días`);
} else {
    console.log(`${nowMounth} tiene 30 días`);
} */


// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7