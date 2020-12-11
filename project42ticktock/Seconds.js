class Second {
    constructor(x,y,w,h,start,stop,[mode],[detail]){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.start = start;
        this.stop = stop;
    }

    display(){
        angleMode(DEGREES);
        push();
        rotate(scAngle);
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
        pop();
    }
}