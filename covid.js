class Virus {
    constructor() {
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.width);
        this.vx = 1;
        this.vy = 2;
        const covid = new Image();
        this.covid = covid;
        covid.src = '/pics/coronavirus.png';
        this.height = 30;
        this.width = 30;
    }
    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }        
    draw() {
        ctx.drawImage(this.covid, this.x, this.y, 30, 30);
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
          this.vy *= -1;
        }
        if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
          this.vx *= -1;
        }  
      }
}
