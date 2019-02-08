{
    {
        {
            var sera = 'Será???'//variavel var criada pode ser acessada em qualquer lugar da função 
        }
    }
}
console.log(sera)

function test(){
    var local =123 // variavel var declarada dentro de uma função só poder ser acessada dentro da função
    console.log(local)
}
test()
console.log(local)