var ball = function(id, vx, vy, m, ballColor, radius, startX, startY) 
{
	this.id = id;
	this.vx = vx;						
	this.vy = vy;					
	this.ballColor = ballColor;
	this.x = startX;							
	this.y = startY;							
	this.nextX;
	this.nextY;
	this.radius = radius;
	this.m = m;
};

var canon = function(angle)
{
	this.angle = angle;
};

var explosion = function(angle, size, x, y, xAdjust) {
	this.xAdjust = xAdjust; // Needed for adjusting the explosion in the canon coordinate system  
	this.x = x;
	this.y = y;
	this.size = size;
	this.frame = 15;		// 15 frames in explosion animation
	this.angle = angle;
};

var keyboard = {
	shoot : false,
	left : false,
	right: false,
	up : false,
	down : false,
	press : function(e) {
		manageKeyboard(e.keyCode, true);
	},
	release : function(e) {
		manageKeyboard(e.keyCode, false);
	}
};
var ship = function() {
	this.control = keyboard;
	this.x = g.canvas.width / 2;
	this.y = g.canvas.height - 30;
	this.angle = 0;
	this.vx = 0;
	this.vy = 0;
};

var particle = function(x, y, vx, vy) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
};