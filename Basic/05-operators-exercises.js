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
console.log("Punto 3");

console.log(4 > 2);
console.log(10 <= 100);
console.log(20 >= 20);
console.log(2 === 2);
console.log(6 != 2);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Punto 4");

console.log(5 < 0);
console.log(10 === "10");
console.log(144 >= 2000);
console.log("hola" !== "hola");
console.log("daniel" === 3);

// 5. Utiliza el operador lógico and
console.log("Punto 5");

console.log(510 > 1 && 59 < 60);
console.log(10 >= 1 && 40 < 60);
console.log(5 === "5" && 5 != 4);
console.log(80 < 100 && 40 >= 40);
console.log(20 == '20' && 40 === 40);

// 6. Utiliza el operador lógico or
console.log("Punto 6");

console.log(false || 10 + 10 == 20);
console.log(false || true);
console.log(50 > 40 || 40 > 50);
console.log(20 <= 5 || 40 >= 65);
console.log(true == false || false == false);

// 7. Combina ambos operadores lógicos
console.log("Punto 7");

console.log(5 > 4 && 6 > 1 && 8 < 9);
console.log(5 >= 4 && 6 < 1 && 20 == 20);
console.log(5 + 5 == 10 && true && 2 === 2);
let numberUno = 5;
let numberDos = 10;
console.log(numberDos >= numberUno || true || numberOne === 5);
console.log(4 == 4 || (false !== true && 20 <= 200));

// 8. Añade alguna negación
console.log("Punto 8");

console.log(numberDos != numberUno);
console.log(5 + 5 !== 5 + "5");
console.log(!false);
console.log(!0);
console.log(!1);

// 9. Utiliza el operador ternario
console.log("Punto 9");

console.log(5 + 5 == 10 ? true : false);
let vari = "Aguacate";
console.log(vari.length == 10 ? "Comparación correcta" : "Comparación incorrecta");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Punto 10");

console.log(12 + 8 === 20 && 30 < 100 && 5 * '2' >= 10);