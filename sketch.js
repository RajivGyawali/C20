var movingRect,fixedRect;

function setup() {
  createCanvas(400,400);
  movingRect=createSprite(200, 200, 80, 50);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(200, 100, 50, 80);
  fixedRect.shapeColor="blue";
}

function draw() {
  background(0); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(((movingRect.x-fixedRect.x < (movingRect.width+fixedRect.width)/2)&&
  (fixedRect.x-movingRect.x < (movingRect.width+fixedRect.width)/2))&&
  ((movingRect.y-fixedRect.y < (movingRect.height+fixedRect.height)/2)&&
  (fixedRect.y-movingRect.y < (movingRect.height+fixedRect.height)/2))){
    movingRect.shapeColor="green"
  }else{
    movingRect.shapeColor="blue"
  }
  drawSprites();
}
