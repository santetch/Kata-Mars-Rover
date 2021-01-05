import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import {expect} from "chai";
import Move from "../../core/actions/Move";
import MarsMap from "../../core/domain/MarsMap";
import Coordinates from "../../core/domain/Coordinates";

describe('Move Should', () => {
    let move;

    let map;
    let obstacles = [];
    let direction;
    let coordinates;
    let position;

    let message;
    let finalPosition;
    let destinationPosition;
    let presenter;

    beforeEach(() => {
        presenter = mock('showError', 'showSuccess');
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

        it('move forward and confirm with a message', () => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 643);
            message = `Successfully moved to X: ${10} | Y: ${643} | N`;

            givenAMoveAction();

            whenMovesForward();

            thenShowSuccess(message);
        });

        it('move backwards and confirm with a message', () => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 641);
            message = `Successfully moved to X: ${10} | Y: ${641} | N`;

            givenAMoveAction();

            whenMovesBackward();

            thenShowSuccess(message);
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

        it('move forward and confirm with a message', () => {
            givenAMarsMap(1000, 1000);
            givenAnEastDirection();
            givenAPosition(521, 50);
            message = `Successfully moved to X: ${522} | Y: ${50} | E`;

            givenAMoveAction();

            whenMovesForward();

            thenShowSuccess(message);
        });

        it('move backwards and confirm with a message', () => {
            givenAMarsMap(1000, 1000);
            givenAnEastDirection();
            givenAPosition(521, 50);
            message = `Successfully moved to X: ${520} | Y: ${50} | E`;

            givenAMoveAction();

            whenMovesBackward();

            thenShowSuccess(message);
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
        coordinates = new Coordinates(x, y);
        position = new Position(direction, map, coordinates);
    }

    function givenADestinationPosition(x, y) {
        coordinates = new Coordinates(x, y);
        destinationPosition = new Position(direction, map, coordinates);
    }

    function givenAMarsMap(x, y) {
        map = new MarsMap(x, y, obstacles, presenter);
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

    function thenShowSuccess(message) {
        expect(presenter.showSuccess).calledWith(message);
    }
});