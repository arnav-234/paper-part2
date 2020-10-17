class Paper{
constructor(x,y,r)
{
    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

    }
  
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    this.image=loadImage("paper.png")
    World.add(world,this.body)
}
    display()
    {
        var pappos=this.body.position

        push()
        translate(pappos.x,pappos.y)
        imageMode(CENTER)
       image(this.image,0,0,15,20)
        pop()
    }

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85})
     }
}