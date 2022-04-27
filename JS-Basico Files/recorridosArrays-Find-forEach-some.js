var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

/* find que te da todos los valores de la fila del array */

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

/* for each te regresa el listado del array*/

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* some te regresa un verdadero o falso en base a tu funcion*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});