class Position {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    increaseY() {
        return new Position(this.x, this.y + 1, this.direction)
    }

    increaseX() {
        return new Position(this.x + 1, this.y, this.direction);
    }

    decreaseY() {
        return new Position(this.x, this.y - 1, this.direction);
    }

    decreaseX() {
        return new Position(this.x - 1, this.y, this.direction);
    }

}

export default Position;