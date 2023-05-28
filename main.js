function preload(){

}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
save('mascara.png');
}
function modelLoaded(){
console.log("modeloCargado");
}
function gotPoses(results){
if(results.lenth>0){
console.log("results");
console.log("nose Y="+results[0].pose.nose.y);
console.log("nose X="+results[0].pose.nose.x);
}
}