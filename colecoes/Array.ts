import readlinesync = require('readline-sync')
// criamos a coleção array vazia
const numeros: Array<number> = new Array<number>();
// adicionamos os valores na coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7);
// listamos os dados que foram adicionados
for(let numero of numeros){
    console.log(numero);
}

numeros.push(readlinesync.questionFloat('Digite um numero: '))
//para adicionar um  ou mais elementos para a coleção
numeros.unshift(2, 4.5, 8, 9)

console.table(numeros)

console.log("Existe o numero 5 no array?", numeros.includes(5))
console.log("Qual é o indice do numero 3 no array?", numeros.indexOf(3))

numeros.splice(numeros.indexOf(10), 1)
//para apagar elemento 10, o numero seguinte indica quantos numeros apagar, se colocasse 2, seria o elemento 10 e o proximo

console.table(numeros)