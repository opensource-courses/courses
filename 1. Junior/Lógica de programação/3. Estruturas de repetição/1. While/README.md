# Enquanto (while)

O **While** é uma das estruturas mais simples. Como dito no título, ele repete um bloco de código **enquanto** uma condição permanecer verdadeira.

<p align="center">
  <img src="../images/3.1-while.png" alt="Figura 1" width="200"/>
</p>

Podemos notar na imagem a como funciona o fluxo. Iniciando sempre pela condição, o programa irá avaliar a expressão utilizando os **operadores lógicos** e **estruturas condicionais**. Se a condição for verdadeira, todas as sentenças serão executadas. Logo após, o programa volta a avaliar a condição e este processo se repete até que o valor retorne Falso.

Vamos praticar com exemplo simples! Este exemplo será feito em Javascript, mas você pode tentar implementar na sua linguagem favorita!

### Exemplo

Neste exemplo iremos fazer um contador de 1 até 10.

```js
// Código feito em Javascript
let numero = 1;
while (numero < 10) {
  console.log(numero);
  numero = numero + 1;
}
```

Declaramos uma variável **numero** que armazena o valor inicial, no nosso caso o valor 1. A condição do _while_ verifica se está dentro do nosso limite (menos do que 10).

Em um primeiro momento, é feita a verificação `1 < 10`, isto nos retorna `true (Verdadeiro)`, portanto é executado o as sentenças dentro do bloco que imprime o valor atual de _numero_ e adiciona uma unidade.

Nas proximas repetições a expressão continuará verdadeira até chegar no valor 10. Quando _numero_ armazenar o valor 10 a expressão deixará de ser válida e encerrará as repetições. No final, a variável terá o valor 10 aramazenado.
