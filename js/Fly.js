class Fly {
    constructor(bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:1
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);

        World.add(world,this.rope);
    }

    display() {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;

            push();
            noStroke();
            line(pointA.x+200,pointA.y+100,pointB.x,pointB.y);
            pop();
    }
}