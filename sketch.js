var fixedRect, movingRect;
var car , wall;
var car2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,200,10,50);
  car.velocityX = 5;
  car,shapeColor = "blue"

  wall = createSprite(500,200,40,20);
  wall.shapeColor = "pink";

  car2 = createSprite(500,500,50,100);
car2.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(car,wall)){
    car.bounceOff(wall);
    //car2.velocityY=0;
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  car.velocityX=0;
  }
  if(isTouching(car2,wall)){
    car2.velocityY = 0;
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}