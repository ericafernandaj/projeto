// Importa o módulo 'readline', que oferece uma interface para ler dados de entrada do usuário no terminal.
const readline = require('readline');

// Cria uma interface readline, utilizando a entrada padrão (stdin) e saída padrão (stdout).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cria um array vazio para armazenar as propriedades de CSS digitadas pelo usuário.
const properties = [];

// Função que irá prompt o usuário para digitar uma propriedade de CSS repetidamente.
function promptProperty() {
    // Pede ao usuário para digitar uma propriedade de CSS ou "SAIR" para finalizar.
    rl.question('Digite uma propriedade de CSS (ou digite "SAIR" para finalizar): ', answer => {
        // Converte a resposta do usuário para letras maiúsculas para não ser sensível a maiúsculas e minúsculas.
        if (answer.toUpperCase() === 'SAIR') {
            // Fecha a interface readline se o usuário digitar "SAIR".
            rl.close();
            // Chama a função para exibir as propriedades ordenadas.
            printSortedProperties();
        } else {
            // Adiciona a propriedade ao array de propriedades.
            properties.push(answer);
            // Chama recursivamente a função para permitir ao usuário adicionar mais propriedades.
            promptProperty();
        }
    });
}

// Função que imprime as propriedades de CSS ordenadas em ordem alfabética.
function printSortedProperties() {
    // Cria uma cópia ordenada do array de propriedades.
    const sortedProperties = properties.slice().sort();
    // Imprime um cabeçalho.
    console.log('Propriedades ordenadas:');
    // Itera sobre as propriedades ordenadas e imprime cada uma.
    sortedProperties.forEach(prop => {
        console.log(prop);
    });
}

// Inicia o processo chamando a função para prompt das propriedades.
promptProperty();