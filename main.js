document.getElementById('canvas').style.display = "none";
document.getElementById('reset').style.display = 'none';
document.getElementById('score').style.display = 'none';
document.getElementById('pop-up').style.display = 'none';

let gameRunning = true;
let userScore;


function resetGame() {
    gameRunning = true;
    document.getElementById('canvas').style.display = "none";
    let scoreBoard = document.getElementById('points');
    scoreBoard.innerHTML = 0,
    pandemic = [],
    virusFrequency = 0,
    document.getElementById('score').style.display = 'none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('gif').style.display= 'block';
    document.getElementById('pop-up').style.display = 'none';
}

let resetBtn = document.getElementById('reset');
resetBtn.onclick = () => {
    resetGame();
}

function startGame() {
    gameRunning = true;
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('canvas').style.display = "block";
    document.getElementById('score').style.display = 'block';
    document.getElementById('gif').style.display= 'none';
    updateCanvas();
}

document.getElementById('start').onclick = () => {
    startGame();
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let testPlayer = new Player();

let pandemic = [];
let virusFrequency = 0;

function createVirus() {
    virusFrequency++
    if(virusFrequency % 120 === 0) {
        pandemic.push(new Virus());
    }
    for(let i = 0; i < pandemic.length; i++) {
        pandemic[i].update();
        pandemic[i].draw();
    }
}
function scoreTest() {
    userScore = Math.floor(pandemic.length * 4);
    let scoreBoard = document.getElementById('points');
    scoreBoard.innerHTML = userScore
}

function detectColision(virus){
    let points = document.getElementById('points');
    if (testPlayer.x + testPlayer.width > virus.x &&
        testPlayer.x < virus.x + virus.width &&
        testPlayer.y + testPlayer.height > virus.y &&
        testPlayer.y < virus.y + virus.height) {
            userScore -= 15;
            points.innerHTML = userScore
            if(userScore <= 0) {
                document.getElementById('pop-up').style.display = 'block';
                gameRunning = false;

            }
        }
}

function updateCanvas() {
    ctx.clearRect(0, 0, 500, 500);
    testPlayer.draw();
    createVirus();
    scoreTest();
    if (pandemic.length > 0) {
        pandemic.forEach(virus =>{
            detectColision(virus);
        })

    }
    
    if (gameRunning === true) {
        requestAnimationFrame(updateCanvas);
    }
}

// updateCanvas()