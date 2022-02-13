music1 = "";
music2 = "";
left_WristX = 0;
left_WristY = 0;
right_WristX = 0;
right_WristY = 0;




function preload()
{
    music1= loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}


function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);



}


function modelLoaded()
{
    console.log("PoseNet is Intialized.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;
        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        
        console.log("RightWristX = " + right_wristX + "RightWristY = " + right_wristY + "leftWristX = " + left_wristX + "LeftWristY  = " + left_wristY);

    }
}

function draw()
{
    image(video,0,0,600,500);
    
}

function play()
{
    song.play();
}