document.getElementById('canvas').style.display = "none";
document.getElementById('reset').style.display = 'none';
document.getElementById('score').style.display = 'none';
document.getElementById('pop-up').style.display = 'none';

let gameRunning = true;
let userScore = 100;


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
    virusFrequency++;
    if(virusFrequency % 120 === 0) {
        pandemic.push(new Virus());
    }
    for(let i = 0; i < pandemic.length; i++) {
        pandemic[i].update();
        pandemic[i].draw();
    }
}

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

// function scoreTest() {
//     userScore = Math.floor(pandemic.length * 2);
//     let scoreBoard = document.getElementById('points');
//     scoreBoard.innerHTML = userScore
// }

function detectColision(virus){
    if (testPlayer.x + testPlayer.width > virus.x &&
        testPlayer.x < virus.x + virus.width &&
        testPlayer.y + testPlayer.height > virus.y &&
        testPlayer.y < virus.y + virus.height) {
            return true;
        }

        return false;
}

function updateCanvas() {
    ctx.clearRect(0, 0, 500, 500);
    testPlayer.draw();
    createVirus();
    createVacine();
    // scoreTest();
    if ( cure.length > 0) {
        for(let i = 0; i < cure.length; i++){
            if(detectColision(cure[i])) {
                userScore += 10;
                cure.splice(i, 1);
            }
        }
    }
    if (pandemic.length > 0) {
        for(i=0; i < pandemic.length; i++) {
            if (detectColision(pandemic[i])) {
                console.log("colisao");
                userScore -= 10;
                let points = document.getElementById('points');
                points.innerHTML = userScore
                pandemic.splice(i, 1);
                if(userScore <= 0) {
                    document.getElementById('pop-up').style.display = 'block';
                    gameRunning = false
                }
            }
            
            //testPlayer.crashWith(virus);
        }
    }
    
    
    if (gameRunning === true) {
        requestAnimationFrame(updateCanvas);
    }
}

// updateCanvas()