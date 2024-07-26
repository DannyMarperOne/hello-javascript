/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

// Ejemplo de comentario en una linea

// 2. Escribe un comentario en varias líneas

/*
Ejemplo de comentario
en varias
lineas de código.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let number = 28;
let texto = "Ejemplo";
let valor = true;
let bigNumber = BigInt(989480202857333);
// let bigNumber = 989480202857333n;
let vacio = null;
let noDefinido;
let unico = Symbol("El número uno");

// 4. Imprime por consola el valor de todas las variables
console.log(number);
console.log(texto);
console.log(valor);
console.log(bigNumber);
console.log(vacio);
console.log(noDefinido);
console.log(unico);

// 5. Imprime por consola el tipo de todas las variables
console.log(number + " es de tipo: " + typeof number);
console.log(texto + " es de tipo: " + typeof texto);
console.log(valor + " es de tipo: " + typeof valor);
console.log(bigNumber + " es de tipo: " + typeof bigNumber);
console.log(vacio + " es de tipo: " + typeof vacio);
console.log(noDefinido + " es de tipo: " + typeof noDefinido);
console.log(typeof unico);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

number = 1024;
texto = "Javascript";
valor = false;
bigNumber = BigInt(29292900000000000);
//bigNumber = 0909884875590n;
unico = Symbol("El unico");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

number = "Cambio de dato";
texto = 94;
valor = 493893489324n;
bigNumber = false;
vacio = Symbol("Persona");
noDefinido = null;
unico;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser