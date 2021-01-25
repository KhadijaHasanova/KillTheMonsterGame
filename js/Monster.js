class Monster {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.image1 = loadImage("images/Monster-01.png");
        this.image2 = loadImage("images/Monster-02.png");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        if(pos.y < 250) {
            image(this.image1,pos.x,pos.y,this.width,this.height);
        }
        else {
            image(this.image2,pos.x,pos.y,this.width,this.height);
        }
    }
}