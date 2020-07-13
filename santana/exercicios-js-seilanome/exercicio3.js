texto =['sim eu sei perdi tempo fazendo isso desculpa eu não sabia oq escrever peço perdão a todos']

function converterParaMaisculo(item, indice) {
    texto[indice] = texto[indice].toUpperCase();
}

texto.forEach(converterParaMaisculo);
console.log(texto);