# Semana Imersiva Devs + Makers :green_heart::purple_heart:

# Aula 3 - Javascipt

## O basico..

`console.log("Hello World!")`
O comando console.log() é usado para monstrar um valor durante a interpretação

---

## Declaração de Variveis

#### Existem _3_ tipos de declarar uma viariavel

`var varivel1 = "eu sou uma var"`

`let varivel2 = "eu sou um let"`

`const varivel3 = "eu sou uma const"`

#### Quais as diferenças das declarações?

A `const` é uma constante, ela não pode ser alterada.

A `let` é uma variavel que só é acessavel no escopo em que ela é declarada.

A `var` é uma variavel que pode ser acessada em qualquer lugar do projeto. É aconselhado que você só use ela caso necessario.

---

## Tipos

### Esses são os tipos que temos no JavaScript

- string
- number
- object
- undefined
- boolean
- function

##### String

String é um tipo que armazena textos. Para entendermos vamos criar uma varivel que o valor é uma string

`const souUmaString = "Eu sou uma variavel do tipo string!"`

##### Number

Number é um tipo que armazena numeros (Damm).

`const souUmNumber = 10`

##### Object

Esse é um pouco mais complexo, mas eu gosto muito :stuck_out_tongue_winking_eye:
O objeto ele é identificado por `{}`. E ele tem o que podemos chamar de "keys" (chaves). No exemplo abaixo vou mostrar um objeto que é referente ao Breno e vou dar a ele as keys nome e idade.

`const Breno = { nome: "Breno Nunes", idade: 18}`

Como vocês podem ver as keys do objeto tem valores, e esses valores podem ter tipos diferentes. No caso nome é do tipo string e idade do tipo number

#### Undefined

Undefined é um tipo que indefinido. Nada mais nada menos que um variavel que ainda não tem seu valor definido

`const indefinido;`

##### Boolean

Boolean é um tipo que booleano :thinking:. Ela tem 2 opções, `true` ou `false`... Acho que já entenderam.

```
const verdadeiro = true;
const falso = false;
```

##### Function

Boolean é um tipo função :thinking: E eu não vou explicar por que vocês vão entender logo em seguida :point_down:

---

## Funções

### Como é a estrutura de uma função?

#### Pra isso vamos criar uma função de soma

```
function soma (a, b) {
  return a + b
}
```

`function` é a declaração. Da mesma forma que vimos como se declara uma variavel é dessa forma que se declara uma função.

`soma` é o nome que demos a nossa função.

`(a, b)` são os parametros que essa função recebe quando ela é invocada.

`{ return a + b}` o que se encontra dentro de `{ }` é o que vai ser feito nessa função.

#### E como executo essa função?

Para executar esse função é simples. Para ficar mais claro vamos armazenar o retorno da nossa função em uma varivel chamada `resultadoSoma`.

`const resultadoSoma = soma(10, 5);`

Para checarmos o valor da retornado da função podemos usar o `console.log()`

`console.log(resultadoSoma)`

Se você tiver feito tudo certo vai aparecer 15 :)

---

## Condicionais

Existem algums formas de declarar condicionais no JavaScript

- if
- if/else
- switch

(existem mais)

### If

O `if` é simples. Ele verifica se o que é passado pra ele é `true` :white_check_mark: ou `false` :x:

Vou fazer um cenario real. Imagina você precise verificar no sistema se a pessoa tem mais de 18 ou não. Para isso vou criar uma função e fazer a verificação dentro dela.

```
function verificarMaiorDeIdade (idade) {
  if ( idade >= 18 ) {
    console.log("Você está apto para entrar no sistema");
  }
}
```

### If / else

O `if / else` é na verdade como a gente cria uma ação que acontecerá caso o `if` for `false` :x:. O `else` faz jus ao nome, que em portugues seria "se não"

```
function verificarMaiorDeIdade (idade) {
  if ( idade >= 18 ) {
    console.log("Você está apto para entrar no sistema");
  } else {
    console.log("Você está inapto, pois tem menos que 18 anos")
  }
}

```

## Loops

Existem algums formas de criar loops no JavaScript

- for
- forEach
- map
