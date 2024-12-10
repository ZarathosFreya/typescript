import readlinesync = require('readline-sync')

interface Cliente {
    nome: string;
}

class FilaBanco {
    private fila: Cliente[] = [];

    adicionarCliente(nome: string) {
        this.fila.push({ nome });
        console.log(`Cliente ${nome} adicionado à fila.`);
    }

    listarClientes() {
        if (this.fila.length === 0) {
            console.log("A fila está vazia.");
        } else {
            console.log("Clientes na fila:");
            this.fila.forEach((cliente, index) => {
                console.log(`${index + 1}. ${cliente.nome}`);
            });
        }
    }

    chamarProximoCliente() {
        if (this.fila.length === 0) {
            console.log("A fila está vazia.");
        } else {
            const proximoCliente = this.fila.shift();
            console.log(`Chamando ${proximoCliente?.nome}!`);
        }
    }
}

const fila = new FilaBanco();

function menu() {
    console.log("\n--- Sistema de Fila de Banco ---");
    console.log("1. Adicionar Cliente");
    console.log("2. Listar Clientes");
    console.log("3. Chamar Próximo Cliente");
    console.log("0. Sair");

    const opcao = Number(readlinesync.question("Digite a opção desejada:"));

    switch (opcao) {
        case 1:
            const nome = readlinesync.question("Digite o nome do cliente:");
            fila.adicionarCliente(nome);
            break;
        case 2:
            fila.listarClientes();
            break;
        case 3:
            fila.chamarProximoCliente();
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