var draw = function(snakeToDraw, apple) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };
	//creates and object specifying color and pixels of drawableSnake
  var drawableApple = { color: "red", pixels: [apple] }; //because CHUNK's draw fxn expects array
	var drawableObjects = [drawableSnake, drawableApple]; //because CHUNK's draw fxn expects array
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
var segmentFurtherForwardThan = function(index, snake) {
  if (snake[index - 1] === undefined) {
    return snake[index];
  } else {
    return snake[index - 1];
  }
}
var moveSnake = function(snake) {
  return snake.map(function(oldSegment, segmentIndex) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
    return newSegment;
  });
}
var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You Hit a Wall!");
  }
  draw(snake, apple);
}
var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];
var apple = { top: 8, left: 10 };
CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);




