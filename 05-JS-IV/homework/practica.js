/*
    Objetos:
*/

//Definimos un objeto
var objeto = {
    nombre: "Hugo",
    edad: 20,
    saludar: function () {
        console.log(`Hola ${this.nombre}`);
    },
};
objeto["saludar"]();

//Accedemos a un objeto
console.log(objeto.nombre);

//Agregamos un elemento al objeto
objeto.nuevaPropiedad = "Soy una nueva propiedad";

//Eliminamos una nueva propiedad
delete objeto.nuevaPropiedad;

/*
    This:
*/

function saludar() {
    console.log(`Hola ${this.nombre}`);
}

var persona1 = {
    nombre: "Persona1",
    saludar: saludar,
};

var persona2 = {
    nombre: "Persona2",
    saludar: saludar,
};

//console.log(objeto);
