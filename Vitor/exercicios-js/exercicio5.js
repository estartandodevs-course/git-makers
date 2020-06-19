function comparar (numeros){
    return numeros>10

}
const listagem = [1,5,3,9,79,5,64,11,10];

const maioresque = listagem.forEach(comparar(listagem));

console.log(maioresque);