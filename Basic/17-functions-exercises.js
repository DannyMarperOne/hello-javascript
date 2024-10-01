/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function myFunction(num1, num2) {
    return num1 + num2
}

console.log(myFunction(3, 5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

//con el método sort
let array = [3, 4, 6, 2, 3, 1];
function myArray(valor) {
    console.log(valor.sort());
}

myArray(array)

//con algoritmo de ordenamiento
//Insertion Sort

function insertionSort(arr) {
    for (let l = 1; l < arr.length; l++) {
        let currentValue = arr[l];

        let i = l - 1;
        while (i >= 0 && arr[i] > currentValue) {
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = currentValue;
    }
    return arr
}
const arr = [4, 20, 5, 61, 3, 6, 2, 5];
console.log(insertionSort(arr));


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