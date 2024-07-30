/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
console.log("Punto 1");
let suma = 5 + 5;
let resta = 5 - 3;
let multiplicacion = 2 * 5;
let division = 8 / 2;
let modulo = 5 % 3;
let exponente = 4 ** 2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
console.log(exponente);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("Punto 2");


let asignarSuma = 10;
asignarSuma += suma;
console.log(asignarSuma);

let asginarResta = 20;
asginarResta -= resta;
console.log(asginarResta);

let asignarMultiplicacion = 3;
asignarMultiplicacion *= multiplicacion;
console.log(asignarMultiplicacion);

let asignarDivision = 10;
asignarDivision /= division;
console.log(asignarDivision);

let asignarModulo = 560;
asignarModulo %= modulo;
console.log(asignarModulo);

let asignarExponente = 2;
asignarExponente **= exponente;
console.log(asignarExponente);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(4 > 2);
console.log(10 <= 100);
console.log(20 >= 20);
console.log(2 === 2);
console.log(6 != 2);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 < 0);
console.log(10 === "10");
console.log(144 >= 2000);
console.log("hola" !== "hola");
console.log("daniel" === 3);
// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas