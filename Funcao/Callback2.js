const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem CallBack
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com CallBack
notasBaixas2 = notas.filter(function(nota){
    return nota <7
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const menorQ7 = nota => nota<7
notasBaixas4 = notas.filter(menorQ7)
console.log(notasBaixas4)