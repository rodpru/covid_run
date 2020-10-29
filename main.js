// --> Starting hidden blocks
document.getElementById('score').style.display = 'none';
document.getElementById('canvas').style.display = "none";
document.getElementById('reset').style.display = 'none';
document.getElementById('pop-up').style.display = 'none';


let gameRunning = true;
let userScore = 100;

// --> Reset
function resetGame() {
    gameRunning = false;
    document.getElementById('canvas').style.display = "none";
    let scoreBoard = document.getElementById('points');
    scoreBoard.innerHTML = 0,
    pandemic = [],
    virusFrequency = 0,
    userScore = 100;
    document.getElementById('bar').style.width = `${userScore * 5}px`;
    document.getElementById('start').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('gif').style.display= 'block';
    document.getElementById('pop-up').style.display = 'none';

}

// --> Start 
function startGame() {
    gameRunning = true;
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('canvas').style.display = "block";
    document.getElementById('gif').style.display= 'none';
    updateCanvas();
}

// -->  Start and Reset BTN
let resetBtn = document.getElementById('reset');
resetBtn.onclick = () => {
    backSound.pause();
    gameOver.pause();
    resetGame();
}

document.getElementById('start').onclick = () => {
    backSound.play();
    startGame();
}


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let testPlayer = new Player();


// --> virus
let pandemic = [];
let virusFrequency = 0;
function createVirus() {
    virusFrequency++;
    if(virusFrequency % 120 === 0) {
        pandemic.push(new Virus());
    }
    for(let i = 0; i < pandemic.length; i++) {
        pandemic[i].update();
        pandemic[i].draw();
    }
}

// --> bonus ++
let cure = [];
let vacineFrequency = 0;
function createVacine() {
    vacineFrequency++;
    if(vacineFrequency % 1000 === 0) {
        cure.push(new Vacine());
    }
    for(let p = 0; p < cure.length; p++) {
        cure[p].update();
        cure[p].draw();
    }
}


// --> Sounds
let vacineSound = new Audio ('/sounds/vacine.wav');
let virusSound = new Audio ('/sounds/virus.wav');
let backSound = new Audio ('/sounds/background - 5m loop.mp3');
let gameOver = new Audio ('/sounds/export_ofoct.com.mp3');


// --> Colision
function detectColision(virus){
    if (testPlayer.x + testPlayer.width > virus.x &&
        testPlayer.x < virus.x + virus.width &&
        testPlayer.y + testPlayer.height > virus.y &&
        testPlayer.y < virus.y + virus.height) {
            return true;
        }

        return false;
}


// --> what makes everything run
function updateCanvas() {
    ctx.clearRect(0, 0, 500, 500);
    testPlayer.draw();
    createVirus();
    createVacine();
    if ( cure.length > 0) {
        for(let i = 0; i < cure.length; i++){
            if(detectColision(cure[i])) {
                vacineSound.play();
                if (userScore < 100) {
                    userScore += 10;
                }
                document.getElementById('bar').style.width = `${userScore * 5}px`;

                let lifeUp = document.getElementById('points');
                lifeUp.innerHTML = userScore;
                cure.splice(i, 1);
            }
        }
    }
    if (pandemic.length > 0) {
        for(let i=0; i < pandemic.length -1 ; i++) {
            if (detectColision(pandemic[i])) {
                virusSound.play();
                userScore -= 10;
                document.getElementById('bar').style.width = `${userScore * 5}px`;

                let points = document.getElementById('points');
                points.innerHTML = userScore
                pandemic.splice(i, 1);
                if(userScore <= 0) {
                    document.getElementById('pop-up').style.display = 'block';
                    backSound.pause();
                    gameOver.play();
                    gameOver.play();
                    gameRunning = false
                }
            }
        }
    }
    
    
    if (gameRunning === true) {
        requestAnimationFrame(updateCanvas);
    }
}

