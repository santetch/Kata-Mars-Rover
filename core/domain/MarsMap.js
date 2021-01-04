class MarsMap {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    increaseY(previousY) {
        return previousY + 1 < this.y ? previousY + 1 : 0;
    }

    decreaseY(previousY) {
        return previousY === 0 ? this.y - 1 : previousY - 1;
    }

    increaseX(previousX) {
        return previousX + 1 < this.x ? previousX + 1 : 0;
    }

    decreaseX(previousX) {
        return previousX === 0 ? this.x - 1 : previousX - 1;
    }

}

export default MarsMap;