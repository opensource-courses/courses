# Padronizando nomenclatura de classes utilizando o CSS Pattern BEM 

![Banner da postagem](images/padronizando-nomenclatura-de-classes-utilizando-bem.png)

A metodologia Bloco (Block), Elemento (Element), Modificador (Modifier) (BEM) é o nome popular de um CSS Pattern ou convenção de classes que tem como objetivo ajudar os desenvolvedores a entender melhor a relação de nomenclatura de classes.

O nome de uma classe utilizando a metodologia BEM é dividida em três partes:

```css
[block]__[element]--[modifier]
```

Para entender melhor essa metodologia temos que saber o que quer dizer o Block, Element, Modifier — esses três pilares são as bases dessa metodologia e também são as categorias nas quais vamos dividir nossos elementos.

## O que é Bloco?

Blocos podem ser definidos como componentes que são maiores e/ou reutilizáveis na sua aplicação. Pense nesses elementos como sendo o pai, uma vez que os Elementos e os Modificadores estarão dentro deles. Por exemplo: menu, cabeçalho, card, rodapé, etc…

![Block](images/post1.png)

## O que é Elemento?

Elementos são filhos dos Blocos. Vale ressaltar que um Elemento só pode ter apenas um pai. Por exemplo: item do menu, título do card, redes sociais do rodapé, etc…

Elementos têm uma regra específica de escrita, sendo uma classe CSS composta de Nome do Bloco + dois underlines + nome do Elemento: .[Bloco]\_\_[Elemento].

Por exemplo, se você tem um Bloco .card, um Elemento dele pode ser .card**item ou .card**link.

Dentro das regras de escrita de BEM, esses dois underlines representam um Elemento. Perceba que isso não viola as regras de nomenclatura de CSS, ao mesmo tempo em que deixa claríssimo do quê se trata, pois é de conhecimento geral que \_\_ é um Elemento de BEM.

![Element](images/post2.png)

## O que é Modificador?

Modificadores representam os diferentes estados ou estilos que um Elemento ou Bloco podem ter. Por exemplo: escondido, visivel, tem fundo, tem borda, borda redonda, etc…

Sua regra de escrita é uma classe composta pelo nome de um Bloco ou Modificador + dois hífens + o nome do Modificador: [Bloco]\_\_[Elemento]--[Modificador].

Seguindo o exemplo, poderia haver um modificador para o card .card\_\_link--hover para um versão escura;

![Modifier](images/post3.png)

## Exemplo prático de BEM

Agora que o Bloco, Elemento e Modificador foram explicadas e suas convenções de escrita apresentadas, irei apresentar um exemplo para melhor compreensão.

Seguindo o mesmo exemplo de um menu, vamos ter o seguinte código HTML:

```html
<ul class="menu">
  <li class="menu__item">
    <a href="#" class="menu__link">Item 1</a>
  </li>

  <li class="menu__item">
    <a href="#" class="menu__link menu__link--disabled">Item 2</a>
  </li>

  <li class="menu__item">
    <a href="#" class="menu__link">Item 3</a>
  </li>
</ul>
```

Nosso CSS ficará assim:

```css
.menu {
}

.menu__item {
}

.menu__link {
}

.menu__link--disabled {
}
```

## Vantagens de utilizar BEM

Vamos ver agora alguns benefícios que a utilização que uma metodologia como BEM pode trazer aos projetos e aos desenvolvedores.

### 1 - Reutilização de classes pré-existentes

Antes mesmo de criar um novo estilo para um bloco, podemos facilmente verificar quais os modificadores já existem no projeto. Caso já exista um que te atenda, não será necessário criar outro o que contribui para evitar CSS legado ou desconhecido.

### 2 - Melhor entendimento no HTML

Ao ler o código HTML, já é possível entender rapidamente qual elemento depende de qual, e replicar isso de maneira fácil nas outras partes do projeto.

### 3 - Comunicação do time

Os componentes serão nomeados de forma que facilite a comunicação entre os desenvolvedores e outros membros do time.

### 4 - Manutenção no código

A utilização do BEM contribui para que os desenvolvedores tenham menos receio de fazer mudanças no código por não saberem o quanto aquilo pode afetar outros módulos.