var ground1=new ground(240,780,480,20);



function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  
  drawSprites();
  ground1.display();
}