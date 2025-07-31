
let numeroSecreto = 7;
let numeroUsuario = prompt("Ingresa tu numero entre 1 y 10");


console.log("El numero ingresado por el usuario es: " + numeroUsuario);

if (numeroUsuario == numeroSecreto) // Compara el numero ingresado por el usuario con el numero secreto
{
    //Con concatenacion
    //console.log("Felicidades, has acertado el numero secreto");
    //Asi se hace con Template Strings
    console.log(`Felicidades, has acertado, tu numero es: ${numeroUsuario}`);
}

else 
{
    //Con concatenacion
    console.log("Con Concatenación \nLo siento, el numero secreto era: " + numeroSecreto);
    //Con template strings
    console.log(`Con Template String \nLo siento, el numero secreto era: ${numeroSecreto}`);
}

 