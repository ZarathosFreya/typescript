import readlinesync = require('readline-sync')

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
  let numero = readlinesync.questionInt("Digite o número " + (i+1) + ":");
  numeros.add(numero);
}

console.log("Números únicos digitados:");
for (let numero of numeros) {
  console.log(numero);
}
let setOrdenado: Array<number> = Array.from(numeros).sort((a,b) => a - b);

console.table(setOrdenado);