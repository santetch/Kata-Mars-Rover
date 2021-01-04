# Mars Rover

##Your Task
You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

##Requirements
```You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.

The rover receives a character array of commands.

Implement commands that move the rover forward/backward (f,b).

Implement commands that turn the rover left/right (l,r).

Implement wrapping at edges. But be careful, planets are spheres. Connect the x edge to the other x edge, so (1,1) for x-1 to (5,1), but connect vertical edges towards themselves in inverted coordinates, so (1,1) for y-1 connects to (5,1).

Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.
```

##Rules
 - Hardcore TDD. No Excuses!
 - Change roles (driver, navigator) after each TDD cycle.
 - No red phases while refactoring.
 - Be careful about edge cases and exceptions. We can not afford to lose a mars rover, just because the developers overlooked a null pointer.

##Step 1
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.

    Test case:
        robot in position x=10, y=642 and direction North

        position = robot.getPosition()

        position.x == 10
        position.y == 642
        position.direction == N



##Step 2
Implement commands that move the rover forward/backward

    Test case 1:
        Given a robot in position x=10, y=642 and direction North

        robot.moveForward

        position.x == 10
        position.y == 643
        position.direction == N

    Test case 2:
        robot in position x=521, y=50 and direction East

        robot.moveBackwards

        position.x == 520
        position.y == 50
        position.direction == E

##Step 3
Implement commands that turn the rover left/right (l,r)

    Test case 1:
        robot in direction North

        robot.turnRight

        position.direction == E

    Test case 2:
        robot in direction West

        robot.turnLeft

        position.direction == S

##Step 4
Implement wrapping from one edge of the grid to another
Define a map of 10x10 and if one edge is passed starts on the opposite edge

    Test case 1:
        robot in position x=9, y=3 and direction East

        robot.moveForward

        position.x == 0
        position.y == 3
        position.direction == E

    Test case 2:
        robot in position x=4, y=0 and direction North

        robot.moveBackwards

        position.x == 4
        position.y == 9
        position.direction == N


##Step 5
The can has obstacles in certain positions.
If the robot is going to move into an obstacle, it stops and reports the error

    Test case:
        obstable in x=2, y=3
        robot in position x=2, y=2 and direction North

        robot.moveForward

        ERROR IS REPORTED


##Comandos
    -npm i: instalar las dependencias de node 
    -npm test : Corre los tests
    -npm coverage : Corre los tests y genera un reporte de covertura
    -npm mutation : Corre las pruebas de mutacion de codigo