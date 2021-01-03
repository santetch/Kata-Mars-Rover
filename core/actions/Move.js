import directions from "../domain/Directions";

class Move {
    constructor() {
    }

    forward(position) {
        let newPosition;
        switch (position.direction) {
            case directions.NORTH:
                newPosition = position.increaseY();
                break;
            case directions.SOUTH:
                newPosition = position.decreaseY();
                break;
            case directions.EAST:
                newPosition = position.increaseX();
                break;
            case directions.WEST:
                newPosition = position.decreaseX();
                break;
        }

        return newPosition;
    }

    backward(position) {
        let newPosition;
        switch (position.direction) {
            case directions.NORTH:
                newPosition = position.decreaseY();
                break;
            case directions.SOUTH:
                newPosition = position.increaseY();
                break;
            case directions.EAST:
                newPosition = position.decreaseX();
                break;
            case directions.WEST:
                newPosition = position.increaseX();
                break;
        }

        return newPosition;
    }
}

export default Move;