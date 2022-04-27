var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

/* filtro te filtra la condicion que le pongas */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500
});

/* Mapear regresa los valores que le pongas*/

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});