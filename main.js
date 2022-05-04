noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/PrXC77qp/m.png');

}
function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotPoses);
   }
function draw(){
    image(video , 0 , 0 , 300, 300);
    image(mustache, noseX, noseY, 30, 30);
}
function takesnapshot(){
    save("MyFilteredImage.jpg")
}
function modelloaded(){
    console.log('PoseNet is Initilaized');
}
function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y+5;
        console.log("nose x  = " + noseX);
        console.log("nose y = "  + noseY);

    }
}