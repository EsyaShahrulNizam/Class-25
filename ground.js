class Ground 
{
  constructor(x, y, w, h, angle) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.angle=angle
    World.add(world, this.body);
  }
  display(){
    var pos=this.body.position
    Matter.Body.rotate(this.body,this.angle);
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    translate(pos.x,pos.y)
    rotate(angle)
    rect(0,0,this.w,this.h);

    pop();
    angle+=0.1
  }

 
   
}
