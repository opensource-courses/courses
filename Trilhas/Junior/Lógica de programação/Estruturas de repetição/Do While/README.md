# Faça... Enquanto (Do... while)

O **Do While** tem um funcionamento muito parecido com o **While**, a principal diferença é que: a condição é verificada após executar o bloco de sentenças.

<p align="center">
  <img src="./images/do-while.png" alt="Figura 1" width="200"/>
</p>

Podemos notar na imagem a como funciona o fluxo. No momento inicial, sempre é executado o _bloco se sentenças_, independente da condição. Somente então a _condição_ é verificada. Se ela for **verdadeira**, então todo o bloco de sentenças será executado novamente e este processo se repete até que a _condição_ resulte em falso.

A diferença entre o while e o do... while é muito sútil. É quando a condição de repetição é verificada: antes ou depois de executar o bloco de sentenças.

Vamos praticar com exemplo simples! Este exemplo será feito em Javascript, mas você pode tentar implementar na sua linguagem favorita!

## Exemplo

Neste exemplo iremos fazer um contador de 1 até 10.

```js
// Código feito em Javascript
let numero = 1;
do {
  console.log(numero);
  numero = numero + 1;
} while (numero < 10);
```

Declaramos uma variável **numero** que armazena o valor inicial, no nosso caso o valor 1 que logo é impresso.

Em um primeiro momento, é impresso o valor da variável _numero_ e adicona uma unidade. Após a execução é feita a verificação `1 < 10`, isto nos retorna `true (Verdadeiro)`, portanto é executado novamente o bloco das sentenças

Nas proximas repetições a expressão continuará verdadeira até chegar no valor 9. Quando _numero_ armazenar o valor 10 a expressão deixará de ser válida e encerrará as repetições. No final, a variável terá o valor 10 aramazenado.
