import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import {expect} from "chai";
import Move from "../../core/actions/Move";
import MarsMap from "../../core/domain/MarsMap";

describe('Move Should', () => {
    let move;

    let map;
    let direction;
    let position;
    let finalPosition;
    let destinationPosition;

    beforeEach(() => {

    });

    context(', when facing North,', () => {
        it('move forward from position (10,642) to (10,643)', () => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 643);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (10,642) to (10,641)', () => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 641);

            givenAMoveAction();

            whenMovesBackward();

            thenMoves();
        });
    });

    context(', when facing South,', () => {
        it('move forward from position (10,642) to (10,641)', () => {
            givenAMarsMap(1000, 1000);
            givenASouthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 641);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (10,642) to (10,643)', () => {
            givenAMarsMap(1000, 1000);
            givenASouthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 643);

            givenAMoveAction();

            whenMovesBackward();

            thenMoves();
        });
    });

    context(', when facing East,', () => {
        it('move forward from position (521,50) to (522,50)', () => {
            givenAMarsMap(1000, 1000);
            givenAnEastDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(522, 50);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (521,50) to (520,50)', () => {
            givenAMarsMap(1000, 1000);
            givenAnEastDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(520, 50);

            givenAMoveAction();

            whenMovesBackward();

            thenMoves();
        });
    });

    context(', when facing West,', () => {
        it('move forward from position (521,50) to (520,50)', () => {
            givenAMarsMap(1000, 1000);
            givenAWestDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(520, 50);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (521,50) to (522,50)', () => {
            givenAMarsMap(1000, 1000);
            givenAWestDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(522, 50);

            givenAMoveAction();

            whenMovesBackward();

            thenMoves();
        });
    });

    context(' given a 10x10 map and facing North,', () => {
        it('move forward from position (3,9) to (3,0)', () => {
            givenAMarsMap(10, 10);
            givenANorthDirection();
            givenAPosition(3, 9);
            givenADestinationPosition(3, 0);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backward from position (3,0) to (3,9)', () => {
            givenAMarsMap(10, 10);
            givenANorthDirection();
            givenAPosition(3, 0);
            givenADestinationPosition(3, 9);

            givenAMoveAction();

            whenMovesBackward();

            thenMoves();
        });
    });

    context(' given a 10x10 map and facing East,', () => {
        it('move forward from position (9,5) to (0,5)', () => {
            givenAMarsMap(10, 10);
            givenAnEastDirection();
            givenAPosition(9, 5);
            givenADestinationPosition(0, 5);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backward from position (0,5) to (9,5)', () => {
            givenAMarsMap(10, 10);
            givenAnEastDirection();
            givenAPosition(0, 5);
            givenADestinationPosition(9, 5);

            givenAMoveAction();

            whenMovesBackward();

            thenMoves();
        });
    });

    function givenAMoveAction() {
        move = new Move();
    }

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

    function givenAPosition(x, y) {
        position = new Position(x, y, direction, map);
    }

    function givenADestinationPosition(x, y) {
        destinationPosition = new Position(x, y, direction, map);
    }

    function givenAMarsMap(x, y) {
        map = new MarsMap(x, y);
    }

    function whenMovesForward() {
        finalPosition = move.forward(position);
    }

    function whenMovesBackward() {
        finalPosition = move.backward(position);
    }

    function thenMoves() {
        expect(finalPosition).be.eql(destinationPosition);
    }
});