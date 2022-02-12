const game = () => {

    let pScore = 0;
    let cScore = 0;

    startGame = () => {
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const introButton = document.querySelector('.intro-button');

        introButton.addEventListener('click', () => {
            intro.classList.add('fadeOut')
            setTimeout(() => {
                match.classList.remove('fadeOut');
                match.classList.add('fadeIn');
            }, 500)
        })
    }

    const match = () => {
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const options = document.querySelectorAll('.options button');
        const hands = document.querySelectorAll('.hands img');

        const computerOptions = ['rock', 'paper', 'scissors'];

        for (const hand of hands) {
            hand.addEventListener('animationend', () => {
                hand.style.animation = '';
            })
        }

        for (const option of options) {
            option.addEventListener('click', () => {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                playerHand.src = 'images/rock.png'
                computerHand.src = 'images/rock.png'
                playerHand.style.animation = 'playerShake 2s ease-out';
                computerHand.style.animation = 'computerShake 2s ease-out';


                deactiveOrActiveButtons(options, 'none')

                setTimeout(() => {
                    playerHand.src = `images/${option.innerHTML}.png`;
                    computerHand.src = `images/${computerChoice}.png`;

                    deactiveOrActiveButtons(options, 'all')
                    compareHands(option.innerHTML, computerChoice);
                    updateScore();
                }, 2000)
            })
        }
    }

    const deactiveOrActiveButtons = (buttons, noneOrAll) => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.pointerEvents = noneOrAll;
        }
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.innerHTML = pScore;
        computerScore.innerHTML = cScore;

    }

    const compareHands = (comparePlayer, compareComputer) => {
        const text = document.querySelector('.match-text');

        if (comparePlayer === compareComputer) {
            text.innerHTML = 'It is a draw!'
            return;
        }

        if (comparePlayer === 'rock') {
            if (compareComputer === 'scissors') {
                text.innerHTML = 'You win!'
                pScore++;
            } else {
                text.innerHTML = 'Computer win!'
                cScore++;
            }
        }

        if (comparePlayer === 'paper') {
            if (compareComputer === 'scissors') {
                text.innerHTML = 'Computer win!'
                cScore++;
            } else {
                text.innerHTML = 'You win!'
                pScore++;
            }
        }

        if (comparePlayer === 'scissors') {
            if (compareComputer === 'rock') {
                text.innerHTML = 'Computer win!'
                cScore++;
            } else {
                text.innerHTML = 'You win!'
                pScore++;
            }
        }

    }


    startGame();
    match();
}


game();