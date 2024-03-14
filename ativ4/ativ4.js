// Exercício 4
// Implemente uma função que inverta a ordem dos elementos em um array.

function inverter(valores){
    valores.reverse()
    alert(valores);
}

var valores = [];
valores[0] = prompt("Digite o valor");
valores[1] = prompt("Digite o valor");
valores[2] = prompt("Digite o valor");
valores[3] = prompt("Digite o valor");
alert(valores);
inverter(valores);