import {expect} from "chai";
import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import MarsRover from "../../core/domain/MarsRover";

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
        move = mock('forward', 'backward');
        rotate = mock();
    });

    context('always ', () => {
         it('retrieve its position', () => {
             givenANorthDirection();
             givenAPosition(1, 1);

             givenAMarsRover();

             whenRetrievesItsPosition();

             thenRetrievesItsPosition();
         });

        it('move forward',() => {
            givenANorthDirection();
            givenAPosition(1, 1);

            givenAMarsRover();

            whenMovesForward();

            thenMovesForward();
        });

        it('move backward',() => {
            givenANorthDirection();
            givenAPosition(1, 1);

            givenAMarsRover();

            whenMovesBackward();

            thenMovesBackward();
        });
    });


    function givenAMarsRover() {
        rover = new MarsRover(position, move, rotate);
    }

    function givenANorthDirection() {
        direction = directions.NORTH;
    }

    function givenAPosition(x, y) {
        position = new Position(x, y, direction);
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

    function thenMovesForward() {
        expect(move.forward).callCount(1);
    }

    function thenMovesBackward() {
        expect(move.backward).callCount(1);
    }
});