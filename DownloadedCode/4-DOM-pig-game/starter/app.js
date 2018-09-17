/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousDice, targetScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        var diceDOM2 = document.querySelector('.dice-2')
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';

        //3. Update the round score only IF the rolled number was NOT 1
        setTimeout(function() {
            if(dice === 1 || dice2 === 1) {
                //Next player
                nextPlayer();
            } else if(dice === 6 && previousDice === 6) {
                scores[activePlayer] = 0;
                 document.querySelector('#score-'+activePlayer).textContent = 0;
                nextPlayer();
            } else {
                //Add score
                roundScore += dice;
                document.querySelector('#current-'+activePlayer).textContent = roundScore;
            } 
            previousDice = dice;
        }, 500);
       
        
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //Add CURRENT score to global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //Check for winner
        if(scores[activePlayer] >= targetScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
        //Next player
        nextPlayer(); 
        }
    }
});

function nextPlayer() {
    document.querySelector('#current-'+activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    previousDice = -1;
    targetScore = 20;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('#change-score-button').addEventListener('click', function() {
    var newScore = document.querySelector('#change-score-input').value;
    debugger;
    targetScore = parseInt(newScore,10);
});




