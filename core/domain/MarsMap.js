import Coordinates from "./Coordinates";

class MarsMap {
    constructor(x, y, obstacles, presenter) {
        this.x = x;
        this.y = y;
        this.obstacles = obstacles;
        this.presenter = presenter;
    }

    increaseY(position) {
        const coordinates = new Coordinates(position.getX(), position.getY() + 1);

        if (this.lookForObstacles(coordinates)) {
            this.showError();
            return position.getY();
        } else {
            const newY = this.calculateTopBorder(position);
            const coordinates = new Coordinates(position.getX(), newY);
            this.showSuccess(position.direction, coordinates);

            return newY;
        }
    }

    decreaseY(position) {
        const coordinates = new Coordinates(position.getX(), position.getY() - 1);

        if (this.lookForObstacles(coordinates)) {
            this.showError();
            return position.getY();
        } else {
            const newY = this.calculateBottomBorder(position);
            const coordinates = new Coordinates(position.getX(), newY);
            this.showSuccess(position.direction, coordinates);

            return newY;
        }
    }

    increaseX(position) {
        const coordinates = new Coordinates(position.getX() + 1, position.getY());

        if (this.lookForObstacles(coordinates)) {
            this.showError();
            return position.getX();
        } else {
            const newX = this.calculateRightBorder(position);
            const coordinates = new Coordinates(newX, position.getY());
            this.showSuccess(position.direction, coordinates);

            return newX;
        }
    }

    decreaseX(position) {
        const coordinates = new Coordinates(position.getX() - 1, position.getY());

        if (this.lookForObstacles(coordinates)) {
            this.showError();
            return position.getX();
        } else {
            const newX = this.calculateLeftBorder(position);
            const coordinates = new Coordinates(newX, position.getY());
            this.showSuccess(position.direction, coordinates);

            return newX;
        }
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

    lookForObstacles(coordinates) {
        return this.obstacles.find( obstacle =>
            coordinates.x === obstacle.x && coordinates.y === obstacle.y
        );
    }

    showError() {
        this.presenter.showError();
    }

    showSuccess(direction, coordinates) {
        const message = `Successfully moved to X: ${coordinates.getX()} | Y: ${coordinates.getY()} | ${direction}`;

        this.presenter.showSuccess(message);
    }

}

export default MarsMap;