const choices = document.querySelectorAll('.option')
        const yourScore = document.getElementById('your-score')
        const computerScore = document.getElementById('comp-score')
        const message = document.getElementById('message')

        let userScore = 1;
        let compScore = 1;

        const drawGame = () => {
            // console.log("Draw game");
            message.innerHTML = "Game Was draw ! Play again";
            message.style.backgroundColor = 'orange';
            message.style.color = 'black';
        }

        const CompChoice = () => {
            const options = ['rock','paper' , 'scissors']
            let generateCompChoice =  Math.floor(Math.random()*3)
            return options[generateCompChoice];
        }

        const showWinner = (userWin ,userChoice , compChoice) => {
            if(userWin)
            {
                // console.log("You win!");
                yourScore.innerHTML =  userScore++;
                message.innerHTML = `You win ! ${userChoice} beats ${compChoice}`;
                message.style.backgroundColor = 'green'
                
            }else{
                // console.log("Computer Win!");
                computerScore.innerHTML =  compScore++;
                message.innerHTML = `You lose ! ${compChoice} beats ${userChoice}`;
                message.style.backgroundColor = 'red'
        
            }
        }

        const playgame  = (userChoice) => {
            // console.log("User choice : " , userChoice);
            let compChoice = CompChoice()
            // console.log("computer choice : " , compChoice);
            if(userChoice === compChoice)
            {
                drawGame();
            }else {
                let userWin = true;
                if(userChoice === 'rock')
                {
                    userWin = compChoice === 'paper' ? false:true;
                }else if(userChoice === 'paper'){
                    userWin = compChoice === 'scissors' ? false : true;
                }else if(userChoice === 'scissors'){
                    userWin = compChoice === 'rock' ? false : true;
                }
                showWinner(userWin , userChoice , compChoice);
            }
        }

        choices.forEach((choice) => {
            choice.addEventListener('click' , () => {
                let userChoice = choice.getAttribute('id');
                 playgame(userChoice);
            })
        })