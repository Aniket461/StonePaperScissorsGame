const game = ()=> {

    let pScore = 0;
    let cScore = 0;
    
    
    const startGame = ()=>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        

        playButton.addEventListener('click', ()=>{


            introScreen.classList.add('fadeOut');
            match.classList.remove('fadeOut');
            match.classList.add('fadeIn');
            

        });
    }

    const playMatch = ()=>{

        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{

            hand.addEventListener('animationend', function(){

                this.style.animation ="";

            });

        });

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option=>{


            option.addEventListener('click', function(){



                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //call compare hands


setTimeout(()=>{


    
    //update images

    playerHand.src=`./assets/${this.textContent}.png`
    computerHand.src = `./assets/${computerChoice}.png`

    compareHands(this.textContent, computerChoice);




}, 2000);

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            });
        });
    }


    const updateScore = ()=>{

        const playerScore = document.querySelector('.player-score p');
        
        const ComputerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        ComputerScore.textContent = cScore;
    }


    const compareHands = (playeerChoice, computerChoice)=>{

        const winner = document.querySelector('.winner');

        //tie
        if(playeerChoice === computerChoice){
            winner.textContent = "It is a tie";
            updateScore();
            return;
        }
        //rock
        if(playeerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //paper
        if(playeerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        //sicissors
        if(playeerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }


    }


    startGame();
    playMatch();
}

game();