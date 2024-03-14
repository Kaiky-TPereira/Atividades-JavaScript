// Exercício 6
// Crie uma função que recebe uma string como parâmetro, essa função deve retornar a mesma string mas na ordem inversa 
// (Ex: "Eu Estou Invertido" -> "oditrevnI uotsE uE") Obs: pesquisar sobre split() e join()

function inverter(palavra){

    var words = palavra.split("");
    console.log(words);

    var reverso = words.reverse(words);

    return reverso;

}

var palavra = prompt("Escreva algo que vamos inverter essa palavra: ");

alert(inverter(palavra).join(""));
console.log(inverter(palavra).join(""));
