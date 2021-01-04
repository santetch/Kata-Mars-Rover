import Coordinates from "./Coordinates";

class Position {
    constructor(direction, map, coordinates) {
        this.direction = direction;
        this.map = map;
        this.coordinates = coordinates;
    }

    getY() {
        return this.coordinates.getY();
    }

    getX() {
        return this.coordinates.getX();
    }

    getMap() {
        return this.map;
    }

    getCoordinates() {
        return this.coordinates;
    }

    increaseY() {
        const newY = this.map.increaseY(this);
        const coordinates = new Coordinates(this.coordinates.getX(), newY);

        return new Position(this.direction, this.map, coordinates);
    }

    increaseX() {
        const newX = this.map.increaseX(this);
        const coordinates = new Coordinates(newX, this.coordinates.getY());

        return new Position(this.direction, this.map, coordinates);
    }

    decreaseY() {
        const newY = this.map.decreaseY(this);
        const coordinates = new Coordinates(this.coordinates.getX(), newY);

        return new Position(this.direction, this.map, coordinates);
    }

    decreaseX() {
        const newX = this.map.decreaseX(this);
        const coordinates = new Coordinates(newX, this.coordinates.getY());

        return new Position(this.direction, this.map, coordinates);
    }

}

export default Position;