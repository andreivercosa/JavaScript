const funcs = []

for(var i = 0; i<5; i++){

    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()