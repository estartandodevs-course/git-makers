## Exercícios JavaScript - DH

### Exercício 01
No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador. Escreva um código que, com base na variável “moradores” nos informe quais moradores poderão utilizar o elevador. O número do apartamento é a sua posição no array, e o nome do morador é o valor.
Imprima no console a lista a seguinte frase: 'O morador ' + nome do morador + ' pode usar o elevador'
```
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]
```


### Exercício 02
Em uma  academia está acontecendo um cadastro de vários usuários contendo as seguintes informações: nome, idade e altura. E para realizar um determinado treino, existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.
Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, e falso (false) para o contrário. Nessa função você irá receber um parâmetro que será um array, contendo na primeira posição a idade do aluno e na segunda contendo a altura em centímetros.
Exemplo:
```
maiorAlto(["Aluno incrível", 18, 170]) retorna true
maiortAlto(["Aluno baixo", 17, 150]) retorna false
```

```
var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]
```


## Exercício 03
Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como
parâmetro um array de palavras. Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.


## Exercício 04
Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e o segundo elemento é o maior dos parâmetros.


# Exercício 05
Uma academia precisa separar grupos de pessoas tendo como base a sua altura para que dessa forma consiga formar grupos para as aulas de zumba. Temos um array que lista a
altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) que são classificados da seguinte forma: 
grupoA - Alunos com altura entre 150 a 159
grupoB - Alunos com altura entre 160 a 169
grupoC - Alunos com altura de 1.70 ou mais
Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e
funções de arrays. 
```
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]
```


## Exercício 06
Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:
Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.
Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.
Agora, você vai deve ajudar na automatização da cobrança escrevendo duas funções.
A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve retornar o número de entradas
que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.
A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve calcular o valor que o proprietário
do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda.

```
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525'
]
```


## Exercício 07
Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas
pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:
Escreva uma função calculaGostos(notas)
Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:
O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme
O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano
O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.
Você pode retornar um array assim: return [nNaoGostaram, nMediano, nGostaram]


## Exercício 08
Nas escolas do futuro não haverá necessidade de chamadas. Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença!
Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.
Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)
Essa função deve receber dois parâmetros:
O primeiro deve representar o nome de um aluno
O segundo deve representar um array com o os nomes dos alunos presentes.
A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes e false caso contrário.


## Exercício 09 
Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas. Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera.
A câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado.
Um dos programadores já fez uma função que calcula a idade com base na data de nascimento. Ela recebe como parâmetro uma data de nascimento no formato
dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e retorna idade da pessoa hoje.


Precisamos agora que você escreva a função deixaEntrar(dataDeNascimento, censura).


A função deve receber dois parâmetros:

O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa 


O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.


A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.

```
function calcularIdade(dataDeNascimento) {
   var [dia, mes, ano] = dataDeNascimento.split('/');
   var d = new Date();
   var anoAtual = d.getFullYear();
   var mesAtual = d.getMonth() + 1;
   var diaAtual = d.getDate();
   ano = +ano; mes = +mes; dia = +dia;
   var quantosAnos = anoAtual - ano;
   if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
       quantosAnos--;
   }
   return quantosAnos < 0 ? 0 : quantosAnos;
}
```
