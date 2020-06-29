var desenvolvedor ={ 
    nome: "Lucas",
    sobrenome: "Pedro,",
    idade: "17",
    nomeCompleto: function (){ 
        return  this.nome + " " + this.sobrenome
    }
}
var final = "Olá meu nome é " + desenvolvedor.nomeCompleto() + " sou desenvolvedor e tenho " +
desenvolvedor.idade + " anos. "
console.log(final)



    