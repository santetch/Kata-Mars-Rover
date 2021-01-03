class MarsRover {
    constructor(position, move, rotate) {
        this.position = position;
        this.move = move;
        this.rotate = rotate;
    }

    getPosition() {
        return this.position;
    }

    moveForward() {
        this.position = this.move.forward(this.position);
    }

    moveBackward() {
        this.position = this.move.backward(this.position);
    }
}

export default MarsRover;