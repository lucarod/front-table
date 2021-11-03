# 💻 Front Table

Uma maneira fácil e intuitiva de visualizar os dados dos funcionários de sua empresa!

<br>

![image](https://user-images.githubusercontent.com/42809136/127918010-79b5d883-df57-4c6d-8a2a-43e220d3c703.png)

<br>

# 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Day.js](https://day.js.org)
- [Axios](https://axios-http.com)
- [Sass](https://sass-lang.com)
- [JSON-Server](https://github.com/typicode/json-server)
- [String Mask](https://github.com/the-darc/string-mask)
- [React Spinner](https://github.com/davidhu2000/react-spinners)

<br>

# 🚀 Getting Started

Para acessar rapidamente a aplicação, você pode conferir ela rodando hospedada no Netlify: <br> https://front-table.netlify.app/

Ou, se preferir conferir o projeto em seu computador, siga adiante.

## Pré-requisitos

Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).

## Rodando a aplicação

Para iniciar o projeto, siga o passo-a-passo abaixo. 

Os dados estão disponíveis em https://front-table-json-server.herokuapp.com, porém, para obtê-los ao rodar o projeto em modo de desenvolvimento (yarn dev), você deve utilizar o json-server incluído no projeto.

Caso não tenha familiaridade com o [json-server](https://github.com/typicode/json-server):

1. Baixe este projeto em sua máquina ou use o comando abaixo na sua pasta de preferência:
```bash
$ git clone https://github.com/lucarod/front-table.git
```

2. Entre no projeto
3. Execute os comandos abaixo no terminal

```bash
# Instalar as dependências
$ yarn

# Executar o json-server
$ yarn json-server --watch server.json

# Abra um novo terminal e digite
$ yarn dev
```

5. Depois, abra seu browser em http://localhost:3000 e pronto, você terá o projeto rodando! 🥳🎉🎊

<br>

# 📖 Dev Logs

- Dia 1: Iniciei o desenvolvimento da base do design e estruturação do projeto, ao fim havia terminado todo o HTML e CSS exceto pela estilização da tabela.

- Dia 2: Terminei o CSS da tabela e comecei a escrever a lógica para formatação dos dados. Day.js e String Mask (uma lib bem interessante e pouco conhecida) ajudaram bastante nessa etapa. Comecei a fazer a lógica de filtragem e então comecei o deploy para o Netlify (Front) e Heroku (API). Começou o problema de baseURL, que viria a se repetir mais tarde.

- Dia 3: Comecei com algumas refatorações para melhorar a responsabilidade única de cada componente, fazendo a request dos dados no Contexto de Filtragem e depois enviando para os componentes os dados já formatados. Melhorei a filtragem para um ótimo estado, porém ainda faltavam algumas alterações a serem feitas para ficar mais acessível. Também melhorei a responsividade e UX do projeto. Mais problemas com baseURL me motivaram a querer utilizar variáveis de ambiente.

- Dia 4: Finalmente adicionei suporte a variáveis de ambiente com .env.development e .env.production. Como não são dados sensíveis, estão disponíveis no repositório. Melhorei ainda mais a filtragem, e agora aceita nomes mesmo sem o acento nas letras acentuadas. Adicionei um spinner enquanto os dados estão sendo carregados e, por fim, refatorei o código para uma etapa satisfatória e legível.

- Dia 5: Criei toda a base para a ordenamento de colunas em uma branch separada para a feature. Tirei o bruto de filtragem e ordenamento dos dados do contexto para a pasta utils, para melhorar a leitura. Ainda há alguns problemas para que filtragem e ordenamento funcionem adequadamente.

- Dia 6: Finalizei a lógica da feature de ordenamento de colunas, com opção de ordem crescente e decrescente com ícones representando tais estados. Comecei a dar os toques finais em refatoração do código. Adaptei melhor o font-size e o padding para dispositivos móveis e então refatorei alguns detalhes da main para ficarem iguais aos da branch. Dia final do projeto, preparo para o envio com esse último log. No geral, desenvolver o projeto foi muito divertido e engajante, dou meus parabéns pela elaboração do teste.

<br>

# 📄 Sobre o projeto

\*\* Trecho retirado do README do repositório original

Este projeto foi desenvolvido para o teste técnico para Desenvolvedor Front-end Júnior da BeMobile.

Nesse teste, foi montada uma tabela com as informações que vem de uma API simulada escrita em json-server, agora também disponível por meio de um link no Heroku.

Esta tabela contém as seguintes colunas: Foto, Nome, Cargo, Data de Admissão e Telefone, com todos os dados devidamente formatados e apresentados como estava no Figma. Além disso,
era necessário ter a possibilidade de realizar uma pesquisa na tabela por um input.

Para acessar o Figma do projeto [clique aqui](https://www.figma.com/file/y9qJNNAckFRL7LNoyNjpv8/Teste---Be-mobile).

## Regras

Para realizar o teste, devia-se utilizar React ou Vanilla JS (JavaScript puro). Foi permitido utilizar libs externas, mas foi pedido que se utilizasse o mínimo possível, para que fosse possível avaliar melhor o teste.

## O que é avaliado?

São avaliados os itens listados abaixo, em ordem de relevância.

1. Lógica de programação
2. Organização (código e arquivos)
3. CSS
4. README, deve conter pelo menos as seguitnes informações: Sobre, Pré-requisitos, Rodando a aplicação.
