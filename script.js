const numbersElement = document.getElementById('numbers');
const inputArea = document.getElementById('input-area');
const submitButton = document.getElementById('submit');
const gameElement = document.getElementById('result');

// Generate random numbers from 1 to 100
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (randomNumbers.includes(randomNumber));
    randomNumbers.push(randomNumber);
}

// View numbers on page
numbersElement.innerText = randomNumbers.join('');

setTimeout(() => {
    inputArea.classList.add('hidden');
    inputArea.classList.remove('hidden');
}
, 3000);

// Send button
    submitButton.addEventListener('click', () => {
        const userNumbers = [];
        for (let i = 1; i <= 5; i++) {
            const inputValue = parseInt(document.getElementById(input$).value);
            if (!isNaN(inputValue)) {
                userNumbers.push(inputValue);
            }
        }
    });
    
