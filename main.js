
var pipes=[],pa;
const space=200,gen=12;
var fl;
var flappies=[],livecount=gen;

function setup(){
    createCanvas(640, 480);
    background(0);
    
        pa=posx;
        pipes.push(new Pipe(pa));
        for(i=0;i<gen;i++){
            flappies.push(new flappy_bird())
        }   
        console.log(flappies[i]);
    
}

function draw(){

    //console.log(posx);
    if(livecount==0){
        max_brd=get_max_flappy(flappies);
        text("MAX Score: "+max_brd.score);
        console.log(max_brd.moveset,max_brd.inputset);       
    }

    
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
    
    //initial flappyai
    for(i=0;i<gen;i++){
        initai(flappies,get_nearest_pipe(pipes));
        //collision test
        collisiontest(flappies[i],pipes);
    }  
    
   
}

function keyPressed(){
    if(key==' '){
        fall(fl,gravity-fl_lift);
    }
}
function collisiontest(fl,pipes){
    for(i=0;i<pipes.length;i++){
        if(collideRectCircle(pipes[i].posx,0,pw,pipes[i].uh,fl.pos.x,fl.pos.y,fl_rad)
        ||collideRectCircle(pipes[i].posx,pipes[i].uh+gap,pw,pipes[i].dh,fl.pos.x,fl.pos.y,2*fl_rad)||
    (fl.pos.y)>=(HEIGHT-2*fl_rad)){
            //console.log(fl.pos.y,HEIGHT);
            gameover(fl);
            livecount--;
            text("Alive: "+livecount,10,10);
    }
    }
}