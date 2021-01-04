import directions from "../../core/domain/Directions";
import Turn from "../../core/actions/Turn";
import {expect} from "chai";

describe('Turn Should', () => {
    let turn;

    let direction;
    let finalDirection;
    let destinationDirection;

    beforeEach(() => {

    });

    context(',when facing North,', () => {
        it('turn right from direction "N" to "E"', () => {
            givenANorthDirection();
            givenATurn();
            givenADestinationDirection(directions.EAST);

            whenTurnsRight();

            thenTurns();
        });

        it('turn left from direction "N" to "W"', () => {
            givenANorthDirection();
            givenATurn();
            givenADestinationDirection(directions.WEST);

            whenTurnsLeft();

            thenTurns();
        });
    });

    context(',when facing South,', () => {
        it('turn right from direction "N" to "W"', () => {
            givenASouthDirection();
            givenATurn();
            givenADestinationDirection(directions.WEST);

            whenTurnsRight();

            thenTurns();
        });

        it('turn left from direction "N" to "E"', () => {
            givenASouthDirection();
            givenATurn();
            givenADestinationDirection(directions.EAST);

            whenTurnsLeft();

            thenTurns();
        });
    });

    context(',when facing East,', () => {
        it('turn right from direction "E" to "N"', () => {
            givenAnEastDirection();
            givenATurn();
            givenADestinationDirection(directions.NORTH);

            whenTurnsRight();

            thenTurns();
        });

        it('turn left from direction "E" to "S"', () => {
            givenAnEastDirection();
            givenATurn();
            givenADestinationDirection(directions.SOUTH);

            whenTurnsLeft();

            thenTurns();
        });
    });

    context(',when facing West,', () => {
        it('turn right from direction "W" to "S"', () => {
            givenAWestDirection();
            givenATurn();
            givenADestinationDirection(directions.SOUTH);

            whenTurnsRight();

            thenTurns();
        });

        it('turn left from direction "W" to "N"', () => {
            givenAWestDirection();
            givenATurn();
            givenADestinationDirection(directions.NORTH);

            whenTurnsLeft();

            thenTurns();
        });
    });

    function givenANorthDirection() {
        direction = directions.NORTH;
    }

    function givenASouthDirection() {
        direction = directions.SOUTH;
    }

    function givenAWestDirection() {
        direction = directions.WEST;
    }

    function givenAnEastDirection() {
        direction = directions.EAST;
    }

    function givenATurn() {
        turn = new Turn();
    }

    function givenADestinationDirection(direction) {
        destinationDirection = direction;
    }

    function whenTurnsRight() {
        finalDirection = turn.right(direction);
    }

    function whenTurnsLeft() {
        finalDirection = turn.left(direction);
    }

    function thenTurns() {
        expect(finalDirection).be.eql(destinationDirection);
    }
});