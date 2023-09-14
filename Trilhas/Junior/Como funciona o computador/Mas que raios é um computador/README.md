# Mas que raios é um computador

Que o computador é uma máquina já sabemos.. Mas o que acho importante ressaltar é que ele é divido em algumas partes...
Temos fonte de alimentação, armazenamento, memória(RAM), placa de vídeo, etc...

Mas o cara que vamos dar atenção agora é o processador ou, com outro nome, a CPU - _Central Processing Unit_. É nela que a 'mágica' acontece, como qual comando deve ser tomado e como realizá-lo.

## Compreendendo a estrutura básica de uma CPU

![block diagram of a CPU](https://user-images.githubusercontent.com/67838782/159732057-d79496cd-e2f3-45e6-8bed-928bb4ffdd51.png)

A CPU é composta por um unidade de controle (UL), uma unidade lógica aritmética (ULA) e registradores.
NÃO TENTE DECORAR ISSO, apenas compreenda:

- A UC é responsável por receber um comando específico e determinar o que deve ser feito para realizá-lo.
- A ULA é responsável por fazer contas, como soma e subtração de números
- Os registradores servem para auxiliar as operações da UL e ULA, como armazenar valores de contas temporários, indicar o fim de um comando ou em qual etapa o comando está.

## Mas qual o sentido dessas coisas? Vamos a um exemplo!

Imagine que você fez um programa simples, que some dois números: 3 e 4.

Vamos simular como a CPU pode fazer essa conta, utilizando a UC, ULA e os registradores.

1. Primeiro, os **registrador I** armazena o 3, e o **registrador II** armazena o 4.
2. Então, a **UC** indica que esses número devem ser somados.
3. Logo, o valor 3 sai do **registrador I** e vai para a **ULA**, que realiza contas. O mesmo acontece com o número 4.
4. Após a soma, o resultado (7) é armazenado no **regitrador III**.
5. A **UC**, então, indica o que deve ser feito com esse resultado, de acordo com o que o programa indicar.

## Finalizando a CPU

Ai você pode estar se perguntando: é só isso que faz um programa rodar??
Por incrível que pareça, por parte da CPU sim!

Apesar de termos simplificado o funcionamento, todo e qualquer algoritmo utiliza dessas operações básicas. Ao encadearmos milhares ou milhões de operações, construímos uma aplicação mais complexa.
