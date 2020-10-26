class Player {
    constructor() {
        this.x = 25;
        this.y = 25;

        const image = new Image();
        this.image = image;
        image.src = '/pics/Captura de ecrã 2020-10-26, às 10.38.43.png'
    }
    moveUp() {
        if (this.y < 15) {
            return this.y = 15;
        }
        this.y -= 25;
    }
    moveDown() {
        if(this.y > 440) {
            return this.y = 440;
        }
        this.y += 25;
    }
    moveLeft() {
        if (this.x < 15 ) {
            return this.x = 15;
        }
        this.x -= 25;
    }
    moveRight() {
        if( this.x > 440) {
            return this.x = 440;
        }
        this.x += 25;
    }
    draw() {

        ctx.drawImage(this.image, this.x, this.y, 50, 50);
    }
}

document.addEventListener('keydown', e => {
    switch(e.keyCode) {
        case 38: 
            testPlayer.moveUp();
        break;
        case 40:
            testPlayer.moveDown();
        break;
        case 37:
            testPlayer.moveLeft();
        break;
        case 39:
            testPlayer.moveRight();
        break;
    }
});
