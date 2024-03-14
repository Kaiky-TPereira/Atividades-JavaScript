// Exercício 3
// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.

function letraAlta(palavra){
    alert(palavra.toUpperCase());
    
}

var palavra = prompt("Escreva uma palavra que vamos deixa ela em caixa alta: ");
letraAlta(palavra);