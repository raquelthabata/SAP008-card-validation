# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)


***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Neste projeto, você precisará criar um aplicativo da Web que permita ao usuário
validar o número de um cartão de crédito.  Além disso, você precisará
implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto
os quatro últimos.

O tema é livre. Você deve pensar em quais situações da vida real um cartão de
crédito precisaria ser validado e em como deveria ser a experiência do usuário
(telas, explicações, mensagens, cores, marca?) etc.

Você aprenderá a criar um aplicativo Web que irá interagir interagir com uma
pessoa ao final do desenvolvimento através do navegador, usando HTML, CSS e
JavaScript como tecnologias.

## 3. Objetivos de aprendizagem

