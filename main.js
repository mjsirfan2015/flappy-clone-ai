
var pipes=[],pa;
const space=200;
var fl;
/*function setup(){
    createCanvas(640, 480);
    background(0);
    fl=new flappy_bird();
   // fl.draw();
}
function draw(){
    console.log(fl.vel);
    background(0);
    fall(fl,gravity);
    fl.draw();
}*/

function setup(){
    createCanvas(640, 480);
    background(0);
    
        pa=posx;
        pipes.push(new Pipe(pa));
        fl=new flappy_bird();   
    
    
}

function draw(){

    //console.log(posx);
    
    background(0);
    if(pipes.length>0){
        if(pipes[pipes.length-1].posx==WIDTH-(space-pw)){
            pipes.push(new Pipe(pa))
        }
    }
    for(i=0;i<pipes.length;i++){
        pipes[i].movepipe();
        if(pipes[i].hasdisappeared()){
            pipes.splice(i,1);
            //console.log(pipes.length);
        }
    
    }
    fall(fl,gravity);
    fl.draw();
    for(i=0;i<pipes.length;i++){
        if(collideRectCircle(pipes[i].posx,0,pw,pipes[i].uh,fl.pos.x,fl.pos.y,fl_rad)
        ||collideRectCircle(pipes[i].posx,pipes[i].uh+gap,pw,pipes[i].dh,fl.pos.x,fl.pos.y,2*fl_rad)||
    (fl.pos.y)>=(HEIGHT-2*fl_rad)){
            //console.log(fl.pos.y,HEIGHT);
            final_score=gameover(fl);
            fill(255);
            text(final_score+"",10,10);
    }
    }
}

function keyPressed(){
    if(key==' '){
        fall(fl,gravity-fl_lift);
    }
}