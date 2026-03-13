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
const listaDeNomes        = ["José", "Maria", "João", "André", "Alex", "Carlos", "Ana", "Bruna", "Jake", "José", "José da Silva"] //criar atribuindo valores
const listaClientes       = []                        //atribuir valores depois de criar (cria sem nada)
const listaDeFornecedores = []

//função para exibir os dados do ARRAY
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
        while(cont < listaDeNomes.length){
            console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
            cont = cont +1
        }

        //usando o for (para, durante...)
        console.log("\n********* FOR *********")
        for(let contador = 0; contador < listaDeNomes.length; contador++){
            console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
        }

        //usando o for each (para cada elemento)
        //retorna o conteúdo de cada elemento através de um CALL BACK
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

    //fim das estruturas de repetição.

    //lenght -> mostra a quantidaade de itens dentro do ARRAY
    console.log("\n********* EXIBIR QUANTIDADE DE ITENS DO ARRAY *********")
    console.log(listaDeNomes.length)
}

//funçaõ para manipular os dados
const manipularDados = function(){
    //Adicionando valores novos novos no ARRAY através do indice
    console.log("\n********* FORMA MANUAL *********")
    listaClientes[0] = "José da Silva"
    listaClientes[1] = "Maria da Silva"
    listaClientes[2] = "João da Silva"
    listaClientes[4] = "Maria Alex da Silva"

    console.log(listaClientes)

    //Permite adicionar novos valores no ARRAY, sempre no final da lista
    console.log("\n********* UTILIZANDO O PUSH *********")
    listaDeFornecedores.push("Luiz da Silva")
    listaDeFornecedores.push("Zezinho da Silva")
    listaDeFornecedores.push("Huguinho da Silva")
    listaDeFornecedores.push("Zezinho da Silva", "André da Silva", "Geovana da Silva")

    //Permite adicionar novos valores no ARRAY, sempre no inicio da lista
    console.log("\n********* UTILIZANDO O UNSHIFT *********")
    listaDeFornecedores.unshift(`Ana Carolina`)
    console.table(listaDeFornecedores)

    //Permite remover elementos do final da lista
    console.log("\n********* UTILIZANDO O POP *********")
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos do começo da lista
    console.log("\n********* UTILIZANDO O SHIFT *********")
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //Permite remover um elemento especifico, baseado no indice
    console.log("\n********* UTILIZANDO O SPLICE *********")
    listaDeFornecedores.splice(2,2) //A partir do indice x, remover y elementos = (x,y)
    console.table(listaDeFornecedores)

    //Permite adicionar um elemento especifico, baseado no indice
    console.log("\n********* UTILIZANDO O SPLICE *********")
    listaDeFornecedores.splice(2,0,"Carlos da Silva") //Apartir do indice x, remover y (nesse caso não foi removido ninguém, apenas adicionado), adicionar z = (x,y,z)
    console.table(listaDeFornecedores)
}

//função para remover um item expecifico do ARRAY
const removerItem = function(nome){

//Usando o for in
        //descobrindo o indice do elemento expecifico usando uma estrutura de repetição
        //ele percorre o ARRAY até achar um conteúdo que seja igual ao nome digitado
        //for(indice in listaDeNomes){
            
            //if(listaDeNomes[indice] == nome){ //se o conteúdo do indice for igual ao nome digitado ele entra aqui
                //apagando o elemento
                //listaDeNomes.splice(indice,1) //apagar 1 elemento a partir do item digitado
            //}
        //}

    //Usando o indexOf()
        //Retorna o indice de um elemento fazendo a busca pelo valor
        //Se o indexOf() não encontrar conteúdo ele devolve -1
        let indice = listaDeNomes.indexOf(nome)

        if(indice != -1){
            listaDeNomes.splice(indice,1)
            return true
        }else{
            return false
        }
}

//função para verificar a existencia de um item no ARRAY
const verificarItem = function(nome){
    //Verifica a existencia de um conteúdo de uma lista (retorna TRUE / FALSE)
    return listaDeNomes.includes(nome)
}

//função que conta a quantidade de itens com um valor especifico
const quantidadeItens = function(nome){

    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont = cont +1
    })

    return cont
}

manipularDados()