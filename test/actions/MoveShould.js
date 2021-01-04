import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import {expect} from "chai";
import Move from "../../core/actions/Move";

describe('Move Should', () => {
    let move;

    let direction;
    let position;
    let finalPosition;
    let destinationPosition;

    beforeEach(() => {

    });

    context(', when facing North,', () => {
        it('move forward from position (10,642) to (10,643)', () => {
            givenANorthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 643);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (10,642) to (10,641)', () => {
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
            givenASouthDirection();
            givenAPosition(10, 642);
            givenADestinationPosition(10, 641);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (10,642) to (10,643)', () => {
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
            givenAnEastDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(522, 50);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (521,50) to (520,50)', () => {
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
            givenAWestDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(520, 50);

            givenAMoveAction();

            whenMovesForward();

            thenMoves();
        });

        it('move backwards from position (521,50) to (522,50)', () => {
            givenAWestDirection();
            givenAPosition(521, 50);
            givenADestinationPosition(522, 50);

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
        position = new Position(x, y, direction);
    }

    function givenADestinationPosition(x, y) {
        destinationPosition = new Position(x, y, direction);
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