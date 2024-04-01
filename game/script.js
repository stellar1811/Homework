// const rock = document.querySelector('.rock-box');
// const scissors = document.querySelector('.scissors-box');
// const paper = document.querySelector('.paper-box');

const choices = ['rock', 'paper', 'scissors'];
const screenResult = document.querySelector('.result');

document.querySelectorAll('.box').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, computerChoice);

        const userChoiceImg = document.createElement('img');
        userChoiceImg.src = `${userChoice}.png`;
        userChoiceImg.alt = userChoice;

        const computerChoiceImg = document.createElement('img');
        computerChoiceImg.src = `${computerChoice}.png`;
        computerChoiceImg.alt = computerChoice;

        const resultText = document.createElement('p');
        resultText.textContent = result;

        // Очищення елементу .result перед додаванням нових дочірніх елементів
        screenResult.innerHTML = '';

        // Додавання елементів до .result
        screenResult.appendChild(userChoiceImg);
        screenResult.appendChild(resultText);
        screenResult.appendChild(computerChoiceImg);



        // screenResult.textContent = result;
        // const computerChoiceDisplay = document.createElement('div');
        // computerChoiceDisplay.textContent = `Computer chose ${computerChoice}`;
        // screenResult.appendChild(computerChoiceDisplay);
    });
});

function getResult(user, computer) {
    console.log(user);
    console.log(computer);
    if (user === computer) {
        return "It's a tie!";
    } 
    
    else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')) {
        return "You win!";
    } 
    else {
        return "You lose!";
    }
}