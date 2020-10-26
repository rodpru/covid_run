document.getElementById('canvas').style.display = "none";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.getElementById('start').onclick = () => {
    console.log('click');
    updateCanvas();
}


let pandemic = [];
let testPlayer = new Player();

function createVirus() {
    let testVirus = new Virus();
    pandemic.push();

}

function updateCanvas() {
    document.getElementById('canvas').style.display = "block";
    ctx.clearRect(0, 0, 500, 500);
    testPlayer.draw();
    testVirus.draw();
    update();

    
    requestAnimationFrame(updateCanvas);
}

// updateCanvas();