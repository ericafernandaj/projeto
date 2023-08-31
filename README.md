# README - Projeto Prompt de Propriedades CSS

Este projeto permite ao usuário digitar propriedades CSS, e exibe essas propriedades em ordem alfabética.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema.
    Link baixar o node: `https://nodejs.org/pt-br/download`
2. Faça o download dos arquivos do projeto ou clone o repositório.
    Como clonar um repositório do git: `https://docs.github.com/pt/github-ae@latest/repositories/creating-and-managing-repositories/cloning-a-repository`
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências.

## Utilização

1. No terminal, execute o comando `node index.js` para iniciar o programa.
2. Digite uma propriedade de CSS quando solicitado, sem aspas ou caracteres especiais.
3. Para finalizar a entrada de propriedades, digite "SAIR" e pressione Enter.
4. O programa exibirá as propriedades digitadas em ordem alfabética.

## Exemplo

Digite uma propriedade de CSS (ou digite "SAIR" para finalizar): background-color
Digite uma propriedade de CSS (ou digite "SAIR" para finalizar): margin
Digite uma propriedade de CSS (ou digite "SAIR" para finalizar): padding
Digite uma propriedade de CSS (ou digite "SAIR" para finalizar): SAIR

Propriedades ordenadas:
background-color
margin
padding

## Notas

- O programa é sensível a maiúsculas e minúsculas, portanto, "Background-Color" e "background-color" seriam tratados como propriedades diferentes.
- As propriedades são armazenadas em um array e serão perdidas quando o programa for encerrado.
- O programa utiliza o módulo `readline` do Node.js para ler as entradas do usuário no terminal.