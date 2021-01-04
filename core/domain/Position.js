class Position {
    constructor(x, y, direction, map) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.map = map;
    }

    increaseY() {
        const newY = this.map.increaseY(this);
        return new Position(this.x, newY, this.direction, this.map);
    }

    increaseX() {
        const newX = this.map.increaseX(this);
        return new Position(newX, this.y, this.direction, this.map);
    }

    decreaseY() {
        const newY = this.map.decreaseY(this);
        return new Position(this.x, newY, this.direction, this.map);
    }

    decreaseX() {
        const newX = this.map.decreaseX(this);
        return new Position(newX, this.y, this.direction, this.map);
    }

}

export default Position;