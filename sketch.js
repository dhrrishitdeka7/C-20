var movingRect , fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,400, 60, 40);
  movingRect.shapeColor = "yellow";
  fixedRect = createSprite(200, 200, 60, 40);
 fixedRect.shapeColor = "yellow";
 movingRect.debug = true;
 fixedRect.debug = true;
}

function draw() {
  background("black");
  
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY; 
if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

}
 
else {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}



  drawSprites();
}