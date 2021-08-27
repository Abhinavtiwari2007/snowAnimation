const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1 , snow2 , snow3
var snow4 , snow5
snow = []
function preload(){
    snow1 = loadImage ("snow1.jpg");
    snow2 = loadImage ("snow2.jpg");
    snow3 = loadImage ("snow3.jpg");
  }

function setup() {
 
  var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
  
  snowfall = createSprite(400, 200, 50, 50);
  snowfall.addImage(snow3)


}

function draw() {
 
 background(snow3img);
 
  background(255,255,255);  
  
  snow1img.display()
  snow2img.display()
  snow3img.display()

  for (var i = 0;i<snow.length;i++){
    snow[i].display()
    snow[i].resetsnow()
  }
  drawSprites()
}