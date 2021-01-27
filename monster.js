class Monster{
    constructor(x,y,width,height){
    var options={
    isStatic:true,
    restitution:0.5,
    frcition:1.0,
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.wdth=width;
    this.height=height;
    this.image=loadImage("images/Monster-0.1.png");
    World.add(world,this.body);
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();    
    }
    }