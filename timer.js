const timerContainer = document.querySelector('.timer-container');
const timeLeft = document.querySelector('.timeLeft');
const resetBtn = document.querySelector('.resetBtn');
const quizContainer = document.querySelector('.quiz-container');

startBtn.addEventListener('click', () => {
    resetGame();
    restartGame();
    boxContainer.style.display = 'flex';
    startBtn.style.display = 'none';
})

resetBtn.addEventListener('click', () => {
    resetGame();
    restartGame();
})

function gameOver(){
    timeLeft.innerText = "Time's up!";
    quizContainer.style.display = 'none';
    resetBtn.style.display = 'flex';
}

function startTimer(){
    var x = setInterval(() => {
        if (timeCountdown.innerText < 1) {
            timeCountdown.style.display = 'none';
            clearInterval(x);
            gameOver();
        }
        timeCountdown.innerText = parseFloat(timeCountdown.innerText) - 1;
    }, 1000);
}

function restartGame(){
    quizContainer.style.display = 'flex';
    timeCountdown.style.display = 'flex';
    resetBtn.style.display = 'none';
    startTimer();
}