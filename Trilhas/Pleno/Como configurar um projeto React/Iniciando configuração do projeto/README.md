# Iniciando configuração do projeto

Maravilha! Agora com o ambiente de desenvolvimento configurado, podemos iniciar nosso projeto, para isso precisamos criar uma pasta para o projeto, basta usar o seguinte código no Terminal do MAC, Linux ou Powershell:

```bash
mkdir project-name && cd project-name
```

Depois de criar e abrir a pasta precisamos iniciar o projeto, rodando o seguinte código:

```bash
yarn init -y
```

Com isso nosso projeto deve ser iniciado criando o arquivo package.json na raiz.

O arquivo package.json é resposável por conter as informações gerais sobre o projeto. por exemplo: nome, versão, arquivo principal, tipo de licença, dependências de projeto, dependências de desenvolvimento e entre outros.

```json
{
  "name": "project-name",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```
