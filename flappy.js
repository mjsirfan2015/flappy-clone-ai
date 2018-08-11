const fl_rad=20,
init_pos={x:WIDTH/4,y:HEIGHT/2},
g=0.1,
fl_lift=1;

function flappy_bird(){
    this.pos=init_pos;
    this.draw=drawbird;
    this.vel=0;
    //this.flap=flap;
};

function drawbird(){
    fill('#00ff00');
    translate(fl_rad,fl_rad);
    ellipseMode(RADIUS);
    ellipse(this.pos.x,this.pos.y,fl_rad);
}

function fall(bird){
    //translate(fl_rad,fl_rad);
    if(bird.pos.y<HEIGHT){
        bird.vel+=g;
        bird.pos.y+=bird.vel;
        if(bird.pos.y>HEIGHT-fl_rad){
            bird.vel=0;
            bird.pos.y=HEIGHT-fl_rad;
    }
}
}