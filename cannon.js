class Cannon {
    constructor(x, y, width, height,angle) {
      //var options = {
      //isStatic: true
      //};
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      this.angle= angle;
     // this.body = Bodies.rectangle(x, y, this.width, this.height);
      //World.add(world, this.body);
    }
    display() {
      //var pos = this.body.position;
      fill("#676e6a");
      push();
      translate(this.x, this.y);
      rotate(this.angle)
      rectMode(CENTER);
      rect(-10,-20, this.width, this.height);
      pop();
      arc(this.x-30,this.y+90,140,200,PI,TWO_PI)
      noFill()
    }
  }
  