
var valor1 = prompt("Escreva o primeiro valor: ");
var valor2 = prompt("Escreva o segundo valor: ");

var escolha = prompt("O que você deseja fazer com esses dois valores: (1- somar, 2- subtrair, 3- multiplicar, 4- dividir) ")

if(escolha == 1 || escolha == "somar"){

    var somador = parseInt(valor1) + parseInt(valor2);
    alert(somador);
    console.log(somador)
}

if(escolha == 2 || escolha == "subtrair"){

    var subtrair = parseInt(valor1) - parseInt(valor2);
    alert(subtrair);
    console.log(subtrair)
}

if(escolha == 3 || escolha == "multiplicar"){

    var multiplicar = parseInt(valor1) * parseInt(valor2);
    alert(multiplicar);
    console.log(multiplicar)
}

if(escolha == 4 || escolha == "dividir"){

    var dividir = parseInt(valor1) / parseInt(valor2);
    alert(dividir);
    console.log(dividir)
}

