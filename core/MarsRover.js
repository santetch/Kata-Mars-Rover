import directions from "../core/Directions";

class MarsRover {
    constructor(position) {
        this.position = position;
    }

    getPosition() {
        return this.position;
    }

    moveForward() {
        switch (this.position.direction) {
            case directions.NORTH:
                this.position.increaseY();
                break;
            case directions.SOUTH:
                this.position.decreaseY();
                break;
            case directions.EAST:
                this.position.increaseX();
                break;
            case directions.WEST:
                this.position.decreaseX();
                break;
        }
    }

    moveBackward() {
        switch (this.position.direction) {
            case directions.NORTH:
                this.position.decreaseY();
                break;
            case directions.SOUTH:
                this.position.increaseY();
                break;
            case directions.EAST:
                this.position.decreaseX();
                break;
            case directions.WEST:
                this.position.increaseX();
                break;
        }
    }
}

export default MarsRover;