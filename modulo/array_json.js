/*****************************************************************************************************************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Lucas Kolle
 * Versão: 1.0.3.36
 ****************************************************************************************************************************************************************************/

/**
    [] -> representa um objeto do tipo ARRAY
    {} -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar com vários valores em um único objeto

        let nome  = "José"
        let nome2 = "Lucas"
        let nome3 = "João"

        indice:         0       1       2
        let nome  = ["José", "Lucas", "João"]

    JSON -> É um objeto na memória que permite trabalhar com CHAVE E VALOR

        let nome      = "José"
        let telefone  = "121214213"
        let email     = "asda@gmail.com"

        let cliente   = {"nome": "José", "telefone": "121214213", "email": "asda@gmail.com"}
 */


//formas de criar um ARRAY
const listaDeNomes  = ["José", "Maria", "João", "André", "Alex"] //criar atribuindo valores
const listaClientes = []                        //atribuir valores depois de criar (cria sem nada)

const exibirDados = function(){
    //Exibe o objeto array e seu conteúdo no terminal
    console.log(listaDeNomes)

    //Exibe o objeto array e seu conteúdo no teminal EM FORMA DE TABELA 
    console.table(listaDeNomes)

    //Exibe um valor especifico dentro do objeto principal (guiado pelo índice)
    console.log(listaDeNomes[1])

    //Retorna o tipo de dados de um índice do array
    console.log(typeof(listaDeNomes[2]))

    console.log("\n********* MANUAL *********")
    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)

    //Estruturas de repetição:
        //usando o while (enquanto)
        console.log("\n********* WHILE *********")
        let cont = 0 
        while(cont <= 4){
            console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
            cont = cont +1
        }

        //usando o for (para, durante...)
        console.log("\n********* FOR *********")
        for(let contador = 0; contador <=4; contador++){
            console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
        }

        //usando o for each (para cada elemento)
        console.log("\n********* FOR EACH *********")
        listaDeNomes.forEach(function(cliente){
            console.log(`O nome do cliente é: ${cliente}`)
        })

        //usando o for in (devolve o INDICE)
        console.log("\n********* FOR IN *********")
        for(indice in listaDeNomes){
            console.log(`O nome do cliente é: ${indice}`)
        }

        //usando o for of (devolve o conteúdo)
        console.log("\n********* FOR OF *********")
        for(cliente of listaDeNomes){
            console.log(`O nome do cliente é: ${cliente}`)
        }
}

exibirDados()