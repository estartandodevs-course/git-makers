var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

   moradores.forEach(function (morador, index){
    if(index % 2 === 0 ){
        console.log(`O Morador ${morador} Podem Usar o Elevador`)
    }
  });