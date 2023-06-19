let computerChoiceDisplay =  document.querySelector('#Computer-choice');
let userChoiceDisplay = document.querySelector('#user-choice');
let reusltDisplay = document.querySelector('#reult');
const PossibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let reult

PossibleChoices.forEach(PossibleChoices => PossibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3) + 1
    //console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }

    if (randomNumber === 2){
        computerChoice = 'Scissors'
    }

    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults(){
    if (computerChoice === userChoice){
        result = 'Its a draw'
    }

    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'you win!'
    }

    if (computerChoice === 'rock' && userChoice === 'Scissors'){
        result = 'you lost'
    }

    if (computerChoice === 'paper' && userChoice === 'Scissors'){
        result = 'you win'
    }

    if (computerChoice === 'rock' && userChoice === 'rock'){
        result = 'you lost'
    }

    if (computerChoice === 'Scissors' && userChoice === 'rock'){
        result = 'you win'
    }

    if (computerChoice === 'Scissors' && userChoice === 'paper'){
        result = 'you lost'
    }

    reusltDisplay.innerHTML = result;
}