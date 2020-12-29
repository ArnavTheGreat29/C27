class SlingShot{

    constructor(objectA , objectB){
        var options = {
         bodyA: objectA,
         bodyB: objectB,
         length: 10,
         thickness: 5,
         stiffness: 0.5

        }
       this.slingshot =  Matter.Constraint.create(options)
       World.add (world,this.slingshot)
    }
    display(){

        var posA = this.slingshot.bodyA.position
        var posB = this.slingshot.bodyB.position

        line (posA.x,posA.y,posB.x,posB.y)
     
    }
}