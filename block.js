class Block{
constructor(x,y,width,height){
var options={
restitution:0.4,
frcition:1.0, 
//isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.wdth=width;
this.height=height;
World.add(world,this.body);
}
display(){
var angle=this.body.position;
var pos= this.body.position;

push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop(); 
}
}