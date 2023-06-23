nosex=0;
nosey=0;

function preload(){
img=loadImage("m.png");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function draw(){
image(video,0,0 ,500,500);
image(img,nosex,nosey,80,40);
}

function take_snapshot(){
    save("itisfiltered")
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-100;
        nosey=results[0].pose.nose.y+35;
    }
}