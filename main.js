const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let testplayer = new Player();


function updateCanvas() {
    ctx.clearRect(0, 0, 500, 500);
    testplayer.draw();

    
    requestAnimationFrame(updateCanvas);
}

updateCanvas();