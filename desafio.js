/* desafios de logica
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

*/

/*
04
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.


let saldoCuenta = 3000;
alert(`Èl saldo de su cuenta es: $${saldoCuenta}`);

*/

/*
05
Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.

 let nombreUsuario =prompt("Ingrese su nombre");
 alert(`Bienvenido! ${nombreUsuario}`);


//Desafio 07 clase 03


Crea un contador que comience en 1 y vaya hast 10 usando un while lopp.
Muestra el valor del contador en cada iteración.


contador = 1;
while (contador <= 10)
{
    console.log(`El contador es: ${contador}`)
    contador++;
}

Desafio 02 clase 03
Crea un contador que comience en 10 y vaya hasta 0 usando un while loop.
Muestra el valor del contador en cada iteración.

let contador =10;
while (contador >= 0 )
{
    console.log(`El contador es: ${contador}`);
    contador--;
}

//Desafio 03 clase 03
Crea un programa de cuenta regresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
en la consola del navegador.


let numeroIngresado = prompt("ingresa un numero");
let contador = 0;
while(contador != numeroIngresado && numeroIngresado != null)
    {
        console.log(`El contador comienza en: ${numeroIngresado}`);
        if (numeroIngresado < 0)
        {
            numeroIngresado++;
        }
        else if (numeroIngresado > 0)
        {
            numeroIngresado--;
        }
    } 
if (contador == numeroIngresado)
{
    console.log(`El contador ha llegado a ${numeroIngresado}, fin de la cuenta regresiva`);
}

//Desafio 04 clase 03
Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
en la consola del navegador.


let numeroIngresado = prompt("Ingresa un numero");

if (numeroIngresado === null || numeroIngresado.trim() === "" || isNaN(parseInt(numeroIngresado))) {
    alert("No ingresaste un número válido. Saliendo del programa.");
} else {
    numeroIngresado = parseInt(numeroIngresado) + 1;
    let contador = 0;

    while (contador != numeroIngresado) 
    {
        console.log(`Contador es : ${contador}`);
        contador ++;
    }
}
    */