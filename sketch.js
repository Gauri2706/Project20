var bg, bgImg;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;

function preload() {
    
    //loading images and animations
bgImg = loadImage("images/garden.png");
cat1 = loadAnimation("images/cat1.png");
cat2 = loadAnimation("images/cat2.png","images/cat3.png");
cat3 = loadAnimation("images/cat4.png");
mouse1 = loadAnimation("images/mouse1.png");
mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    //creating cat and mouse sprite
    cat = createSprite(750,600,10,10);
    cat.addAnimation("sleeping",cat1);
    cat.scale = 0.2;

    mouse = createSprite(150,600,10,10);
    mouse.addAnimation("standing",mouse1);
    mouse.scale = 0.15;

}

function draw() {

    //background
    background(bgImg);
    
    //collision of mouse and cat
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("catlastimage",cat3);
        cat.changeAnimation("catlastimage");
        cat.scale = 0.2;
        cat.x = 300;

        mouse.addAnimation("mouselastimage",mouse3);
        mouse.changeAnimation("mouselastimage");
        mouse.scale = 0.15;
    }


    drawSprites();
}

//if key pressed
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("teasing",mouse2);
        mouse.changeAnimation("teasing");
        cat.velocityX = -5;

        cat.addAnimation("running",cat2);
        cat.changeAnimation("running");

    }


}
