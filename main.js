document.getElementById('canvas').style.display = "none";
document.getElementById('reset').style.display = 'none';
document.getElementById('score').style.display = 'none';

let resetBtn = document.getElementById('reset');
resetBtn.onclick = () => {
    document.getElementById('canvas').style.display = "none";
    scoreTest = 0,
    pandemic =0,
    virusFrequency = 0,
    document.getElementById('score').style.display = 'none';
    document.getElementById('start').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
}

document.getElementById('start').onclick = () => {
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('canvas').style.display = "block";
    document.getElementById('score').style.display = 'block';
    document.getElementById('gif').style.display= 'none';
    updateCanvas();
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
    let scoreBoard = document.getElementById('points');
    scoreBoard.innerHTML = Math.floor(pandemic.length * 5);
}

function updateCanvas() {
    ctx.clearRect(0, 0, 500, 500);
    testPlayer.draw();
    createVirus();
    scoreTest();
    pandemic.forEach(virus =>{
        testPlayer.crashWith(virus);
    })
    
    
    requestAnimationFrame(updateCanvas);
}

// updateCanvas();