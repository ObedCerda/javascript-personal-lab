// desafios de logica
/*
//Muestra una alerta con el mensaje "¿Bienvenido a nuestro sitio web"
alert("Bienvenido a nuestro sitio web");
// Declara una variable llamada nombre y asignale el valor "Lua"
let nombre = "Lua";
// Crear una variable llamada edad y asignale el valor 25
let edad = 25;
// Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;
// Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;
console.log("Edad: " + edad);
console.log("Nombre: " + nombre);
console.log("Numero de ventas: " + numeroDeVentas);
console.log("Saldo disponible: " + saldoDisponible);

// Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("Error completa los campos");
// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos".
//  Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeDeError = "Error completa los campos";
alert(mensajeDeError);
// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
let nombreIngresado = prompt("Ingresa tu nombre");
// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edadIngresada = prompt("Ingresa tu edad");
//  Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje
//  "¡Puedes obtener tu licencia de conducir!"
if (edadIngresada >= 18){
    alert("Puedes obetener tu licencia de conducir");
}
*/

//Desafio 09 clase 02
/*01 Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".

let diaSemana = prompt("Que dia de la semaana es hoy?");
if (diaSemana.toLowerCase() === "sabado" || diaSemana.toLowerCase() === "domingo")
{
    alert("buen fin de semana");
}
else
{
    alert("Buena Semana");
}
*/
//02
/*Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.



numIngresado = prompt("ingrese un numero positivo o negativo");
if (numIngresado >= 0)
{
    alert("numero positivo");
}
else if (numIngresado < 0)
{
    alert("numero negativo");
}
else
{
    alert("Error, ingrese un numero valido");
}

*/


/*03
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/
let puntuacion = prompt("Ingresa tu puntuación");
if (puntuacion >= 100)
{
    alert("Felicidades, has ganado");
}
else if (puntuacion < 100)
{
    alert("intentalo nuevamente para ganar");
}
else
{
    alert("Error, ingresa una puntuación válida");
}

