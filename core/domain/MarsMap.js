class MarsMap {
    constructor(x, y, obstacles, presenter) {
        this.x = x;
        this.y = y;
        this.obstacles = obstacles;
        this.presenter = presenter;
    }

    increaseY(position) {
        return this.lookForObstacles(position.getY() + 1, position.getX()) ? position.getY() : this.calculateTopBorder(position);
    }

    decreaseY(position) {
        return this.lookForObstacles(position.getY() - 1, position.getX()) ? position.getY() : this.calculateBottomBorder(position);
    }

    increaseX(position) {
        return this.lookForObstacles(position.getY(), position.getX() + 1) ? position.getX() : this.calculateRightBorder(position);
    }

    decreaseX(position) {
        return this.lookForObstacles(position.getY(), position.getX() - 1) ? position.getX() : this.calculateLeftBorder(position);
    }

    calculateTopBorder(position) {
        return position.getY() + 1 < this.y ? position.getY() + 1 : 0;
    }

    calculateBottomBorder(position) {
        return position.getY() === 0 ? this.y - 1 : position.getY() - 1;
    }

    calculateRightBorder(position) {
        return position.getX() + 1 < this.x ? position.getX() + 1 : 0;
    }

    calculateLeftBorder(position) {
        return position.getX() === 0 ? this.x - 1 : position.getX() - 1;
    }

    showError() {
        this.presenter.showError();
    }

    lookForObstacles(y, x) {
        for (let obstacle of this.obstacles) {
            if (y === obstacle.getY() && x === obstacle.getX()) {
                this.showError();
                return true;
            }
        }

        return false;
    }
}

export default MarsMap;