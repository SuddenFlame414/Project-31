class drop {
    constructor(x,y){
        var options = {
        'restitution' : 0.1,
        'friction':0.1
        }
        this.body = Bodies.circle(x, y, 3, options);
        this.radius = 3;
        World.add(world,this.body);
    }
    update() {
        if(this.body.position.y > 700){
            Matter.Body.setPosition(this.body, {x:random(0,300),y:random(0,700)});
        }
    }
    display() {
        ellipseMode(CENTER);
        fill("lightblue");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}