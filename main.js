function preload(){

}

function setup() {
   canvas= createCanvas(500,350);
   canvas.center();
   video= createCapture(VIDEO);
   video.hide();
}

function draw() {
    image(video,100,100,300,150);
    stroke("purple");
    fill("pink");
    circle(100,100,100);
    rect(300,50,50,30);
}