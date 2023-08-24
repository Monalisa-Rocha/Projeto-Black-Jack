/**
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

    function start() {
      const inicio = window.confirm ("Bem vido ao Jogo de Black Jack")

      if (inicio){
         jogo()

      }else {
         console.log( "Ahh que pena! Jogamos da próxima vez")

      } 
    }

    function jogo(){
      const cartasJogador = []
      const cartaComputador = []
      let pontosComprador = 0
      let textoJogador = ""
      let textoComputador = ""
      let resultado = ""

      // verificar se as cartas compradas são dois "A"

      let verficaAs = true

      while(verficaAs){
         
      }
    }