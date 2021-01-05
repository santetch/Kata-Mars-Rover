import {expect} from "chai";
import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import MarsMap from "../../core/domain/MarsMap";
import Move from "../../core/actions/Move";
import Coordinates from "../../core/domain/Coordinates";

const {mock} = global;

describe('Mars Map should', () => {
    let direction;
    let position;
    let map;
    let obstacles = [];
    let finalPosition;
    let coordinates;

    let move;

    let presenter;

    beforeEach(() => {
        presenter = mock('showError', 'showSuccess');
    });

    context(' given an obstacle in front', () => {
        it('and facing North, report the error', () => {
            givenAnObstacleIn(2,3);
            givenAMarsMap(10, 10);
            givenANorthDirection();
            givenAPosition(2, 2);

            givenAMoveAction();

            whenMovesForward();

            thenShowsError();
        });

        it('and facing East, report the error', () => {
            givenAnObstacleIn(4,3);
            givenAMarsMap(10, 10);
            givenAnEastDirection();
            givenAPosition(3, 3);

            givenAMoveAction();

            whenMovesForward();

            thenShowsError();
        });
    });


    function givenAMoveAction() {
        move = new Move();
    }

    function givenANorthDirection() {
        direction = directions.NORTH;
    }

    function givenAnEastDirection() {
        direction = directions.EAST;
    }

    function givenAPosition(x, y) {
        coordinates = new Coordinates(x, y);
        position = new Position(direction, map, coordinates);
    }


    function givenAnObstacleIn(x, y) {
        obstacles.push(new Coordinates(x, y));
    }

    function givenAMarsMap(x, y) {
        map = new MarsMap(x, y, obstacles, presenter);
    }

    function whenMovesForward() {
        finalPosition = move.forward(position);
    }

    function thenShowsError() {
        expect(presenter.showError).callCount(1);
    }

});