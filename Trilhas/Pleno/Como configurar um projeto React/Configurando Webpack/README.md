# Configurando Webpack

O Webpack é responsável pelo gerenciamento de importações de arquivos no js, por exemplo arquivos .sass, .png e .json, convertendo as importações de arquivos no js para tipos de arquivos estáticos entendíveis pelo navegador.

Ele também trabalha junto com o Babel, para que todos os navegadores entendam as importações.

Primeiro precisamos instalar o próprio webpack, webpack-cli que traz os comandos de linhas de comando que rodam no terminal.

```bash
yarn add webpack webpack-cli -D
```

Depois precisamos instalar os loaders, que segundo a própria [documentação do webpack](https://webpack.js.org/concepts/) são pré-processadores de arquivos, que traz todo o entendimento de qualquer tipo de arquivo para dentro do webpack.

Primeiro vamos instalar o babel-loader que traz a integração do babel com o webpack e o pré-processamento dos arquivos Javascript.

```bash
yarn add babel-loader -D
```

Também vamos instalar os pré-processadores de estilos e de arquivos css, que trabalham de forma conjunta para pré-processar arquivos css.

```bash
yarn add style-loader css-loader -D
```

Caso queria utilizar algum framework css para melhorar a experiência de estilização, por exemplo o [Sass](https://sass-lang.com/), podemos instalar o próprio Sass para Nodejs e o seu loader para o pré-processamento feito pelo Webpack.

```bash
yarn add node-sass sass-loader -D
```

E pronto finalizamos a parte dos loaders, agora podemos seguir instalando a lib html-webpack-plugin que tem como objetivo configurar a injetação do arquivo bundle.js gerado pelo webpack em um arquivo desejado, neste caso no public/index.html.

```bash
yarn add html-webpack-plugin -D
```

Para finalizar as instalações para configuração do webpack, vamos instalar a lib webpack-dev-server que traz a função de assistir(watch) os arquivos do projeto em ambiente de desenvolvimento e cross-env que auxilia na definição de variaveis de ambiente independente do sistema operacional que irá rodar a aplicação.

```bash
yarn add webpack-dev-server cross-env -D
```

Agora podemos criar o arquivo de configuração do webpack, para isso criamos um arquivo na raiz do projeto chamado **webpack.config.js**.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production"; // Seleciona qual ambiente a aplicação está

module.exports = {
  mode: isDevelopment ? "development" : "production", // Aplica qual ambiente que a aplicação está e como o código bundle deve ser gerado
  devtool: isDevelopment ? "eval-source-map" : "source-map", // Ferramenta que gera a visualização do código no inspecionar do browser
  entry: path.resolve(__dirname, "src", "index.jsx"), // Caminho para o arquivo de entrada do projeto
  output: {
    // Arquivo de saída do processamento do webpack.
    path: path.resolve(__dirname, "dist"), // Caminho no qual o arquivo de saída deve ficar
    filename: "bundle.js", // Nome do arquivo de saída.
  },
  resolve: {
    extensions: [".js", ".jsx"], // Extenções dos arquivos que o webpack deve gerenciar
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // Plugin para injetar o arquivo bundle.js gerado pelo webpack no public/index.html
    }),
  ],
  devServer: {
    // Configração do webpack-dev-server.
    static: {
      directory: path.resolve(__dirname, "public"), // Aponta para a pasta aonde está o arquivo index.html
    },
  },
  module: {
    // Regras de tratamento do webpack
    rules: [
      // Regra para entender e converter arquivos jsx
      {
        test: /\.jsx$/, // Buscar todos os arquivo que terminam em .jsx
        exclude: /node_modules/, // Menos os arquivo que estão na pasta node_modules
        use: "babel-loader", // E use o babel-loader para converter o arquivo em uma versão que qualquer outro navegador conheça
      },
      // Regra para entender e converter arquivos css
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
```