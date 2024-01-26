let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msgpara = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#computer-score');

const genComputerChoice = ()=>{
    const options = ["rock" , "paper" , "scissor"]
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx]
    //rock , paper , scissor

}

const drawgame = () =>{
    msgpara.style.backgroundColor = '#081b31';
    msgpara.innerText = 'game was draw';
    console.log('Game was Draw Play again')
}

const showWinner = (userWin , userchoice , compChoice) =>{
    if(userWin){
        console.log('You Win');
        userScore++;
        userScorePara.innerText = userScore;
        msgpara.innerText = `You win Your ${userchoice} beats ${compChoice}`;
        msgpara.style.backgroundColor = "green"
    }
    else{
        console.log('Computer Win');
        computerScore++;
        compScorePara.innerText = computerScore;
        msgpara.innerText = `You Lost ${compChoice} beats Your ${userchoice}`;
        msgpara.style.backgroundColor = "red"
    }
}

const playGame = (userchoice)=>{
    console.log('user choice = ' , userchoice)
    const compChoice = genComputerChoice();
    console.log('comp choice = ' , compChoice);


    if (userchoice === compChoice){
        // draw game 
        drawgame();
    }
    else{
        let userWin = true;
        if(userchoice === 'rock'){
            // scissor , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            // rock , scissor
            userWin = compChoice === "scissor" ? false : true ;
        } else{
            // rock , paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userchoice , compChoice );
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click' , () =>{
        const userchoice = choice.getAttribute("id")
        playGame(userchoice)
    })
})