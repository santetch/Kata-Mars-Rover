import {expect} from "chai";
import directions from "../core/Directions";
import Position from "../core/Position";
import MarsRover from "../core/MarsRover";

const {mock} = global;


describe('Mars Rover should', () => {
    let direction;
    let position;
    let finalPosition;

    let rover;
    let roverPosition;

    beforeEach(() => {

    });

    context(' ', () => {
         it('retrieve its position', () => {
             direction = directions.NORTH;
             position = new Position(1, 1, direction);

             rover = new MarsRover(position);

             roverPosition = rover.getPosition();
             expect(position).be.eql(roverPosition);
         });
    });

    context(',when facing North ,', () => {
        it('move forward from position (10,642) to (10,643)', () => {
            direction = directions.NORTH;
            position = new Position(10, 642, direction);
            finalPosition = new Position(10, 643, direction);

            rover = new MarsRover(position);

            rover.moveForward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });

        it('move backwards from position (10,642) to (10,641)', () => {
            direction = directions.NORTH;
            position = new Position(10, 642, direction);
            finalPosition = new Position(10, 641, direction);

            rover = new MarsRover(position);

            rover.moveBackward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });
    });

    context(',when facing South ,', () => {
        it('move forward from position (10,642) to (10,641)', () => {
            direction = directions.SOUTH;
            position = new Position(10, 642, direction);
            finalPosition = new Position(10, 641, direction);

            rover = new MarsRover(position);

            rover.moveForward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });

        it('move backwards from position (10,642) to (10,643)', () => {
            direction = directions.SOUTH;
            position = new Position(10, 642, direction);
            finalPosition = new Position(10, 643, direction);

            rover = new MarsRover(position);

            rover.moveBackward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });
    });

    context(',when facing East ,', () => {
        it('move forward from position (521,50) to (522,50)', () => {
            direction = directions.EAST;
            position = new Position(521, 50, direction);
            finalPosition = new Position(522, 50, direction);

            rover = new MarsRover(position);

            rover.moveForward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });

        it('move backwards from position (521,50) to (520,50)', () => {
            direction = directions.EAST;
            position = new Position(521, 50, direction);
            finalPosition = new Position(520, 50, direction);

            rover = new MarsRover(position);

            rover.moveBackward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });
    });

    context(',when facing West ,', () => {
        it('move forward from position (521,50) to (520,50)', () => {
            direction = directions.WEST;
            position = new Position(521, 50, direction);
            finalPosition = new Position(520, 50, direction);

            rover = new MarsRover(position);

            rover.moveForward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });

        it('move backwards from position (521,50) to (522,50)', () => {
            direction = directions.WEST;
            position = new Position(521, 50, direction);
            finalPosition = new Position(522, 50, direction);

            rover = new MarsRover(position);

            rover.moveBackward();

            roverPosition = rover.getPosition();
            expect(finalPosition).be.eql(roverPosition);
        });
    });
});