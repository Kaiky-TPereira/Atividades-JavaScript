function parOUimpar(valor){
    if(valor % 2 == 0){
        valor = alert("É par");
    }
    else{
        valor = alert("É ímpar")
    }
}

var valor = prompt("Digite um valor que vamos verificar se ele é ímpar ou par: ")
parOUimpar(valor);
