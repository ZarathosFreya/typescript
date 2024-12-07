const frutas: Set<string> = new Set<string>();

frutas.add("Banana");
frutas.add("Ameixa");
frutas.add("Kiwi");
frutas.add("Uva");
frutas.add("Pera");

console.table(frutas);

console.log("A fruta Morango existe? ", frutas.has("Morango"));

frutas.delete("Ameixa");

console.table(frutas)

let setOrdenado: Array<string> = Array.from(frutas).sort();
//para organizar
console.table(setOrdenado);