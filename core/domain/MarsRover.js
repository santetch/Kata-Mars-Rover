import Position from "./Position";

class MarsRover {
    constructor(position, move, turn) {
        this.position = position;
        this.move = move;
        this.turn = turn;
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

    turnRight() {
        const newDirection = this.turn.right();
        this.position = new Position(newDirection, this.position.getMap(), this.position.getCoordinates());
    }

    turnLeft() {
        const newDirection = this.turn.left();
        this.position = new Position(newDirection, this.position.getMap(), this.position.getCoordinates());
    }
}

export default MarsRover;