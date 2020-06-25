const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var paper;
function preload(){
  dust=loadImage("dustbin.png");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 paper = new Paper(200,100);
 launcher = new Launcher(paper.body,{x:100,y:180});

 rect1=new Rect(520,350,20,140);
 rect2=new Rect(650,350,20,140);
floor=new Floor(800,390,1600,20);

 
}

function draw() {
  background("blue");  
  Engine.update(engine);
  paper.display();
  launcher.display();
 //rect1.display();
 //rect2.display();
 rect1.display();

 rect2.display();
 floor.display();
 
image(dust,350,220,400,250);

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

