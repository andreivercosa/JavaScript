const escola = "Cod3r"

console.log(escola.charAt(4))//posição 4 da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//valor na tabela asc
console.log(escola.indexOf('3'))//retorna o indece 3 da string

console.log(escola.substring(1)) //retorna o conteudo do indice 1
console.log(escola.substring(0,3)) // retorna do indece 0 ao 2

console.log('Escola'.concat(escola).concat("!"))//concatenar string
console.log('Escola'+ (escola) + ("!"))
console.log(escola.replace(3, 'e')) 
console.log(escola.replace(/\d/, 'e')) //subistiuir todos os digitos do texto pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) //substituir todas as letras e digito pela letra 'e'

console.log('Ana,Maria,Pedro'.split(','))//separador 