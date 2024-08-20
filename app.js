//
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}
console.log(p1.button);
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')

}
console.log(p2.score);
const resetButton = document.querySelector('#reset')
const selectButton = document.querySelector('#playTo')
let isGameOver = false;
let winningScore = 3;


// Events : 
p1.button.addEventListener('click', () => winGame(p1, p2))
p2.button.addEventListener('click', () => winGame(p2, p1))
selectButton.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    isGameOver = false;
    resetGame();
})
resetButton.addEventListener('click', resetGame)
// Functions :
function resetGame() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}

function winGame(winner, loser) {
    if (!isGameOver) {
        winner.score++
        if (winner.score === winningScore) {
            isGameOver = true;
            winner.button.disabled = true;
            loser.button.disabled = true;
            winner.display.classList.add('has-text-success')
            loser.display.classList.add('has-text-danger')
        }
        winner.display.textContent = winner.score;
    }
}