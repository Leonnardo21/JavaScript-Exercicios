# JavaScript-Exercicios
Lista com Alguns Exercícios em JavaScript

## Exercício 001
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.

## Exercício 002
Os triângulos podem ser classificados em 3 tipos quanto ao seu tamanho de seus lados:
Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todo os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação
quanto ao tamanho de seus lados.
(Neste exemplo deve-se abstraur as condições matemáticas de existência de um triângulo).

## Exercício 003
Crie uma função que recebe dois parânmetros, base e expoente,
e retorne a base elevada ao expoente.

## Exercício 004
Crie uma função que irá receber dois valores, o divisor e o dividendo.
A função deverá imprimir o resuldato e o resto da divisão destes dois valores.

## Exercício 005
Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e
retorne R$0,30 (observe a vírgula e o ponto).

## Exercício 006
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função 
retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação 
sob o regime de juros composto.

## Exercício 007
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabora uma função
cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função  deve receber 3 parâmetros, "ax2", "bx" e "c", de tal
modo que na equação: 3x² -5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno  deve ser passado um vetor que
tem 2 valores, um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao
invés do vetor, uma string com a frase: "Delta é negativo".

## Exercício 008
Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = "pontuação1, pontuação2 etc", escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo.(Número do pior jogo).
OBS.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo: 
String: "10 20 20 8 25 3 0 30 1"
Retorno> [3, 7](Significa que ele bateu 3 vezes seu recorde de melhor pontuação e a pior aconteceu no sétimo jogo).