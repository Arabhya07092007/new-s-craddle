class Chain{
    constructor(body1,body2,setoff){

        var options  = {
        
            bodyA:body1,
            bodyB:body2,
            stiffness: 2
            
        }

    this.setoff = setoff;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);

    }

    display(){

        var pointA = this.sling.bodyA.position;
        var bodyB = this.sling.bodyB.position;        
        stroke(54,90,205);
        strokeWeight(3);
        line(pointA.x, pointA.y, this.setoff, bodyB.y);


    }
    







}