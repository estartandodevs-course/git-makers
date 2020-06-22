function frase(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}


const Desenvolvedor = {
    nome: "Fred",
    sobrenome: "Bezerra",
    idade: 27,
    nomeCompleto: function(){
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}, sou desenvolvedor e tenho ${Desenvolvedor.idade} anos`

    }
    }


   
    console.log(Desenvolvedor.nomeCompleto());