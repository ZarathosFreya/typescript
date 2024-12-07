import readlinesync = require('readline-sync')

let num1: number;
let num2: number;

num1 = readlinesync.questionFloat('Digite o primeiro numero: ')
num2 = readlinesync.questionFloat('Digite o segundo numero: ')

console.log("A soma dos 2 números é igual a", num1 + num2)
console.log("A subtração dos 2 números é igual a", num1 - num2)
console.log("A multiplicação dos 2 números é igual a", num1 * num2)
console.log("A divisão dos 2 números é igual a", num1 / num2)
