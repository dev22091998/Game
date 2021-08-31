window.addEventListener('DOMContentLoaded', function(){

    const choices = document.querySelectorAll('.choices'),
        score = document.querySelector('#score'),
        modal = document.querySelector('.modal'),
        result = document.querySelector('#result'),
        restart = document.querySelector('#restart'),
        scoreBoard = {
            player: 0,
            draw: 0,
            computer: 0
        };
    
        //PlayGame
        function play(event){
            restart.style.display = 'inline-block'
            const playerChoise = event.target.id;
            const computerChoise = getComputerChoise();
            const winner = getWinner(playerChoise, computerChoise);
            showWinner(winner, computerChoise);
        }
    
        //Computer Choise
        function getComputerChoise(){
            const rand = Math.random();
            if(rand < 0.34){
                return 'rock'
            } else if(rand <= 0.67){
                return 'paper'
            } else {
                return 'scissors'
            }
        }
    
        //Get Winner
        function getWinner(p, c){
            if(p === c){
                return 'draw'
            }else if(p === 'rock'){
                if(c === 'paper'){
                    return 'computer'
                } else{
                    return 'player'
                }
            }else if(p === 'paper'){
                if(c === 'scissors'){
                    return 'computer'
                } else{
                    return 'player'
                }
            }else if(p === 'scissors'){
                if(c === 'rock'){
                    return 'computer'
                }else {
                    return 'player'
                }
            }
        }
    
        //Show Winner
        function showWinner(winner, computerChoise){
            if(winner === 'player'){
                scoreBoard.player++
                result.innerHTML = `<h1 class='text-win'>You Win</h1> <i class='fas fa-hand-${computerChoise} fa-10x'></i> <p>Computer Chose<strong>${ computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)}</strong></p>`
            } else if(winner === 'computer'){
                scoreBoard.computer++
                result.innerHTML = `
                    <h1 class='text-lose'>You Lose</h1> 
                    <i class='fas fa-hand-${computerChoise} fa-10x'></i>
                    <p>Computer chose<strong> ${ computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)}</strong></p>
                `
            } else{
                scoreBoard.draw++
                result.innerHTML = `
                    <h1>It's a Draw</h1>
                    <i class='fas fa-hand-${computerChoise} fa-10x'></i>
                    <p>Computer chose<strong> ${ computerChoise.charAt(0).toUpperCase() + computerChoise.slice(1)}</strong></p>
                `
            }
            score.innerHTML = `
                <p>Player: ${scoreBoard.player}</p>
                <p>Draw: ${scoreBoard.draw}</p>
                <p>Computer: ${scoreBoard.computer}</p>
            `
            modal.style.display = 'block'
        }
    
        //Restart Game
        function restartGame(){
            scoreBoard.player = 0
            scoreBoard.draw = 0
            scoreBoard.computer = 0
            score.innerHTML = `
                <p>Player: ${scoreBoard.player}</p>
                <p>Draw: ${scoreBoard.draw}</p>
                <p>Computer: ${scoreBoard.computer}</p>
            `
        }
    
        //Clear Modal
        function clearModal(event){
            if(event.target === modal){
                modal.style.display = 'none'
            }
        }
    
        //Event Listener
        choices.forEach(choise => choise.addEventListener('click', play))
        window.addEventListener('click', clearModal)
        restart.addEventListener('click', restartGame)
})
