class Ground {
    constructor(x,y,width,height){
        var g = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,g);
        this.width = width;
        this.height = height;
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill(255);       
        rect(pos.x,pos.y,width,height);
    }
}