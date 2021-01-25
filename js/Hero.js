class Hero {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            density:1,
            frictionAir:1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);

        this.image = loadImage("images/Superhero-01.png");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        
        push();
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}