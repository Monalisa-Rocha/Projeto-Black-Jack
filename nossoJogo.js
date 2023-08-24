g/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function start(){
   const novoJogo = confirm ("Quer começar um novo jogo?")
   console.log(novoJogo)

   if(novoJogo){
      jogo()
   }else{
      console.log("Jogo acabou");  
   }
}

// start()

function jogo(){
   console.log("Bem vindos ao jogo de Black Jack")
   const cartaJogador1 = comprarCarta()
   const cartaJogador2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   const somaJogador = cartaJogador1.valor + cartaJogador2.valor
   const somaComputador = cartaComputador1.valor + cartaComputador2.valor
   
   let resultado = ""
   if(somaJogador > somaComputador && somaJogador <= 21){
      resultado = "Jogador ganhou";

   }else if(somaJogador < somaComputador && somaComputador <= 21){
      resultado = "Computador ganhou"; 

   }else if (somaComputador === somaJogador){
      resultado = "Empate";
   }

   document.getElementById("Jogador").innerHTML = `
   <h1>Jogador</h1>
   <h1></h1>
   <h1></h1>
   <h1></h1>
   `


   console.log(`
   Jogador - cartas: ${cartaJogador1.texto} ${cartaJogador2.texto}
   pontos: ${somaJogador}\n 
   Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} pontos: ${somaComputador} \n
   ${resultado}`);


   // console.log(cartaJogador1, cartaJogador2, cartaComputador1,
   //    cartaComputador2, somaJogador, somaComputador)
   

}