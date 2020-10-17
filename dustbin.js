class bin{
    constructor(x,y,width,height)
    {
        var options=
    {
        restitution:0
    
    }
    this.body=Bodies.rectangle(x,y,width,height)
    this.image=loadImage("dustbingreen.png")
    World.add(world,this.body)
    }
    display(){
    push()
    var pos=this.body.position
    rectMode(CENTER)
    fill(255,0,0)
    rect(pos.x,pos.y,this.width,this.height)
    pop()
    }
    }