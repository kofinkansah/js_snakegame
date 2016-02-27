var snake = [{top: 0, left: 0}]; 
//creates an array with a single object or hash map specifying top and left values
var drawableSnake = { color: "blue", pixels: snake };
//creates and object specifying color and pixels of drawableSnake
var drawableObjects = [drawableSnake];
//CHUNK's draw method expects an array. we put the drawableSnake in an array here
CHUNK.draw(drawableObjects);
//call draw on drawableObjects. 

