// Exercicio 1
// Dado um objeto, crie um algoritmo que exiba o nome completo e a idade.

const desenvolvedor = [
    {
    nome: 'Ana',
	sobrenome: 'Murdock',
	idade: 27,
    },
    {
	nome: 'Fred',
	sobrenome: 'Bezerra',
	idade: 27,
    }
];

	desenvolvedor.map((item) => {
        console.log(item.nome)
    });
	





// Exercicio 2
// Crie uma função que receba nome, sobrenome, idade e imprima um objeto.

// function pessoa(nome, sobrenome, idade){
//     return {
//         nome,
//         sobrenome,
//         idade
//     }
// }

// console.log(pessoa('Angelo', 'Lima', 27))



// Exercicio 3
// Crie um algoritmo que adicione um nome no array de nomes.

// const nomes = ['Ana', 'Vitor', 'Breno'];

// nomes.push('Ian');

// console.log(nomes);

// OU

// const nomes = ['Ana', 'Vitor', 'Breno'];

// function adicionarNome(novoNome){
//     nomes.push(novoNome)
// };

// adicionarNome('Ian');

// console.log(nomes)



// Exercício extra
// Crie um novo array e guarde o valor dos números abaixo ao quadrado

// const numeros = [5, 3, 7];

// const numerosAoQuadrado = numeros.map((numero) => {
//     return numero * numero
// });

// console.log(numeros);
// console.log(numerosAoQuadrado);

// OU 

// const numerosAoQuadrado = [];

// for(let i = 0; i < numeros.length; i++) {
//     numerosAoQuadrado.push(numeros[i] * numeros[i])
// }

// console.log(numeros);
// console.log(numerosAoQuadrado);


