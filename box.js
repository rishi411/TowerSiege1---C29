class Box{
    constructor(x,y,width,height){
        var options = {
            'resitiution':0.5,
            'friction':0.7,
            'density':1.4,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(212, 255, 176);
        rect(0, 0, this.width, this.height);
        pop();
    }
}