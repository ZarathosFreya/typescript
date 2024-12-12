import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

function main(){

    const t1 = new Transporte(5);
    t1.visualizar();

    const tr1 = new Terrestre(5, 4, 100);
    tr1.visualizar();

    const a1 = new Automovel(5, 4, 250, "Preto", 5, "XLP-4566", 5);
    a1.visualizar();
}

main();
// Testa herda de todas as classes. Automoveis (import) herda Terrestre (import) que herda Transporte (export). 