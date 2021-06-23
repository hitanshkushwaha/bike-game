class Obstacle{
    constructor(x,y,w,h){
        var options={
            restitution:0.4
        }
       
      
       this.body = Bodies.rectangle(x,y,w,h,options);
      this.h=h;
      this.w=w
       World.add(world,this.body);

     




    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        rect(100,400,this.h,this.w);
        pop();
      
        
 
     
    

    }

   

}

