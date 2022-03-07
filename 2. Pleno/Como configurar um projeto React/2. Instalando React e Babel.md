## Instalando React

Depois de inicar o projeto, podemos instalar nossa primeira dependência, o próprio React.

O React é um ecosistema de desenvolvimento de aplicações, utilizado para diversos tipos de dispositivos e que abstrai todo o desenvolvimento de app de uma forma intuitiva e divertida, utilizando os conceitos de componentização, props, hooks, styled-components e muitas outras funcionalidades.

Caso queria saber mais sobre o React, segue o link para [documentação](https://pt-br.reactjs.org/).

Para instalar o react e o react-dom que traz ferramentas para utilizar o react junto com a arvore DOM do HTML, basta rodar o código abaixo no terminal:

```bash
yarn add react react-dom
```

## Instalando Babel

O Babel é responsável pela transpilação do código js para que todos os navegadores entendam.

Para o funcionamento correto e integração com o react precisamos instalar as seguintes dependências:

- O próprio Babel como @babel/core;
- @babel/cli, que traz as linhas de comando do babel
- @babel/preset-env, que traz a identificação do navegador que está executando a aplicação e converte o código adequado para esse ambiente
- @babel/preset-react /, que traz toda a adequação para que o babel entenda um código react, tudo instalado como dependência de desenvolvimento.

E conseguimos instalar todas essas dependências, utilizando o código abaixo:

```bash
yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react -D
```

Depois de instalar todas as dependências nessas para a integração do babel com o react, precisamos configurá-la criando um arquivo chamado **babel.config.js** na raiz do projeto e configurando da seguinte forma:

```js
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

Próximos anteriores:

- [1. Iniciando configuração do projeto](/2.%20Pleno/Como%20configurar%20um%20projeto%20React/1.%20Iniciando%20configuração%20do%20projeto.md)

Próximos passos:

- [3. Configurando Webpack](/2.%20Pleno/Como%20configurar%20um%20projeto%20React/3.%20Configurando%20Webpack.md)
- [4. Finalizando Configuração do projeto](/2.%20Pleno/Como%20configurar%20um%20projeto%20React/4.%20Finalizando%20Configuração%20do%20projeto.md)
