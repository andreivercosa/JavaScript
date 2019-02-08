const funcs = []

for(var i = 0; i<5; i++){

    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()//vai sempre retornar o ultimo valor de i
