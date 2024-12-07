import readlinesync = require('readline-sync')

const cores: Array<string> = new Array<string>();


for (let i = 0; i < 5; i++) {
  const cor = readlinesync.question("Digite a cor numero " + (i + 1) + ":");
  cores.push(cor);
}

console.log("Cores digitadas:");
console.log(cores);

cores.sort();
console.log("Cores em ordem alfabética:");
console.log(cores);