var box;

function setup() {
  createCanvas(800,400);

  box = createSprite(400,200,50,70);
  box.shapeColor = "lime";
}

function draw() 
{
  background("skyblue");

  if(keyIsDown(RIGHT_ARROW)) {
    box.x = box.x + 2;
  }
  if(keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 2;
  }
  if(keyIsDown(UP_ARROW)) {
    box.y -= 2;
  }
  if(keyIsDown(DOWN_ARROW)) {
    box.y += 2;
  }

  drawSprites();
}




