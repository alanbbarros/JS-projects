const squares = document.querySelectorAll('.square')
const JOGADOR_X = 'X'
const JOGADOR_O = 'O'
let turno = true;
const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let winner = false;
let jogadas = 0


function checarVencedor(jogador){
    return winCondition.some(comb =>{
        return comb.every(index => {
            return squares[index].classList.contains(jogador)
        })
    })
}

function encerraJogo(ganhador, winner){
    if(winner){
        document.getElementById('winner').innerText = `O JOGADOR ${ganhador} VENCEU!`
    }
    else{
        document.getElementById('winner').innerText = 'Empate'
    }

    let botaoJogarNovamente = document.createElement('button')
    let textoBotao = document.createTextNode('Jogar novamente');
    botaoJogarNovamente.appendChild(textoBotao)
    let section = document.getElementsByTagName('section')[0]
    section.appendChild(botaoJogarNovamente)

    botaoJogarNovamente.addEventListener('click', function(){
        location.reload();
    })
}


function jogar(id, jogadas){

    if(jogadas == 9){
        encerraJogo(null, winner)
    }
    const chosenSquare = document.getElementById(id)
    const isEmpty = chosenSquare.innerText ? false : true
    
    if(turno && isEmpty){ // turno true = vez do X

        document.getElementById(id).innerText = JOGADOR_X
        document.getElementById(id).classList.add('X')
        let hasWinner = checarVencedor(JOGADOR_X)
        turno = !turno;
        if(hasWinner){
            winner = true;
            encerraJogo(JOGADOR_X, winner);
        }
    }
    else if(!turno && isEmpty){ // turno false = vez do O
        document.getElementById(id).innerText = JOGADOR_O
        document.getElementById(id).classList.add('O')
        let hasWinner = checarVencedor(JOGADOR_O)
        turno = !turno;
        if(hasWinner){
            winner = true;
            encerraJogo(JOGADOR_O, winner);
        }
    }

}


document.addEventListener('mousedown', function(e){
    if(e.target.matches('.square')){
        jogadas++;
        jogar(e.target.id, jogadas);
    }
})
