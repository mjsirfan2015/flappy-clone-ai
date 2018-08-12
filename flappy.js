const fl_rad=20,
init_pos={x:WIDTH/4,y:HEIGHT/2},
gravity=0.1,
fl_lift=5,
min_spd=-3;

function flappy_bird(){
    this.pos=init_pos;
    this.draw=drawbird;
    this.vel=0;
    this.gameover=false;
    this.score=0;
    this.moveset=[];
    this.inputset=[];
};

function drawbird(){
    if(this.gameover==false){
        fill('#00ff00');
        translate(fl_rad,fl_rad);
        ellipseMode(RADIUS);
        ellipse(this.pos.x,this.pos.y,fl_rad);
        this.score++;
    }
}

function fall(bird,g){
    //translate(fl_rad,fl_rad);
    if(bird.pos.y<HEIGHT){
        bird.vel+=g;
        bird.pos.y+=bird.vel;
        if(bird.vel<min_spd){
            bird.vel=min_spd;
        }
        if(bird.pos.y>HEIGHT-fl_rad){
            bird.vel=0;
            bird.pos.y=HEIGHT-fl_rad;
    }
}
}

function gameover(bird){
    bird.gameover=true;
    return bird.score;
}
function initai(flappy,pipe){
    var move=parseInt(random(0,2));
    if(move==1){
        fall(fl,gravity-fl_lift);
    }
    else{
        fall(f1,gravity);
    }
    
    flappy.moveset.push(move);
    flappy.inputset.push([flappy.pos,flappy.vel,get_pipe_dist(flappy,pipe),pipe.uh,pipe.dh]);
}
function get_pipe_dist(flappy,pipe){
    return flappy.pos.x-pipe.posx;
}
function get_max_flappy(flappies){
    flappies.sort(function(a,b){
        var x=a.score,y=b.score;
        return ((x<y)?-1:((x>y)?1:0));
    })
}