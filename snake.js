var drawSnake = function(snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };
	//creates and object specifying color and pixels of drawableSnake
	var drawableObjects = [drawableSnake];
	//CHUNK's draw method expects an array (forEach method). we put the drawableSnake in an array here
	CHUNK.draw(drawableObjects);
//call draw on drawableObjects. 
}

var moveSegment = function(segment) {
  if (segment.direction === "down") {
    return { top: segment.top + 1, left: segment.left }
  } else if (segment.direction === "up") {
    return { top: segment.top - 1, left: segment.left }
  } else if (segment.direction === "right") {
    return { top: segment.top, left: segment.left + 1 }
  } else if (segment.direction === "left") {
    return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
}
var moveSnake = function(snake) {
  var oldSegment = snake[0];//get the value at this location in the array
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
}
var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You Hit a Wall!");
  }
  drawSnake(snake);
}
var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var snake = [{ top: 0, left: 0, direction: "down" }];
CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);




