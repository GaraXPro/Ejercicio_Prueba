// Array proporcionado
var miArray = [5, "hola", "adios", 2];

// 1. Determinar cuál de los dos elementos de texto es mayor
var texto1 = miArray[1].toString();
var texto2 = miArray[2].toString();

if (texto1.length > texto2.length) {
    document.write("<p>El texto \"" + texto1 + "\" es mayor que \"" + texto2 + "\".</p>");
} else if (texto1.length < texto2.length) {
    document.write("<p>El texto \"" + texto2 + "\" es mayor que \"" + texto1 + "\".</p>");
} else {
    document.write("<p>Los textos tienen la misma longitud.</p>");
}

// 2. Determinar el resultado de las cinco operaciones matemáticas con los dos elementos numéricos
var num1 = parseFloat(miArray[0]);
var num2 = parseFloat(miArray[3]);

var suma = num1 + num2;
var resta = num1 - num2;
var producto = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

document.write("<p>Suma: " + suma + "</p>");
document.write("<p>Resta: " + resta + "</p>");
document.write("<p>Producto: " + producto + "</p>");
document.write("<p>División: " + division + "</p>");
document.write("<p>Módulo: " + modulo + "</p>");
