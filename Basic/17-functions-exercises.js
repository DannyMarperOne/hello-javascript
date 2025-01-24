/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function myFunction(num1, num2) {
    return num1 + num2;
}

console.log(`El resultado de la suma es ${myFunction(3, 5)}`);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const listArr = [6, 46, 7, 34, 46, 7, 5];

const mayorList = function (list) {
    return Math.max(...list);
}
console.log(`El número mayor de la lista es ${mayorList(listArr)}`);



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let nombre1 = "PentagonJuniora"
let cont1 = 0;
function insertText1(texto1) {
    for (let i = 0; i < texto1.length; i++) {
        if (texto1[i] == 'a' || texto1[i] == 'i' || texto1[i] == 'e' || texto1[i] == 'o' || texto1[i] == 'u') {
            cont1 += 1;
        }
    }
    console.log('El texto ' + nombre1 + ' tiene ' + cont1 + ' vocales');
}
insertText1(nombre1);

//Forma mejorada
let nombre = "PentagonJunior"
let cont = 0;
function insertText(texto) {
    const vocales = "aeiou";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            cont++;
        }
    }
    console.log(`El texto "${nombre}" contine ${cont} vocales`);
}
insertText(nombre);


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const arrText = ['Hola', 'mexico', 'Checo Perez', 'monterrey'];
function stringFunc(cadena) {
    let resultado = [];
    for (let value of cadena) {
        resultado.push(value.toUpperCase());
    }
    return resultado;
}
console.log(stringFunc(arrText));


//Programa 1 : Imprime cada valor por separado, pero no en array

/* const arrTesxt = ['Hola', 'mexico', 'Checo Perez', 'monterrey'];
function stringFunc(cadena) {
    for (let value of cadena) {
        console.log(value.toUpperCase())
    }
}
stringFunc(arrTesxt); */

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

/* 
Numeros primos
    - Mayor a 1
    - El número dos es el único número par que es primo
    - Solo pueden divirse entre 1 y entre si mismos.
    - Ningún otro número (aparte de 1 y el propio número) puede dividirlo sin dejar residuo.
*/
let numP = 191;
const primosMX = function (valor) {
    if (valor <= 1) {
        return 'No es primo';
    } else if (valor === 2) {
        return 'Es primo';
    } else {
        for (let n = 2; n <= Math.sqrt(valor); n++) {
            if (valor % n === 0) {
                return 'No es numero primo';
            }
        }
        return 'Es numero primo';
    }
}
console.log(primosMX(numP));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// Para este código utilicé el spread operator y una arrow function

const f1 = ["manzana", "fresa", "naranja"];
const f2 = ["limon", "cereza", "litchi", "toronja"];


const frt = (f1, f2) => {
    if (!Array.isArray(f1) || !Array.isArray(f2)) { return "Ambos valores deben de ser un arreglo"; }
    const coctel = [...f1, ...f2];
    return coctel;
}
console.log(frt(f1, f2));



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const arrN = [5, 67, 87, 5, 2, 4, 66];

const sumN = (listN) => {
    let s = 0;
    for (let value of listN) {
        s += value;
    }
    return s;
}

console.log(sumN(arrN));


//Mismo ejemplo con el método reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const arrN2 = [3, 4, 12, 6];

function numCuadrado(arrN2) {
    let r = arrN2.map((Element) => Element * 2);
    return r;
}
console.log(numCuadrado(arrN2));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado