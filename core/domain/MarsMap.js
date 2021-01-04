class MarsMap {
    constructor(x, y, obstacles, presenter) {
        this.x = x;
        this.y = y;
        this.obstacles = obstacles;
        this.presenter = presenter;
    }

    increaseY(position) {
        return this.lookForObstacles(position.y + 1, position.x) ? position.y : this.calculateTopBorder(position);
    }

    decreaseY(position) {
        return this.lookForObstacles(position.y - 1, position.x) ? position.y : this.calculateBottomBorder(position);
    }

    increaseX(position) {
        return this.lookForObstacles(position.y, position.x + 1) ? position.x : this.calculateRightBorder(position);
    }

    decreaseX(position) {
        return this.lookForObstacles(position.y, position.x - 1) ? position.x : this.calculateLeftBorder(position);
    }

    calculateTopBorder(position) {
        return position.y + 1 < this.y ? position.y + 1 : 0;
    }

    calculateBottomBorder(position) {
        return position.y === 0 ? this.y - 1 : position.y - 1;
    }

    calculateRightBorder(position) {
        return position.x + 1 < this.x ? position.x + 1 : 0;
    }

    calculateLeftBorder(position) {
        return position.x === 0 ? this.x - 1 : position.x - 1;
    }

    showError() {
        this.presenter.showError();
    }

    lookForObstacles(y, x) {
        for (let obstacle of this.obstacles) {
            if (y === obstacle.y && x === obstacle.x) {
                this.showError();
                return true;
            }
        }

        return false;
    }
}

export default MarsMap;