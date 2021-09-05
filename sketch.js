var mainTextFont;
var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg, grass, orangeLeafImg, apple, orangeLeaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}
function setup(){
 
 createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createLeaves(){
  orangeLeaf = createSprite(random(50,350), 40 ,10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 3.5;
  orangeLeaf.scale = 0.1;
}

function createApples(){
  apple = createSprite(random(50,350), 40, 10,10);
  apple.addImage(appleImg);
  apple.velocityY = 3.5;
  apple.scale = 0.1;
}
function draw() {
  rabbit.x = mouseX;
var select_sprites = Math.round(random(1,2));

if(frameCount % 80 ==0){
  if (select_sprites == 1){
    createApples();
  }
  else{
    createLeaves();
  }
}


  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  
}