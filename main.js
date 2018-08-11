
var pipes=[],pa;
const space=200;
var fl;
function setup(){
    createCanvas(640, 480);
    background(0);
    fl=new flappy_bird();
   // fl.draw();
}
function draw(){
    console.log(fl.pos,HEIGHT);
    background(0);
    fall(fl);
    fl.draw();
}
/*function setup(){
    createCanvas(640, 480);
    background(0);
    
        pa=posx;
        pipes.push(new Pipe(pa));
        
    
    
}

function draw(){
    console.log(posx);
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
            console.log(pipes.length);
        }
    
    }
        
}*/
