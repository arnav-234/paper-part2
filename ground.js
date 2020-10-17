class Ground{
    constructor(x,y,width,height)
    {
        var options=
    {
        restitution:0
    
    }
    this.body=Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    }
    display(){
    push()
    var gpos=this.body.position
    rectMode(CENTER)
    fill(255,0,0)
    rect(gpos.x,gpos.y,this.width,this.height)
    pop()
    }
    }