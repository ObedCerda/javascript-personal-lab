
let numeroSecreto = 7;
let numeroUsuario = prompt("Ingresa tu numero entre 1 y 10");


console.log("El numero ingresado por el usuario es: " + numeroUsuario);

if (numeroUsuario == numeroSecreto) // Compara el numero ingresado por el usuario con el numero secreto
{
    console.log("Felicidades, has acertado el numero secreto");
}

else 
{
    console.log("Lo siento, el numero secreto era: " + numeroSecreto);
}