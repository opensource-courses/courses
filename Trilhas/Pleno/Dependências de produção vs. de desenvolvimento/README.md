# Dependências de produção vs. de desenvolvimento

![Banner da postagem](images/dependencias-de-producao-vs-de-desenvolvimento.png)

Em projetos Node, é fundamental distinguir entre dois tipos de dependências: "dependencies" e "devDependencies". Essas propriedades desempenham um papel crucial ao listar as dependências que seu projeto requer, seja para operar em ambiente de produção ou no contexto de desenvolvimento. Vamos entender neste artigo a diferenças e como instalar no tipo de dependências desejável.

## Dependências de produção

São aquelas dependências que precisam estar em produção para que seu projeto funcione. Por exemplo, o framework Tailwind CSS se enquadra nessa categoria. Para instalar um pacote de produção, basta utilizar o seguinte comando no seu terminal:

```js
npm install <pacote> --save
```

Ao executar este comando, o pacote é automaticamente registrado no arquivo package.json, na seção de "dependencies" (a partir do npm 5 em diante; anteriormente, você precisava especificar manualmente com a opção --save).

```js
"dependencies": {
  "pacote": "^0.1.1"
}
```

Quando você instala um pacote usando o comando "npm install pacote", ele é configurado como uma dependência de produção por padrão.

## Dependências de desenvolvimento

As dependências de desenvolvimento consistem em pacotes que não precisam ser incluídos na produção do seu projeto. Esses módulos são utilizados exclusivamente durante o processo de desenvolvimento, auxiliando em tarefas como testes, pré-processamento, webpack ou Babel.

Para adicionar uma dependência de desenvolvimento ao arquivo package.json, você pode simplesmente utilizar a flag "-D" ou "--save-dev," como exemplificado abaixo:

```js
npm install <pacote> --save-dev
```

Ao utilizar essa flag, o pacote é registrado no arquivo package.json sob a seção de "devDependencies."

```js
"devDependencies": {
  "pacote": "~0.1.1"
}
```

Este procedimento torna claro que o pacote é destinado apenas para uso em ambiente de desenvolvimento, proporcionando uma gestão limpa e eficaz das dependências do projeto.

## Circunflexo e til

Dentro dessas duas estruturas, um padrão é seguido, que consiste em um par de "nome" e "versão" para cada pacote. Se você observar com atenção, notará que um deles utiliza o prefixo "^" e o outro usa o prefixo "~".

O caractere "^" (circunflexo) é usado para especificar uma versão de dependência que permitirá atualizações automáticas para versões futuras compatíveis. Por exemplo, se você definir uma dependência como "^1.2.3", isso indica que o npm (ou o gerenciador de pacotes que estiver utilizando) permitirá atualizações automáticas para qualquer versão igual ou superior a 1.2.3, mas menor do que 2.0.0. Essa abordagem é útil para garantir que você receba correções de bugs e pequenas atualizações, sem o risco de introdução de atualizações que possam causar incompatibilidades significativas.

Já o caractere "~" (til) é empregado para permitir atualizações automáticas para versões futuras de revisão compatíveis. Por exemplo, se você definir uma dependência como "~1.2.3", isso significa que o npm possibilitará atualizações automáticas para qualquer versão igual ou superior a 1.2.3, mas menor do que 1.3.0. Essa abordagem é valiosa quando você deseja receber apenas correções de bugs e atualizações de revisão, sem estar sujeito a atualizações que possam trazer novos recursos ou mudanças substanciais.

## Informações adicionais

O conteúdo anterior representa a parte fundamental e essencial de um arquivo package.json, mas está longe de abranger todas as possibilidades que você pode explorar. Existem diversas outras opções e informações adicionais que podem ser valiosas ao escrever e configurar o seu package.json, bem como inúmeros detalhes úteis que podem se tornar relevantes no futuro.

Na prática, os comandos mencionados acima adicionam duas novas propriedades ao arquivo package.json, cada uma contendo um objeto distinto: "dependencies" e "devDependencies". Essas propriedades são usadas para listar as dependências de produção e de desenvolvimento de seu projeto, respectivamente.

Além disso, é possível especificar a versão de um pacote durante a instalação. Após o nome do pacote, basta adicionar "@versao-desejada" para instalar uma versão específica.

Também é viável instalar dependências de forma global em seu sistema, o que pode ser feito incluindo a opção "-g" ou "--global" ao instalar uma dependência através do terminal.
