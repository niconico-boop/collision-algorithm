var fixedrectangle
var movingrectangle

function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(200, 100, 50, 50);
  movingrectangle.shapeColor="blue"
  fixedrectangle=createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor="blue"
}

function draw() {
  background(0); 
  movingrectangle.x=World.mouseX
  movingrectangle.y=World.mouseY

  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
    fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2 &&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
      movingrectangle.shapeColor="white";
      fixedrectangle.shapeColor="white";
    }
    else{
      movingrectangle.shapeColor="blue"
      fixedrectangle.shapeColor="blue"
    }
  drawSprites();
}