const startBtn = document.querySelector('.startBtn');
const boxContainer = document.querySelector('.box-container');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const timeSettings = document.querySelector('.time-settings');
const timeCountdown = document.querySelector('.timeCountdown');
const score = document.querySelector('.score');
const symbols = ['+', '-', 'x', '÷'];

answer.addEventListener('input', (e) => {
    if(window.value == parseFloat(answer.value)){
        answer.value = '';
        score.innerText = parseFloat(score.innerText) + 1;
        timeCountdown.innerText = parseFloat(timeCountdown.innerText) + 2;
        genRandomQuestion();
    }
})

function resetGame(){
    answer.value = '';
    score.innerText = 0;
    timeLeft.innerText = 'Time left : '
    timeCountdown.innerText = parseFloat(timeSettings.innerText);
    genRandomQuestion(1);
}

function genRandomQuestion(digits){
    num = 10 ^ digits
    var symbolRandom = symbols[Math.floor(Math.random() * 4)];
    var firstNum = Math.max(Math.floor(Math.random() * num), 1);
    var secondNum = Math.max(Math.floor(Math.random() * num), 1);
    question.innerText = `${firstNum} ${symbolRandom} ${secondNum} =`
    window.value = calculateAns(symbolRandom, firstNum, secondNum);
}

function calculateAns(symbolRandom, firstNum, secondNum){
    if(symbolRandom == '+'){
        var ans = firstNum + secondNum;
    } else if(symbolRandom == '-'){
        var ans = firstNum - secondNum;
    } else if(symbolRandom == 'x'){
        var ans = firstNum * secondNum;
    } else if(symbolRandom == '÷'){
        var ans = firstNum / secondNum;
    }
    return ans;
}