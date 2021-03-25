const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops = [];
var maxDrops = 100;
var umbrellaObject;
var rand, thunderCreatedFrame,thunder,img1,img2;

function preload(){
   img1 = loadImage("images/thunderbolt/1.png");
   img2 = loadImage("images/thunderbolt/2.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   var canvas = createCanvas(400,700);
  
   if (frameCount % 500 === 0) {
   for(var i=0; i<maxDrops; i++) {
      drops.push(new drop(random(0,300), random(0,700)));
      
   }
   }
   umbrellaObject = new umbrella(200,500);
}

function draw(){
   Engine.update(engine);
   background(0);

   rand = Math.round(random(1,4));
   if(frameCount%80 === 0) {
      thunderCreatedFrame = frameCount;
      thunder = createSprite(random(10,370), random(10,30), 10, 10);
      switch(rand){
         case 1: thunder.addImage(img1);
         break;
         case 2: thunder.addImage(img2);
         break;
         default: break;
      }
      thunder.scale = 0.3;
      thunder.lifetime = 12;
   }

   umbrellaObject.display();

   for( var i = 0; i<maxDrops; i++) {
      drops[i].display();
      drops[i].update();
   }
   drawSprites();
}