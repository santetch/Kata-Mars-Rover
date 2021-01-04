import {expect} from "chai";
import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import MarsRover from "../../core/domain/MarsRover";
import MarsMap from "../../core/domain/MarsMap";

const {mock} = global;


describe('Mars Rover should', () => {
    let direction;
    let position;
    let map;

    let move;
    let turn;

    let rover;
    let roverPosition;

    beforeEach(() => {
        move = mock('forward', 'backward');
        turn = mock('right', 'left');
    });

     it('retrieve its position', () => {
         givenAMarsMap(1000, 1000);
         givenANorthDirection();
         givenAPosition(1, 1);

         givenAMarsRover();

         whenRetrievesItsPosition();

         thenRetrievesItsPosition();
     });

    context('move ', () => {
        it('forward',() => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(1, 1);

            givenAMarsRover();

            whenMovesForward();

            thenMovesForward();
        });

        it('backward',() => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(1, 1);

            givenAMarsRover();

            whenMovesBackward();

            thenMovesBackward();
        });
    });

    context('turn ', () => {
        it('to the right',() => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(1, 1);

            givenAMarsRover();

            whenTurnsRight();

            thenTurnsRight();
        });

        it('to the left',() => {
            givenAMarsMap(1000, 1000);
            givenANorthDirection();
            givenAPosition(1, 1);

            givenAMarsRover();

            whenTurnsLeft();

            thenTurnsLeft();
        });
    });


    function givenAMarsRover() {
        rover = new MarsRover(position, move, turn);
    }

    function givenANorthDirection() {
        direction = directions.NORTH;
    }

    function givenAPosition(x, y) {
        position = new Position(x, y, direction, map);
    }

    function givenAMarsMap(x, y) {
        map = new MarsMap(x, y);
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

    function whenTurnsRight() {
        rover.turnRight();
    }

    function whenTurnsLeft() {
        rover.turnLeft();
    }

    function thenRetrievesItsPosition() {
        expect(position).be.eql(roverPosition);
    }

    function thenMovesForward() {
        expect(move.forward).callCount(1);
    }

    function thenMovesBackward() {
        expect(move.backward).callCount(1);
    }

    function thenTurnsRight() {
        expect(turn.right).callCount(1);
    }

    function thenTurnsLeft() {
        expect(turn.left).callCount(1);
    }
});