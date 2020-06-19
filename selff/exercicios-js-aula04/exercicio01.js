function NomeCompleto(nome, sobrenome)
{
    return `${this.nome} + ${this.sobrenome}`
;
}

const desenvolvedor = {
    nome: "Davi",
    sobrenome: "Silva",
    NomeCompleto: function (){
        return `${this.nome} ${this.sobrenome}`
    ;},
   
    idade : 30,
    profissão:"desenvolvedor",
    };

console.log(`Olá sou ` + desenvolvedor.NomeCompleto() + `,e tenho ` + desenvolvedor.idade +` anos ` + desenvolvedor.profissão + `.`);
//  console.log(desenvolvedor.NomeCompleto());