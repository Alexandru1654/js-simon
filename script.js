let numbers = [];
let timer;

// Function to display random numbers
const displayNumbers = () => {
    // Generate 5 random numbers between 0 and 99
    numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    document.getElementById('numbers').textContent = `Numeri: ${numbers.join(', ')}`;
    document.getElementById('numbers').style.display = 'block';

    // Timer 30 seconds
    let timeLeft = 30;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Tempo rimanente: ${timeLeft} secondi`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('numbers').style.display = 'none';
            document.getElementById('inputs').style.display = 'block';
            document.getElementById('timer').style.display = 'none';
        }
    }, 1000);
};

// Function to check the numbers entered by the user
const checkNumbers = () => {
    const userInputs = [
        parseInt(document.getElementById('input1').value),
        parseInt(document.getElementById('input2').value),
        parseInt(document.getElementById('input3').value),
        parseInt(document.getElementById('input4').value),
        parseInt(document.getElementById('input5').value)
    ].filter(num => !isNaN(num));

    // Filter the correct numbers that the user entered
    const correctNumbers = userInputs.filter(num => numbers.includes(num));
    const resultText = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`;
    document.getElementById('result').textContent = resultText;
};

// Adds a listener for the submit button click
document.getElementById('submit').addEventListener('click', checkNumbers);
window.onload = displayNumbers;


