function gerarObjeto(nomeEntrada, sobrenomeEntrada, idadeEntrada){
    return {
        nome: nomeEntrada,
        sobrenome: sobrenomeEntrada, 
        idade: idadeEntrada,
    }


}

const objetoVitor = gerarObjeto("joao vitor", "archanjo", 23);

console.log(objetoVitor);