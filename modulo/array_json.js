/*****************************************************************************************************************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Lucas Kolle
 * Versão: 1.0.3.26
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

//função que cria dados do Json
const criandoDadosJson = function(){

    //criando e adicionando os dados do JSON
    console.log("\n********* EXIBIR O OBJETO JSON COMPLETO *********")

    let aluno = {"nome": "José", "ra": 123456, "telefone": "9725367839", "email": "josé@gmail.com"}
    console.log(aluno)
    console.table(aluno)

    //mostrando um atributo específico
    console.log("\n********* EXIBIR UM ATRIBUTO ESPECÍFICO *********")
    console.log(aluno.nome)
    console.log(aluno.email)

    //adcionando um atributo após o objeto criado
    console.log("\n********* ADICIONA UM ATRIBUTO NOVO *********")
    aluno.sexo = "Masculino"
    console.log(aluno)

    //apagando um atributo específico do objeto
    console.log("\n********* APAGA UM ATRIBUTO ESPECÍFICO *********")
    delete aluno.telefone
    console.log(aluno)
}

//função para cadastrar produtos 
const cadastroDeProdutos = function(){

    //criando o objeto ARRAY que guarda as cores do produto em JSON
    let cores = [
        {"id": 1, "cor": "Branco"}, //Indice 0
        {"id": 2, "cor": "Preto"}, //Iindice 1
        {"id": 3, "cor": "Azul"}, //Iindice 2
        {"id": 4, "cor": "Rosa"}, //Iindice 3
        {"id": 5, "cor": "Cinza"} //Iindice 4
    ]

    //criando o objeto ARRAY que vai guardar as marcas do produto em JSON
    let marcas = [
        {"id": 1, "marca": "LG",            "telefone": "343456758",    "email": "lg@gmail.com"}, //Indice 0
        {"id": 2, "marca": "Dell",          "telefone": "282837494",    "email": "dell@gmail.com"}, //Indice 1
        {"id": 3, "marca": "Lenovo",        "telefone": "396958378",    "email": "lenovo@gmail.com"}, //Indice 2
        {"id": 4, "marca": "Apple",         "telefone": "099498576",    "email": "apple@gmail.com"}, //Indice 3
        {"id": 5, "marca": "Rayzer",        "telefone": "384958673",    "email": "rayzer@gmail.com"}, //Indice 4
        {"id": 6, "marca": "Logitech",      "telefone": "738495039",    "email": "logitech@gmail.com"}, //Indice 5
        {"id": 7, "marca": "Multilaser",    "telefone": "73847586",     "email": "multilaser@gmail.com"} //Indice 6
    ]

    let produtos = [
        {
            "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
            "marca": [
                marcas[2].marca
            ],
            "qtde": 20,
            "cor": [ // mandadndo o objeto JSON completo 
                cores[4],
                cores[1]
            ],
            "valor": 880.50
        },

        {
            "id": 2,
            "nome": "Teclado",
            "descricao": "Teclado mecânico RGB",
            "marca": [
                marcas[0].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },

        {
            "id": 3,
            "nome": "Mouse",
            "descricao": "Mouse sem fio",
            "marca": [
                marcas[0].marca,
                marcas[1].marca,
                marcas[5].marca,
            ],
            "qtde": 500,
            "cor": [
                cores[0],
                cores[1],
                cores[4],
            ],
            "valor": 80
        }
    ]

    console.log("\n********* EXIBINDO O CONTEÚDO DO ARRAY USANDO O FOR EACH *********")
    //percorrendo o ARRAY "produtos" para exibir o conteúdo desejado
    produtos.forEach(function(itemProduto){
        console.log("\n")
        //vai exibir apenas o nome do produto sem colocar o ".nome" ele não consegue acessar o JSON para pegar o nome ou qualquer outro conteúdo desejado
        console.log(`Produto: ${itemProduto.nome}`)

        //percorre o objeto de marca dentro de cada produto, para trazer as marcas
        itemProduto.marca.forEach(function(itemMarca){
            console.log(`Marca: ${itemMarca}`)
        })

        //percorre o objeto de cor dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function(itemCor){
            console.log(`cor: ${itemCor.cor}`)
        })
    })


    console.log("\n********* PESQUISANDO UM ITEM PELO NOME *********")
    //pesquisando um produto pelo nome
    let nome = "Mouse"

    //percorrendo ARRAY
    produtos.forEach(function(itemProduto){

        if(String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase()){
            console.log(itemProduto)
        }
    })

    console.log("\n********* PESQUISANDO UM ITEM PELA COR *********")
    //pesquisando um item pela cor
    let cor = "Branco"
    let status = false

    produtos.forEach(function(itemProduto){

        //percorrendo o ARRAY de cores para conseguir fazer o if / else
        itemProduto.cor.forEach(function(itemCor){

            if(String(itemCor.cor).toUpperCase() == String(cor).toUpperCase()){
                console.log(itemProduto)
                status = true
            }
        })
    })

    //condicional para exibir mensagem caso não haja nenhuma cor igual à pesquisada
    if(!status)
        console.log("Item pesquisado não foi encontrado!")
}

cadastroDeProdutos()