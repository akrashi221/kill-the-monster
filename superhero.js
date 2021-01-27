class Superhero{
    constructor(x,y,width,height){
    var options={
    restitution:0,
    frcition:1,
    density:1.2 
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.wdth=width;
    this.height=height;
    this.image=loadImage("images/Superhero-0.1.png");
    World.add(world,this.body);
    }
    display(){
    var angle=this.body.angle;
    var pos= this.body.position;
    
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    this.image(this.image,0,0,this.width,this.height);
    pop(); 
    }
    }