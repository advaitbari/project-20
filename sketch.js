var zenia,tourus,cyclap,wall,line1,line2;


function setup() {
  createCanvas(1600,800);
zenia=createSprite(175,75,50,50);
wall1=createSprite(1500,75,30,50);
line1=createSprite(1000,200,2000,20);

line1.shapeColor=color(230,230,0);

tourus=createSprite(175,300,50,50);
wall2=createSprite(1500,300,30,50);  
line2=createSprite(1000,400,2000,20);
line2.shapeColor=color(255,0,0);


cyclap=createSprite(175,500,50,50);
wall3=createSprite(1500,500,30,50);  
line3=createSprite(1000,600,2000,20);

line3.shapeColor=color(0,255,0);
}

function draw() {
  background(255,255,255); 
  zenia.velocityX=7;
  tourus.velocityX=7;
  cyclap.velocityX=7;
  if(zenia.isTouching(wall1)){
    zenia.shapeColor=color(255,0,0);
    zenia.velocityX=0;
    wall1.shapeColor=color(230,230,0);  
  } 
  if(tourus.isTouching(wall2)){
    tourus.velocityX=0;
    tourus.shapeColor=color(0,255,0);
    wall2.shapeColor=color(255,0,0);
  } 
  if(cyclap.isTouching(wall3)){
    cyclap.shapeColor=color(230,230,0);  
    cyclap.velocityX=0;
    wall3.shapeColor=color(0,255,0);
  } 
  drawSprites();
}