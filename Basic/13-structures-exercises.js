/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
const myArray = ["Perro", "Lobo", "Ballena", "Tiburon", "Ratón"];

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Tlacuache");
myArray.push("Caracol");
console.log(myArray);

// 3. Elimina el que se encuentra en tercera posición
delete (myArray[2]); //Deja un espacio vacio 
console.log(myArray);

const resultado = myArray.filter(animal => animal != 'Ballena'); //Filtra sin tomar encuenta el elemento
console.log(resultado);

// 4. Crea un set que almacene cinco libros
let mySet = new Set();
mySet = new Set(["Hábitos atómicos", "Juventud en extasis", "Mi lucha", "Los ojos de mi princesa", "Padre rico, padre pobre"])

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Este dolor no es mio");
mySet.add("Hábitos atómicos");
console.log(mySet);

// 6. Elimina uno concreto a tu elección
mySet.delete("Juventud en extasis");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let maps = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(maps.has("5"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
const verano = ["Junio", "Julio", "Agosto"];
maps.set("13", verano);
console.log(maps);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const nombres = ["Dalia", "Daniel", "Daneri", "Dalia"];
let nuevoSet = new Set(nombres);
console.log(nuevoSet);
maps.set("14", nuevoSet);
console.log(maps);