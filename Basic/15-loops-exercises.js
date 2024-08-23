/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

let toOne = 1;
do {
    console.log(`El numero es ${toOne}`);
    toOne++
} while (toOne <= 10)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

//For
let resultado = 0;
for (let i = 0; i <= 100; i++) {
    resultado = resultado + i;
}
console.log(`El resultado de la suma de los numeros del 1 al 100 es ${resultado} con For`);

//While
let resultado2 = 0;
let iterator = 0;
while (iterator <= 100) {
    resultado2 += iterator;
    iterator++
}
console.log(`El resultado de la suma de los numeros del 1 al 100 es ${resultado2} con For`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

//For 
for (let index = 1; index <= 50; index++) {
    if (index % 2 === 0) {
        console.log(index)
    }
}

//For + Continue
for (let index = 1; index <= 50; index++) {
    if (index % 2 != 0) {
        continue;
    } else {
        console.log(index);
    }

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

//For
const arreglo = ["Daniel", "Fidendio", "Estela", "Mary", "Paulina"];
// console.log(arreglo.length);
for (let i = 0; i < arreglo.length; i++) {
    console.log(`Nombre: ${arreglo[i]}`);
}
//For of
for (let value of arreglo) {
    console.log(`Name: ${value}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let txt = "JavierRojoGomez";
let result = 0;
for (let i = 0; i < txt.length; i++) {
    // console.log(txt[i]);
    if (txt[i] == "a" || txt[i] == "e" || txt[i] == "i" || txt[i] == "o" || txt[i] == "u") {
        result = result + 1;
    }
}
console.log(`La palabra ${txt} contiene ${result} vocales`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const arrayNum = [2, 5, 6, 3];
let multiplicar = 1;
for (let i = 0; i < arrayNum.length; i++) {
    multiplicar = multiplicar * arrayNum[i];
}
console.log(multiplicar);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cinco = 5;
for (let multi of tabla) {
    let result;
    result = multi * cinco;
    console.log(`${cinco} * ${multi} = ${result}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let text = "Daniel";
let newWord = "";
for (let i = text.length - 1; i >= 0; i--) {
    newWord += text[i];
}
console.log(newWord);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let v1 = 0;
let v2 = 1;
let v3 = 0;
console.log(v1, v2);
for (let i = 0; i <= 10; i++) {
    v3 = v1 + v2;
    v1 = v2
    v2 = v3
    console.log(v3)
}


let r = 8;
let fibSequence = [0, 1];

for (let i = 2; i <= r; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    console.log(fibSequence)

}
console.log(fibSequence)

// Output: [0, 1, 1, 2, 3, 5, 8, 13]



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10