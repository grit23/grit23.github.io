var gameLoop = function() {
	if(gameRunning) 
	{
		logic();
		draw();
	}
};
var doFirst = function()
{
	
	canonImg = document.createElement('img');
	canonImg.src = 'canon.png';
	canonFunImg = document.createElement('img');
	canonFunImg.src = 'canonfundament.png';
	explosionImg = document.createElement('img');
	explosionImg.src = 'explosion.png';
	var count = 3;
	// Wait until images load
	canonImg.onload = canonFunImg.onload = explosionImg.onload = function() {
		--count;
		
		if(count === 0)
			loop = setInterval(gameLoop, 40);
	};
	
	var canvas = document.getElementById("graphic");
	g = canvas.getContext("2d");
	
	//window.addEventListener('keydown', keyboard.press, false);
	//window.addEventListener('keyup', keyboard.release, false);
	canvas.addEventListener('keydown', keyboard.press, false);
	canvas.addEventListener('keyup', keyboard.release, false);
	canvas.setAttribute('tabindex', '0');
	canvas.focus();
	canonObj = new canon(45);
	shipObj = new ship();
	gameRunning = true;
};

var startClick = function()
{
	var numberOfBallsfield = document.getElementById("numberOfBalls");
	var gravityfield = document.getElementById("gravity");
	var massfield = document.getElementById("mass");
	var radiusfield = document.getElementById("radius");
	var anglefield = document.getElementById("angle");
	var speedfield = document.getElementById("speed");
	
	gravitation = parseFloat(gravityfield.value);
	var mass = parseFloat(massfield.value);
	var radius = parseFloat(radiusfield.value);
	var angle = parseFloat(anglefield.value);
	var speed = parseFloat(speedfield.value);
	var speedX = Math.abs(speed*Math.cos(d2g(angle)));
	var speedY = -Math.abs(speed*Math.sin(d2g(angle)));
	canonObj.angle = angle;
	// Calculate where ball should start
	startX = 30 + Math.abs((radius + 31)*Math.cos(d2g(angle)));
	startY = g.canvas.height - 30 + -Math.abs((radius + 31)*Math.sin(d2g(angle)));
	
	// Add ball and explosion right by canon. Adjust the x value in the translated coordinate system for the explosion
	balls.push(new ball(idTick++, speedX, speedY, mass, ballCol[idTick % 5], radius, startX, startY));
	explosions.push(new explosion(angle, radius*5, 30, g.canvas.height - 30, 25));
}
var clearScreen = function()
{
	balls = [];
	g.clearRect(0, 0, g.canvas.width, g.canvas.height);
	//gameRunning = false;
}
var updateCanonAngle = function(value)
{
	canonObj.angle = value;
}

window.addEventListener("load", doFirst, false);