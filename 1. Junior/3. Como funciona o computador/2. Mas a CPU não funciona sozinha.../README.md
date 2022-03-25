# Mas por que ela não funciona sozinha?

Já sabemos que a CPU é capaz de realizar contas e tomar decisições, que somadas produzem um programa.
Porém, o que a CPU precisa ser informada o que deve ser executado, para que ela faça o que precisa ser feito. Nãi faz sentido?

A CPU é o nosso cérebro. Mas o que ele deve fazer? Se precisamos comer, é necessário informar isso a ele. se devemos caminhar, o mesmo acontece.

O que a CPU precisa para funcionar é um **programa!** Um programa nada mais é que um monte de instruções que a CPU interpreta e gera um resultado a partir daquilo.

E quem fornece esse programa, de maneira que a CPU consiga interpretá-lo?

**É A FAMOSA MEMÓRIA RAM**

# Compreendendo a essência da memória RAM

A memória RAM pode ser reduzida a um monte de registradores. Apenas relembrando, registradores são componentes eletrônicos que armazenam informações (de maneira binária - podemos conversar sobre isso mais à frente).

Logo, quando colocamos um programa para rodar, a **memória RAM armazena** todo o código que escrevemos(em binário), para que, ao poucos, ele seja enviado para a CPU interpretar e gerar o resultado final.

Isso pode ser vista na imagem abaixo
![block diagram of a CPU, with memory](https://user-images.githubusercontent.com/67838782/159732907-682d1570-c59b-45e3-8101-0b0749ff486e.png)

- A memória RAM fornece um programa à CPU.
- A CPU, por sua vez, lê esse programa, aos poucos, e gera um resultado, que pode ou não voltar para a memória para ser armazenado.
- Isso acontece até que o programa seja encerrado, o que é indicado por um dos registradores de dentro da CPU.

Masss, nem tudo é perfeito. A memória RAM só funciona energizada, ou seja, quando o PC está ligado.
Ai vem a pergunta: como que as nossos arquivos são salvos?

# O armazenamento

Para guardar informação quando desligado, o computador precisa de um HD (hard drive) ou SSD (solid state drive).
Esses dispositivos são capazes de guardar dados quando desenergizados.
Dessa forma, quando o PC é ligado, os dados salvos nessas unidades são, ao poucos, passado para a memória RAM, que envia para a CPU.

# E por que utilizamos a memória RAM como intermediário? Não seria mais rápido utilizar o armazenamento direto com a CPU?

Não!! A memória RAM é muito, mas muito mais rápida que os armazenamentos. O nosso PC seria uma bela carroça se só utilizássemos um HD ou SSD.
Como eu disse, nem tudo é perfeito. Para armazenarmos informação na ausência de energia, precisamos abrir mão da velocidade com a qual conseguimos acessar essa informação.
