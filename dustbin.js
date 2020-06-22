class Rect{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("dustbin.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       // rectMode(CENTER);
      // rect(this.image,0,0,this.width,this.height);
        pop();
        image(this.image,490,300,100,100);
        image(this.image,510,300,140,100);
        image(this.image,650,300,20,100);
 
      }
}