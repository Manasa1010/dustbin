const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var paper;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 paper = new Paper(200,100);
 launcher = new Launcher(paper.body,{x:100,y:180});
 rect2 = new Floor(500,350,20,100);

floor=new Floor(800,390,1600,20);
rect= new Floor(575,360,130,30);
rect1=new Floor(650,350,20,100);
 
 
}

function draw() {
  background("blue");  
  Engine.update(engine);
  paper.display();
  launcher.display();
 rect1.display();
 rect2.display();
 rect.display();
 floor.display();
 


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

