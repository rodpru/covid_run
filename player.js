class Player {
    constructor() {
        this.x = 25;
        this.y = 25;
        this.direction = 'south';
        this.height = 50;
        this.width = 50;

    }
    moveUp() {
        this.direction = 'north';
        if (this.y < 15) {
            return this.y = 15;
        }
        this.y -= 25;
    }
    moveDown() {
        this.direction = 'south';
        if(this.y > 440) {
            return this.y = 440;
        }
        this.y += 25;
    }
    moveLeft() {
        this.direction = 'west';
        if (this.x < 15 ) {
            return this.x = 15;
        }
        this.x -= 25;
    }
    moveRight() {
        this.direction = 'east';
        if( this.x > 440) {
            return this.x = 440;
        }
        this.x += 25;
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
    crashWith(virus) {
         if ((this.bottom() < virus.top() || this.top() > virus.bottom() || this.right() < virus.left() || this.left() > virus.right())) {
         }
    }
    draw() {
        const imageSouth = new Image();
        imageSouth.src = '/pics/captura de ecrã 2020-10-26, às 10.38.43.png'
        const imageNorth = new Image();
        imageNorth.src = '/pics/north_preview_rev_1.png'
        const imageEast = new Image();
        imageEast.src = '/pics/east_preview_rev_1.png'
        const imageWest = new Image();
        imageWest.src = '/pics/west_preview_rev_1.png'
        if (this.direction === 'north') {
            ctx.drawImage(imageNorth, this.x, this.y, 50, 50);
        } else if (this.direction === 'west'){
            ctx.drawImage(imageWest, this.x, this.y, 50, 50);
        } else if (this.direction === 'east') {
            ctx.drawImage(imageEast, this.x, this.y, 50, 50);
        } else {
            ctx.drawImage(imageSouth, this.x, this.y, 50, 50);
        };
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
