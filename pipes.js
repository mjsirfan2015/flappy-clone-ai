const WIDTH=640,HEIGHT=480;
const gap=150;
const speed=1;
const pw=30;
const windows={w:WIDTH,h:HEIGHT};
const minheight=50,
maxheight=HEIGHT-(gap+minheight),

posx=windows.w;
function Pipe(px){
    
    
    this.uh=parseInt(minheight+random(0,maxheight-minheight+1));
    this.dh=windows.h-(this.uh+gap);
    this.posx=px;
    this.spawnpipe=spawnpipe;
    this.movepipe=movepipe;
    this.hasdisappeared=hasdisappeared;
}
function spawnpipe(){
    fill(255);
    //console.log(this.window.h,this.dh);
    rect(this.posx,0,pw,this.uh);
    rect(this.posx,windows.h-this.dh,pw,this.dh);
    
}
function movepipe(){
    
    this.spawnpipe();
    this.posx=this.posx-speed;
}
function hasdisappeared(){
    
    if(this.posx>-(pw+10))return false;
    else return true;
    
}

function get_nearest_pipe(pipes,posx){
    for(i=0;i<pipes.length;i++){
        if(pipes[i].posx>posx){
            return pipes[i];
        }
    }
}