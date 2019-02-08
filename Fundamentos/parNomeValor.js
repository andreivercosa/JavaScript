//par nome/valor
const saudacao = 'Opa'//contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}

//Objetos são grupos aninhado de pares nome/valor
const cliente={
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Barão do rio Branco',
        numero: 123
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)