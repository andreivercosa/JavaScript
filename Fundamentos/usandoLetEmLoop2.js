const funcs = []

for(let i = 0; i<5; i++){

    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()//vai retonar o valor de 1 para a posição solicitada
funcs[3]()