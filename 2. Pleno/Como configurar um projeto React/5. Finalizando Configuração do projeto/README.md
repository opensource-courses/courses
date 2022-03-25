## Finalizando Configuração do projeto

Depois de baixado as dependências e configurado os primeiros arquivos(webpack.config.js e babel.config.js) teremos um package.json parecido com o apresentado abaixo:

```json
{
  "name": "setup-react-project", // Nome do projeto
  "version": "1.0.0", // Versão do projeto
  "main": "index.jsx", // Arquivo principal
  "license": "MIT", // Licença do projeto
  "dependencies": {
    // Lista de dependências
    "node-sass": "^7.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    // Lista de dependências de desenvolvimento
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "cross-env": "^7.0.3",
    "css-loader": "^6.6.0",
    "html-webpack-plugin": "^5.5.0",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}
```

E podemos criar nossos **scripts**, que são atalhos para comandos de terminal, vamos criar o script para o comando que tem como objetivo rodar nosso projeto em ambiente de desenvolvimento e ambiente de produção.

```json
{
  "name": "setup-react-project",
  "version": "1.0.0",
  "main": "index.jsx",
  "license": "MIT",
  "scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "dependencies": {
    "node-sass": "^7.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "cross-env": "^7.0.3",
    "css-loader": "^6.6.0",
    "html-webpack-plugin": "^5.5.0",
    "sass-loader": "^12.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}
```

Agora podemos finalizar a configuração do React, criando o HTML raiz do projeto, para isso criamos uma pasta chamada **public/** na raiz do projeto, essa pasta é reponsável pro apresentar os arquivos de forma pública, após isso criamos o arquivo **index.html** dentro da pasta public, com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>

  <body>
    <!-- Elemento do html no qual será renderizado a aplicação React -->
    <div id="root"></div>

    <!-- Código fonte do projeto convertido pelo babel e webpack -->
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

Agora podemos criar, nossa pasta **src/** que é responsável por conter todos os arquivos e códigos referente a aplicação.

Primeiro criamos nosso arquivo **index.jsx**, que tem como objetivo fazer a ponte entre o arquivo App.jsx, que vamos criar em seguida, com o arquivo index.html, renderizando nosso JSX dentro da DOM do HTML, da forma apresentado abaixo:

```jsx
import React from "react"; // Importação do react
import { render } from "react-dom"; // Importação de render(), função responsável por renderizar componentes React como filho de um elemento HTML.
import { App } from "./App"; // Componente App

render(<App />, document.getElementById("root")); // Renderizando o componente App como filho do elemento HTML com o id root.
```

Agora podemos criar o arquivo **App.jsx**, que nada mais é o ponto de partida da nossa aplicação React.

```jsx
import React from "react";

import "./styles/global.scss";

export const App = () => {
  return <h1>Hello React.js</h1>;
};
```

Parabens dev!! Você aprendeu como funciona a configuração de uma aplicação profissional e escalável, utilizando React, Babel, Webpack, Sass e entre outras ferramentas.

Você também pode gerar todo o projeto configurado utilizando o [create-react-app](https://github.com/facebook/create-react-app) ou utilizar uma ferramenta mais moderna, por exemplo o [vite](https://vitejs.dev/).

Confira todo o projeto configurado em: [odenirdev/como-configurar-um-projeto-react](https://github.com/odenirdev/como-configurar-um-projeto-react)

Próximos anteriores:

- [1. Iniciando configuração do projeto](/2.%20Pleno/Como%20configurar%20um%20projeto%20React/1.%20Iniciando%20configuração%20do%20projeto.md)
- [2. Instalando React e Babel](/2.%20Pleno/Como%20configurar%20um%20projeto%20React/2.%20Instalando%20React%20e%20Babel.md)
- [3. Configurando Webpack](/2.%20Pleno/Como%20configurar%20um%20projeto%20React/3.%20Configurando%20Webpack.md)

## Referências

Para desenvolver o conteúdo dessa artigo foi utilizado como referência o 1° Módulo do 1 Capítulo da trilha React do Ignite curso da [Rocketseat](https://www.rocketseat.com.br/).
