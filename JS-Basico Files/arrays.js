var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; /* asi se hace un array */

console.log(frutas);

var masFrutas = frutas.push("Uvas"); /* para agregar elemento a array */

var ultimo = frutas.pop("Uvas"); /* para eliminar elemento de array */

var nuevaLongitud = frutas.unshift("Uvas"); /* agregar elemento al inicio de la lista */

var borrarfruta = frutas.shift("Uvas"); /* para borrar el primer elemento de la lista */

var posicion = frutas.indexOf("Cereza"); /* para buscar en que posicion se encuentra un elemento en el array */