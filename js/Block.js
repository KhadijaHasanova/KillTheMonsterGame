class Block {
    constructor(x,y,width,height) {
        var options = {
            restitution:0.1,
            friction:0,
            density:20
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,options);

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        strokeWeight(5);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}