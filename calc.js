let resultado = rank(73, 29)

console.log("O Héroi tem um saldo de " + resultado + " vitórias e está no nivel de Prata")


function rank(vitoria, derrota){
    let somatorio = vitoria - derrota
    return somatorio
}

