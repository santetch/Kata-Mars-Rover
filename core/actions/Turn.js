import directions from "../../core/domain/Directions";

class Turn {
    constructor() {
    }

    right(direction) {
        let newDirection;
        switch (direction) {
            case directions.NORTH:
                newDirection = directions.EAST;
                break;
            case directions.SOUTH:
                newDirection = directions.WEST;
                break;
            case directions.EAST:
                newDirection = directions.NORTH;
                break;
            case directions.WEST:
                newDirection = directions.SOUTH;
                break;
        }

        return newDirection;
    }

    left(direction) {
        let newDirection;
        switch (direction) {
            case directions.NORTH:
                newDirection = directions.WEST;
                break;
            case directions.SOUTH:
                newDirection = directions.EAST;
                break;
            case directions.EAST:
                newDirection = directions.SOUTH;
                break;
            case directions.WEST:
                newDirection = directions.NORTH;
                break;
        }

        return newDirection;
    }

}

export default Turn;