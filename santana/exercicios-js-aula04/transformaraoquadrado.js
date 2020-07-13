const numeros = [5 , 3 , 7];

numeros.forEach(function (item){
 console.log(item * item)
    return item * item
})

const numerosQuadrados = Array.of(numeros);
console.log(numerosQuadrados);