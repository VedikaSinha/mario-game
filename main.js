function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	game_over = loadSound("gameover.wav");
	coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameConsole");
	poseNet = ml5.poseNet(video,modalLoaded);
	poseNet.on("pose", gotPoses);
}

function modalLoaded()
{
	console.log("modalLoaded")
}

function gotPoses(results)
{
	if(results.length>0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






