import readlinesync = require('readline-sync')

class PilhaLivros {
    private pilha: string[] = [];

    adicionarLivro(livro: string) {
        this.pilha.push(livro);
        console.log(`Livro "${livro}" adicionado à pilha.`);
    }

    listarLivros() {
        if (this.pilha.length === 0) {
            console.log("A pilha está vazia.");
        } else {
            console.log("Livros na pilha:");
            this.pilha.forEach((livro, index) => {
                console.log(`${index + 1}. ${livro}`);
            });
        }
    }

    retirarLivro() {
        if (this.pilha.length === 0) {
            console.log("A pilha está vazia.");
        } else {
            const livroRemovido = this.pilha.pop();
            console.log(`Livro "${livroRemovido}" retirado da pilha.`);
        }
    }
}

const pilha = new PilhaLivros();

function menu() {
    console.log("\n--- Sistema de Pilha de Livros ---");
    console.log("1. Adicionar Livro");
    console.log("2. Listar Livros");
    console.log("3. Retirar Livro");
    console.log("0. Sair");

    const opcao = Number(readlinesync.question("Digite a opção desejada:"));

    switch (opcao) {
        case 1:
            const livro = readlinesync.question("Digite o nome do livro:");
            pilha.adicionarLivro(livro);
            break;
        case 2:
            pilha.listarLivros();
            break;
        case 3:
            pilha.retirarLivro();
            break;
        case 0:
            console.log("Encerrando o programa.");
            break;
        default:
            console.log("Opção inválida.");
    }

    if (opcao !== 0) {
        menu();
    }
}

menu();