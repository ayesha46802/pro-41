class Drop{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'friction':0.001,
        }
        this.body = Bodies.circle(x, y,5,options);
        this.radius=radius;
        World.add(world, this.body);
      }
      updateY(){
          if(this.rain.position.y>height){
              Matter.Body.setPosition(this.rain,{x:random (0,400),y:random(0,400)})
          }
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}