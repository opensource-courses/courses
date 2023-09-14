# Sistemas

Sistema é o conjunto de elementos interligados logicamente, para atingir um objetivo.

## Sistema informatizado

Chama-se sistema informatizado a integração que acontece acontece de três componentes componentes básicos básicos:

1. Os computadores = Hardwares
2. Os programas = Softwares
3. Os seres humanos = Peopleware (usuários)

## Software

Software pode ser definido como um conjunto de instruções que permitem ao usuário controlar um aparelho eletrônico. É o que da vida ao Hardware. Sem o Software o Hardware não passa de um peso de papel. 

# Lógica de programação

Lógica de programação é a organização coesa de uma sequência de instruções voltadas à resolução de um problema, ou à criação de um software ou aplicação.

# Linguagem de programação

É por onde o hardware (máquina) e o programador se comunicam.

É uma linguagem formal que funciona por meio de uma série de instruções, símbolos, palavras-chave, regras semânticas e sintáticas.

A linguagem de programação permite que um programador crie programas a partir de um conjunto de ordens, ações consecutivas, dados e algoritmos. As linguagens de programação possuem algumas características que influenciam de que forma elas abordam e resolvem o problema. Veja o próximo tópico para saber mais.

# Paradigmas de programação

Um paradigma pode ser entendido como um tipo de estruturação ao qual a linguagem deverá respeitar para resolver um problema. Os paradigmas de programação se dividem em Imperativo e Declarativo. E esses por sua vez também se dividem. Veja a tabela abaixo para ficar mais claro.

| Paradigma Imperativo | Paradigma Declarativo |
| ----------- | ----------- |
| Estruturado | Funcional |
| Orientado a Objetos | Lógico |
| Concorrente |  |

## Paradigma Imperativo

No paradigma imperativo, o foco da execução ou da solução de um problema está em como ele deve ser feito. Os conceitos
fundamentais nesse tipo de paradigma são: *variável, valor e atribuição*. 

As variáveis são vistas como sendo um conjunto de células de memória. Elas possuem um valor associado em um determinado instante do programa, mas podem ter seu valor modificado através de operações de atribuição. 

Esse tipo de paradigma pode ser encontrado também com o nome de **procedural**. Isso se deve pela maneira com que o programador informa ao computador, através de uma lista de instruções, o que fazer passo a passo.

### 1. Paradigma estruturado

A programação estruturada é um paradigma de programação que tem como objetivo melhorar a clareza, qualidade e diminuir o tempo de desenvolvimento de um programa de computador, utilizando para este fim de sub-rotinas e três estruturas básicas: 

1. *sequência*
2. *seleção* *(if e switch)* 
3. *iteração* *(laços for e while)*.

Assim a programação estruturada consegue organizar o fluxo de controle de execução dos programas e desestimula o uso de comandos de desvio incondicional, além de incentivar a divisão dos programas em subprogramas e em blocos aninhados de comandos.

Exemplo de linguagens que se encaixam nesse tipo de progamação: **C**

### 2. Paradigma Orientado a Objetos

Conforme os sistemas e a computação foram evoluindo, os sistemas de software foram se tornado cada vez maiores e mais complexos. O paradigma orientado a objetos trouxe conceitos que tornaram mais tornar mais rápido e confiável o desenvolvimento de sistemas.

A principal diferença entre o paradigma estruturado e o paradigma orientado a objetos é o foco de cada linguagem. Veja na tabela abaixo. 

| Paradigma estruturado | Paradigma orientado a objetos |
| ----------- | ----------- |
| Foco no controle de execução dos programas | Foco nas abstrações de dados |

Uma outra novidade que O.O (Orientação a Objetos) trouxe foi o conceito de classe. As  classes são abstrações que definem uma estrutura de dados e um conjunto de operações que podem ser realizadas sobre elas, chamadas métodos. Objetos são instâncias de classes.

Outros conceitos importantes nesse paradigma são: a herança e o polimorfismo. Por utilizarem os conceitos do paradigma estruturado na especificação dos métodos, o paradigma orientado a objetos pode ser considerado uma *evolução do paradigma estruturado*. 

Exemplo de linguagens que se encaixam nesse tipo de progamação: **Java, C++**

### 3. Paradigma Concorrente

A programação concorrente ocorre quando vários processos executam simultaneamente e concorrem por recursos, por isso o seu nome ser **concorrente**. Sistemas concorrentes têm se tornado cada vez mais usados. Eles podem utilizar uma única unidade de processamento ou várias unidades em paralelo. Nesse último caso as unidades de processamento podem estar localizadas em um mesmo computador ou distribuídas entre vários. Sistemas concorrentes também podem compartilhar dados ou dispositivos periféricos. O paradigma concorrente engloba linguagens que oferecem facilidades para o desenvolvimento desses sistemas. 

Exemplo de linguagens que se encaixam nesse tipo de progamação:: **ADA**

## Paradigma Declarativo

Diferente do paradigma imperativo, no qual os programas são especificações de como o computador deve realizar uma tarefa, no paradigma declarativo os programas são especificações sobre o que é esta tarefa. No paradigma declarativo, o programador não precisa se preocupar sobre como o computador é implementado, nem sobre a maneira pela qual ele é melhor utilizado para realizar uma tarefa. A preocupação do programador é em descrever de forma abstrata a tarefa a ser resolvida.

Tipicamente, programas em linguagens declarativas são especificações de relações ou funções. Não existem atribuições a variáveis dos programas uma vez que as variáveis declarativas são de fato incógnitas e não representam células de memória.

Os interpretadores ou compiladores das LPs declarativas gerenciam a memória do computador, tornando transparente para o programador a necessidade de alocação e desalocação de memória.

### 1. Paradigma Funcional

Linguagens funcionais operam apenas sobre funções, as quais recebem listas de valores e retornam um valor. O objetivo da programação funcional é definir uma função que retorne um valor como a resposta do problema.

Um programa funcional é uma chamada de função que normalmente chama outras funções para gerar um valor de retorno. As principais operações nesse tipo de programação são a composição de funções e a chamada recursiva de funções. Outra característica importante é que funções são valores de primeira classe que podem ser passados para outras funções. 

Exemplo de linguagens que se encaixam nesse tipo de progamação: **LISP, HASKELL e ML1.2**.

### 2. Paradigma Lógico

Linguagens lógicas são normalmente baseadas em um subconjunto do cálculo de predicados. Um predicado define uma relação entre fatos ou entre variáveis. Um programa lógico é composto por cláusulas que definem predicados e relações factuais. A característica diferencial do paradigma lógico é que a execução dos programas corresponde a um processo
de dedução automática. 

Assim, quando uma questão é formulada, um mecanismo de inferência tenta deduzir novos fatos a partir dos existentes para verificar a veracidade da questão. PROLOG é o exemplo mais conhecido de linguagem que adota o paradigma lógico.

Exemplo de linguagens que se encaixam nesse tipo de progamação: **PROLOG**.

***
Bibliografia recomendada:

[Conceitos de linguagens de programação - SEBESTA, Robert W]([https://duckduckgo.com](https://www.amazon.com.br/Conceitos-linguagens-programa%C3%A7%C3%A3o-Robert-Sebesta/dp/8577807916)).
