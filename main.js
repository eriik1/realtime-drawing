function setup(){
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    video=createCapture(VIDEO)
    video.size(550,500)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("modelisloaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        difference=floor(leftwristx-rightwristx)
    }
}
function draw(){
    background("black")
    fill("white")
    document.getElementById("squreside").innerHTML="the font size of the text is"+difference+"px"
    
    text("eriik",nosex,nosey)
    textSize(difference)
}
nosex=0
nosey=0
difference=0
leftwristx=0
rightwristx=0
