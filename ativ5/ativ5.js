
// Exercício 5
// // Crie uma função que receba um valor e uma porcentagem como parâmetros.
//  A função deve retornar o valor somado à porcentagem indicada (ex: 100 + 50% = 150).

function somaPorcen(valor, porcentagem){
    var somatoria =  parseInt(valor) +((valor * porcentagem)/100);
    alert(somatoria);

}

var valor = prompt("Digite um valor");
var porcentagem = prompt("Digite o valor da porcentagem que cairá em cima do valor anterior");

somaPorcen(valor, porcentagem);


// let soma = parseInt(param1) + parseInt(param2);