var g, 														//The Canvas Context to draw on
	balls = [],												// Holds ball objects
	gameRunning = false,									// If the game is currently running
	loop,													// The drawing loop
	ballCol = ["red", "blue", "green", "black", "yellow"],	// Ball colours
	gravitation = 0,										// Start value for gravitation
	energyLoss = 0.7,										// start value for energy loss 
	idTick = 0,												//
	canonObj,												// Canon	
	explosions = [],										// Holds explosion objects
	shipObj,												// Ship
	particles = [];											// Holds particle objects, shots from ship
	

//Helper to calculate degree -> rad
var d2g = function(angle) {
	return Math.PI / 180 * angle;
};

//Helper to calculate rad -> degree
var g2d = function(angle) {
	return 180/Math.PI * angle;
};

// Helper to calculate sign of number
var sign = function(num)
{
	if(num > 0) return 1;
	if(num < 0) return -1;
	if(num == 0) return 0;
};

//Manages the keyboard
var manageKeyboard = function(key, status) {
	switch(key) {
		case 37:
		//case 74:
			keyboard.left = status;
			break;
		case 38:
		//case 75:
			keyboard.up = status;
			break;
		case 39:
		//case 76:
			keyboard.right = status;
			break;
		case 40:
			keyboard.down = status;
			break;
		case 32:
			keyboard.shoot = status;
			break;
		default:
			return;	//Not a meaningful key - just return!
	}
};