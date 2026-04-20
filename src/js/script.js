let nome = prompt("Insira seu nome: ");

let cadastros = 0;
let estoqueBaixo = 0;
let vinhoMaisAntigo = 0;
let menorSafra = 20;
let continuar = true;
let anoAtual = 2026;    



alert(`Cadastro realizado!\nSeja bem vindo ${nome}`);

console.log(`Olá ${nome}!\nAqui estão os vinhos cadastrados: `);

//cadastro de vinhos
alert(`Vamos cadastrar os Vinhos!`)
while (continuar){
    let nomeVinho = prompt("Nome do vinho:");
    let tipoVinho = prompt("Tipo do vinho:");
    let safraVinho = parseInt(prompt("Ano da safra:"));
       if ((anoAtual - safraVinho) <= 3){
        console.log('\nVINHO JOVEM!')
       };
       
       if (((anoAtual - safraVinho) < 8) && ((anoAtual - safraVinho) > 3)){
        console.log('\nVINHO AMADURECIDO!')
       };
       
       if (8 <= (anoAtual - safraVinho))  {
        console.log('\nVINHO ANTIGO!')
       };



    let estoqueVinho = parseInt (prompt("Quantidade em estoque:"));
       if (estoqueVinho < 5 ){
        estoqueBaixo++
       };

    let paisVinho = prompt(`País de origem:`);

    alert(`Nome do vinho: ${nomeVinho} \nTipo: ${tipoVinho} \nSafra: ${safraVinho} \nEstoque: ${estoqueVinho} \nPais: ${paisVinho}`);

    let resposta = prompt("Deseja cadastrar mais algum vinho? (s/n)").toLowerCase();
    if (resposta === "n") {
        continuar = false;
            alert('Confira os detalhes no console!');
    };
   
cadastros++


console.log(`Nome do vinho: ${nomeVinho} \nTipo: ${tipoVinho} \nSafra: ${safraVinho} \nEstoque: ${estoqueVinho} \nPais: ${paisVinho}`);


}

console.log(`Cadastros realizados: ${cadastros} \nVinhos com estoque baixo: ${estoqueBaixo}`)







// // Funções 

// // Função para validar entradas do usuário
// function validarEntrada(mensagem) {
//     let entrada = prompt(mensagem);

//     while (entrada === "" || entrada === "") {
//         alert("Campo obrigatório! Digite novamente.");
//         entrada = prompt(mensagem);
//     }

//     return entrada;

// }
// // Função de estoque baixo
// function verificarEstoqueBaixo(estoque) {
//     return estoque < 5;
// }

// function classificarVinho(safra) {
//     let anoAtual = 2026;
//     let idade = anoAtual - safra;

//     if (idade <= 3 ) {
//          return "jovem";
//     }
//     else if (idade <= 10) {
//         return "amadurecido";
//     } else {
//         return "antigo";
//     }
// }

// // Função para exibir dados do vinho
// function exibirDados(nome, tipo, safra, estoque, pais, classificacao) {
//     console.log(
//         `${nome}:
//         TIPO - ${tipo}
//         SAFRA - ${safra}
//         ESTOQUE - ${estoque}
//         PAÍS - ${pais}
//         CLASSIFICAÇÃO - ${classificacao}`
//     );
//     alert(`Vinho ${nome} cadastrado com sucesso! Classificação: ${classificacao}`);
// }