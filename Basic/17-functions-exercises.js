/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function myFunction(num1, num2) {
    return num1 + num2
}

console.log(myFunction(3, 5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const array = [3, 4, 6, 2, 3, 1];

function numMayor(arr) {
    return Math.max(...arr);
}

console.log('El número más grande es: ', numMayor(array));


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let nombre = "Pentagon Junior"
let cont = 0;
function insertText() {

}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado