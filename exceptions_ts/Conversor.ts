try{
const resultado = converte('abc')

console.log(resultado)
}catch(error: any){
    if(error instanceof TypeError)
        console.error("Voce digitou um valor que não é do tipo string!")
    else
    console.error("Erro Insperado!", error.message)
} finally{
    console.log("Programa Finalizado!")
}
export function converte(conteudo: any): string {
    return conteudo.toUpperCase()
}