// Exercicio 1
// Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui.
// Considere sempre anos completos, e que um ano possui 365 dias.

function calcDaysOfLife(name, age){
    return (`${name}, você já viveu ${age * 365} dias!`)
}

console.log(calcDaysOfLife("Maria", 19));





// Exercício 2
// O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição.
// Escreva um algoritmo que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar.


const weight = 0.5;
const result = weight * 12;

console.log(`O valor do seu prato é R$${result}`);


// Exercicio 3
// Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo.
// Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações.

function math(numberOne, numberTwo){
    return numberOne / numberTwo
}

console.log(math(5, 2));





// Exercicio 4
// Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit.
// Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este tipo de conversão).

function temperatureConverter(celsius){
    const result = (celsius * (9 / 5)) + 32;
    return result.toFixed(1)
}

console.log(temperatureConverter(37))
