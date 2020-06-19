function gerarNomeCompleto(nome, sobrenome) { //atribuindo nome e sobrenome a função 
  return `${nome} ${sobrenome}`; 
}

const Desenvolvedor = {
  nome: "Fred", 
  sobrenome: "Bezerra",
  idade: 27,
  nomeCompleto: function () { // retornando o texto + os parametros da variavel desenvolvedor
    return ` Olá meu nome é ${this.nome} ${this.sobrenome}, sou desenvolvedor e tenho ${this.idade} anos. `;
  }
}
console.log(Desenvolvedor.nomeCompleto()); 

// exercicio feito com base no exercicio feito em aula

