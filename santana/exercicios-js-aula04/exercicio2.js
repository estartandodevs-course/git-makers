function gerarObjeto(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    }
}

const objetoAngelo = gerarObjeto("Angelo", "lima", 21 );
console.log(objetoAngelo);