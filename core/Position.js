class Position {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    increaseY() {
        this.y++;
    }

    increaseX() {
        this.x++;
    }

    decreaseY() {
        this.y--;
    }

    decreaseX() {
        this.x--;
    }

}

export default Position;