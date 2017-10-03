var shape = "circle";
var ranNum = getRandom();
var angle = 0.0;

function setup(){
    createCanvas(960,593);
    textFont("Arial");
    background(102);
}

function draw(){
    //Instructions
    fill(0,0,255);
    rect(10,500,470,470);
    //start text for shapes....
    fill(253);
    textSize(14);
    text("Press C for Circle",25,533);
    textSize(14);
    text("Press T for Triangle",25, 553);
    text("Press S for Square",25,573);
    //start text for instructions at start
    fill(253);
    textSize(14);
    text("Click anywhere on-screen to begin drawing", 180,533);
    text("Press Enter to exit screensaver", 180,553);
    text("Press Delete to restart drawing", 180,573);
    //Instructions END
    
    if(keyIsPressed){
        if(key == "c"){
            shape = "c";
            fill(ranNum,ranNum,ranNum);
        }
        if(key == "t"){
            shape = "t";
            fill(ranNum,ranNum,ranNum);
        }
        if(key == "s"){
            shape = "s";
            fill(ranNum,ranNum,ranNum);
        }
    }
if(mouseIsPressed){
    if(shape == "c"){
        translate(mouseX,mouseY);
        rotate(mouseX/100.0);
        ellipse(-15,-15,40,40);
        fill(ranNum,ranNum,ranNum);
        angle+=0.1;
    }
    if(shape == "t"){
        translate(mouseX,mouseY);
        rotate(mouseX/100.0);
        triangle(mouseX+30,mouseY+30,mouseX,mouseY-30,mouseX-30,mouseY+30);  
        fill(ranNum,ranNum,ranNum);
        angle+=0.1;
    }
    if(shape == "s"){
        translate(mouseX,mouseY);
        rotate(mouseX/100.0);
        rect(mouseX, mouseY, 40, 40);
        fill(ranNum,ranNum,ranNum);
        angle+=0.1;
        
        //Attempts at creating different types of motion using translations and rotations
    }
else{
    scale(1.0);
}
}
}
function getRandom(){
    var min = Math.ceil(0);
    var max = Math.floor(255);
    return Math.floor(Math.random()*(max-min))+min;
    
    //failed attempt at making a color randomizer
}
