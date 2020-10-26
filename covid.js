// Bouncing ball

class Virus {
    constructor() {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.width);
        this.vx = 1;
        this.vy = 2;
        const covid = new Image();
        this.covid = covid;
        covid.src = '/pics/coronavirus-classic-attack_0.png';
    }        
    draw() {
        ctx.drawImage(this.covid, this.x, this.y, 30, 30);
    }
}

// var ball = {
//   x: 100,
//   y: 100,
//   vx: 25,
//   vy: 20,
//   radius: 25,
//   color: "#2e7d32",
//   draw: function() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// };


function update() {
  testVirus.x += testVirus.vx;
  testVirus.y += testVirus.vy;
  if (testVirus.y + testVirus.vy > canvas.height || testVirus.y + testVirus.vy < 0) {
    testVirus.vy *= -1;
  }
  if (testVirus.x + testVirus.vx > canvas.width || testVirus.x + testVirus.vx < 0) {
    testVirus.vx *= -1;
    console.log(testVirus.vx)
  }
  
}

// document.getElementById("faster").onclick = function() {
//     ball.vx *= 1.1;
// };

// document.getElementById("slower").onclick = function() {
//     ball.vx *= 0.9;
// };
