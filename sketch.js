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
 dustbin = new Dustbin(500,350,120,150);
 
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  paper.display();
  launcher.display();
 dustbin.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}
function keyPressed(){
if(keyCode===32){
  launcher.attach(paper.body)
}
}