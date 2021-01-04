import {expect} from "chai";
import directions from "../../core/domain/Directions";
import Position from "../../core/domain/Position";
import MarsMap from "../../core/domain/MarsMap";
import Move from "../../core/actions/Move";
import Obstacle from "../../core/domain/Obstacle";

const {mock} = global;


describe('Mars Map should', () => {
    let direction;
    let position;
    let map;
    let obstacles = [];
    let finalPosition;

    let move;

    let presenter;

    beforeEach(() => {
        presenter = mock('showError');
    });

    function thenShowsError() {
        expect(presenter.showError).callCount(1);
    }

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
        position = new Position(x, y, direction, map);
    }


    function givenAnObstacleIn(x, y) {
        obstacles.push(new Obstacle(x, y));
    }

    function givenAMarsMap(x, y) {
        map = new MarsMap(x, y, obstacles, presenter);
    }

    function whenMovesForward() {
        finalPosition = move.forward(position);
    }

});