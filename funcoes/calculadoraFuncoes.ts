import readlinesync = require('readline-sync')
import {colors} from "./../util/cores"

let num1: number;
let num2: number;
let opcao: number;

do{
    menu();

    opcao = readlinesync.questionInt()

    if (opcao ===0 ){
        about()
        process.exit(0)
    }
    
    switch(opcao){

        case 1:

            [num1, num2] = obterNumeros();
            console.log(`${num1} + ${num2} = ${somar(num1, num2)}`)
        break

        case 2: 
        [num1, num2] = obterNumeros();
        console.log(`${num1} - ${num2} = ${subtrair(num1, num2)}`)
        break;

        case 3:
            [num1, num2] = obterNumeros();
            console.log(`${num1} * ${num2} = ${multiplicar(num1, num2)}`)
        break;

        case 4:
            [num1, num2] = obterNumeros();

            let resultado = dividir(num1, num2);

            if (resultado !== null)
                console.log(`${num1} / ${num2} = ${resultado}`)
            else
                console.log("Nao existe divisao por zero!")
        break;
      
        default:
            console.log("Opcao Inavlida!")
    }
    

}while(true);

function menu(): void {
    console.log(colors.bg.black, colors.fg.green, "*******************************************************")
    console.log("                      Calculadora                      ")
    console.log("*******************************************************")
    console.log("                      1- Somar                         ")
    console.log("                      2- Subtrair                      ")
    console.log("                      1- Multiplicar                   ")
    console.log("                      4- Dividir                       ")
    console.log("                      0- Sair                          ")
    console.log("*******************************************************")
    console.log("Digite a opcao desejada:  ", colors.reset)
}

function obterNumeros(): [number, number]{
    const num1 = readlinesync.questionFloat('Digite o primeiro numero: ')
    const num2 = readlinesync.questionFloat('Digite o segundo numero: ')
    return[num1, num2]

}

function somar (num1: number, num2: number){
    return num1 + num2
}

function subtrair (num1: number, num2: number){
    return num1 - num2
}

function multiplicar (num1: number, num2: number){
    return num1 * num2
}

function dividir (num1: number, num2: number): number | null {
     let divisao = num1 / num2
     return (divisao !== Infinity ? divisao : null)
}

function about(){
    console.log("Criado por Andressa")
}