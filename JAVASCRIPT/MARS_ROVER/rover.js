//Grid and obstacles
var grid =[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];

function obstacle (x,y) {
    grid[x][y] = 1;
}

obstacle(2,1);

//Rovers
function Rover (name, positionA, positionB, direction) {
    this.name = name;
    this.position = [positionA, positionB];
    this.direction = direction;
}

function initRover (Rover) {
    grid[Rover.position[0]][Rover.position[1]] = Rover;
    console.log('Initial ' + Rover.name + ' position: ['+ Rover.position[0] + ', ' + Rover.position[1] + ']')
}

var Rover1 = new Rover ('Rover 1',0,0,'N');
initRover(Rover1);

var Rover2 = new Rover ('Rover 2',9,9,'N');
initRover(Rover2);

//Moves
function moveRover (anyRover, instructions) {

    grid[anyRover.position[0]][anyRover.position[1]] = 0;

    move_loop:
    for(var i=0; i<instructions.length; i++) {
        
        var newPosition = (anyRover.position).slice();

        switch (anyRover.direction) {

            case 'N':
                if (instructions[i] === 'f') {
                    newPosition[0]++ ;
                } else if (instructions[i] === 'b') {
                    newPosition[0]-- ;
                } else if (instructions[i] === 'r') {
                    anyRover.direction = 'E';
                } else if (instructions[i] === 'l') {
                    anyRover.direction = 'W';
                } else {
                console.log('The ' + i + 'entry is wrong')
                };
                break;

            case 'S':
                if (instructions[i] === 'f') {
                    newPosition[0]-- ;
                } else if (instructions[i] === 'b') {
                    newPosition[0]++ ;
                } else if (instructions[i] === 'r') {
                    anyRover.direction = 'W';
                } else if (instructions[i] === 'l') {
                    anyRover.direction = 'E';
                } else {
                console.log('The ' + i + 'entry is wrong')
                };
                break;

            case 'E':
                if (instructions[i] === 'f') {
                    newPosition[1]++ ;
                } else if (instructions[i] === 'b') {
                    newPosition[1]-- ;
                } else if (instructions[i] === 'r') {
                    anyRover.direction = 'S';
                } else if (instructions[i] === 'l') {
                    anyRover.direction = 'N';
                } else {
                console.log('The ' + i + 'entry is wrong')
                };
                break;

            case 'W':
                if (instructions[i] === 'f') {
                    newPosition[1]-- ;
                } else if (instructions[i] === 'b') {
                    newPosition[1]++ ;
                } else if (instructions[i] === 'r') {
                    anyRover.direction = 'N';
                } else if (instructions[i] === 'l') {
                    anyRover.direction = 'S';
                } else {
                console.log('The ' + i + 'entry is wrong')
                };
                break;
        };

        if (grid[newPosition[0]][newPosition[1]] === 0 && newPosition[0] >= 0 && newPosition[1] >= 0 && newPosition[0] <= 9 && newPosition[1] <= 9 ) {
            anyRover.position = newPosition;
            iniPosition = newPosition;
        } else if (newPosition[0] < 0 && newPosition[1] < 0 && newPosition[0] > 9 && newPosition[1] > 9) {
            console.log(anyRover.name +' can´t do this move. You´re trying to go out of the grid!')
            break move_loop;
        } else if (grid[newPosition[0]][newPosition[1]] === 1) {
            console.log(anyRover.name + ' can´t do this move. There is an obstacle. Try other way!')
            break move_loop;
        } else {
            console.log(anyRover.name + ' can´t do this move. There is another rover on your way!')
            break move_loop;
        };
    }
    
    grid[anyRover.position[0]][anyRover.position[1]] = anyRover;
    console.log('New ' + anyRover.name + ' position: ['+ anyRover.position[0] + ', ' + anyRover.position[1] + ']')
}

moveRover (Rover1, 'ffr');



