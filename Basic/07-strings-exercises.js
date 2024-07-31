/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let firstname = "Daneri";
let lastname = "Martínez";
let fullname = firstname + " " + lastname;

console.log(fullname);

// 2. Muestra la longitud de una cadena de texto
console.log(fullname.length);

// 3. Muestra el primer y último carácter de un string
console.log(fullname[0]);
console.log(fullname[14]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let pais = `Mi nombre es 
Daniel Martínez Pérez y vivo
en el mejor país del mundo
México`;
console.log(pais);

// 6. Interpola el valor de una variable en un string
console.log(`Habla sobre tí: ${pais} y mi hija se llama ${fullname}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let remplaceRegex = / /g;
console.log(pais.replace(remplaceRegex, "_"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(pais.includes("Daniel"));

// 9. Comprueba si dos strings son iguales
let cadenaUno = "Futbol";
let cadenaDos = "Futbol";
console.log(cadenaDos === cadenaUno);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadenaUno.length === cadenaDos.length);
