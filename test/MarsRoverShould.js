import {expect} from "chai";
import directions from "../core/Directions";
import Position from "../core/Position";
import MarsRover from "../core/MarsRover";
import Move from "../core/actions/Move";
import Rotate from "../core/actions/Rotate";

const {mock} = global;


describe('Mars Rover should', () => {
    let direction;
    let position;
    let finalPosition;

    let move;
    let rotate;

    let rover;
    let roverPosition;

    beforeEach(() => {

    });

    context(' ', () => {
         it('retrieve its position', () => {
             givenANorthDirection();
             givenAPosition(1, 1);

             givenAMarsRover();

             whenRetrievesItsPosition();

             thenRetrievesItsPosition();
         });
    });

    context(',when facing North ,', () => {
        it('move forward from position (10,642) to (10,643)', () => {
            givenANorthDirection();
            givenAPosition(10, 642);
            givenAFinalPosition(10, 643);

            givenAMarsRover();

            whenMovesForward();

            whenRetrievesItsPosition();

            thenMoves();
        });

        it('move backwards from position (10,642) to (10,641)', () => {
            givenANorthDirection();
            givenAPosition(10, 642);
            givenAFinalPosition(10, 641);

            givenAMarsRover();

            whenMovesBackward();

            whenRetrievesItsPosition();
            thenMoves();
        });
    });

    context(',when facing South ,', () => {
        it('move forward from position (10,642) to (10,641)', () => {
            givenASouthDirection();
            givenAPosition(10, 642);
            givenAFinalPosition(10, 641);

            givenAMarsRover();

            whenMovesForward();

            whenRetrievesItsPosition();
            thenMoves();
        });

        it('move backwards from position (10,642) to (10,643)', () => {
            givenASouthDirection();
            givenAPosition(10, 642);
            givenAFinalPosition(10, 643);

            givenAMarsRover();

            whenMovesBackward();

            whenRetrievesItsPosition();
            thenMoves();
        });
    });

    context(',when facing East ,', () => {
        it('move forward from position (521,50) to (522,50)', () => {
            givenAnEastDirection();
            givenAPosition(521, 50);
            givenAFinalPosition(522, 50);

            givenAMarsRover();

            whenMovesForward();

            whenRetrievesItsPosition();
            thenMoves();
        });

        it('move backwards from position (521,50) to (520,50)', () => {
            givenAnEastDirection();
            givenAPosition(521, 50);
            givenAFinalPosition(520, 50);

            givenAMarsRover();

            whenMovesBackward();

            whenRetrievesItsPosition();
            thenMoves();
        });
    });

    context(',when facing West ,', () => {
        it('move forward from position (521,50) to (520,50)', () => {
            givenAWestDirection();
            givenAPosition(521, 50);
            givenAFinalPosition(520, 50);

            givenAMarsRover();

            whenMovesForward();

            whenRetrievesItsPosition();
            thenMoves();
        });

        it('move backwards from position (521,50) to (522,50)', () => {
            givenAWestDirection();
            givenAPosition(521, 50);
            givenAFinalPosition(522, 50);

            givenAMarsRover();

            whenMovesBackward();

            whenRetrievesItsPosition();
            thenMoves();
        });
    });


    function givenAMarsRover() {
        move = new Move();
        rotate = new Rotate();

        rover = new MarsRover(position, move, rotate);
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

    function givenAFinalPosition(x, y) {
        finalPosition = new Position(x, y, direction);
    }

    function whenRetrievesItsPosition() {
        roverPosition = rover.getPosition();
    }

    function whenMovesForward() {
        rover.moveForward();
    }

    function whenMovesBackward() {
        rover.moveBackward();
    }

    function thenRetrievesItsPosition() {
        expect(position).be.eql(roverPosition);
    }

    function thenMoves() {
        expect(finalPosition).be.eql(roverPosition);
    }
});