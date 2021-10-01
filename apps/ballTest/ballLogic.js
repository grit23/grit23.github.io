//Rotate
var rotate = function(x, y, sin, cos, reverse) {
    return {
        x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
        y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
    };
};

// Update ball position
ball.prototype.update = function()
{
	this.vy += gravitation;
	this.nextY = this.y + this.vy;
	this.nextX = this.x + this.vx;
}

// Ball logic
ball.prototype.logic = function() 
{ 
	// Check collision
	for(var i = 0; i < balls.length; i++)
	{
		if(balls[i].id != this.id)
		{
			var dx = balls[i].nextX - this.nextX;
			var dy = balls[i].nextY - this.nextY;
			var dist = Math.sqrt(dx * dx + dy * dy);
			
			//collision handling code here
			if (dist < this.radius + balls[i].radius) {
				//calculate angle, sine, and cosine
				var angle = Math.atan2(dy, dx);
				
				var sin = Math.sin(angle);
				
				var cos = Math.cos(angle);
				
				var dxNew = (this.radius + balls[i].radius + 1)*cos;
				var dyNew = (this.radius + balls[i].radius + 1)*sin;
				if(dx < 0)
				{
					balls[i].nextX = balls[i].nextX - (Math.abs(dxNew) - Math.abs(dx));
					dx = -Math.abs(dxNew);
				}
				else
				{
					balls[i].nextX = balls[i].nextX + (Math.abs(dxNew) - Math.abs(dx));
					dx = Math.abs(dxNew);
				}
				if(dy < 0)
				{
					balls[i].nextY = balls[i].nextY - (Math.abs(dyNew) - Math.abs(dy));
					dy = -Math.abs(dyNew);
				}
				else
				{
					balls[i].nextY = balls[i].nextY + (Math.abs(dyNew) - Math.abs(dy));
					dy = Math.abs(dyNew);
				}
				//rotate this's position
				var	pos0 = {x: 0, y: 0}; //point

				//rotate balls[i]'s position
				var	pos1 = rotate(dx, dy, sin, cos, true);

				//rotate this's velocity
				var	vel0 = rotate(this.vx, this.vy, sin, cos, true);

				//rotate ball1's velocity
				var	vel1 = rotate(balls[i].vx, balls[i].vy, sin, cos, true);

				//collision reaction
				var vxTotal = vel0.x - vel1.x;
				
				vel0.x = ((this.m - balls[i].m) * vel0.x + 2 * balls[i].m * vel1.x) / (this.m + balls[i].m);
				vel1.x = vxTotal + vel0.x;
				//update position
				pos0.x += vel0.x;
				pos1.x += vel1.x;
				
				//rotate positions back
				var pos0F = rotate(pos0.x, pos0.y, sin, cos, false);
				var pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
				
				//adjust positions to actual screen positions
				balls[i].nextX = this.nextX + pos1F.x;
				balls[i].nextY = this.nextY + pos1F.y;
				this.nextX = this.nextX + pos0F.x;
				this.nextY = this.nextY + pos0F.y;

				//rotate velocities back
				var vel0F = rotate(vel0.x, vel0.y, sin, cos, false);
				var vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
				this.vx = vel0F.x;
				this.vy = vel0F.y;
				balls[i].vx = vel1F.x;
				balls[i].vy = vel1F.y;
			}
		}
	}
	// Check walls
	if(this.nextY < this.radius || this.nextY > g.canvas.height - this.radius)
	{
		if(this.nextY < this.radius) this.nextY = this.radius;
		else this.nextY = g.canvas.height - this.radius;
		if(gravitation != 0) this.vy = -sign(this.vy)*(Math.abs(this.vy)*energyLoss - gravitation); // If we have gravitation we must also add an energy loss or else we will add energy to the ball
		else this.vy = -this.vy;
	}
	if(this.nextX < this.radius || this.nextX > g.canvas.width - this.radius)
	{
		if(this.nextX < this.radius) this.nextX = this.radius;
		else this.nextX = g.canvas.width - this.radius;
		if(gravitation != 0) this.vx = -sign(this.vx)*(Math.abs(this.vx)*energyLoss - gravitation); // If we have gravitation we must also add an energy loss or else we will add energy to the ball
		else this.vx = -this.vx;
	}
};

// Calculate next step in calculation for this explosion
explosion.prototype.logic = function() {
	return this.frame--;
};

// Particle logic
particle.prototype.logic = function() {
	this.x += this.vx;
	this.y += this.vy;
		
	for(var i = balls.length; i--; ) {
		var dy = balls[i].y - this.y;
		var dx = balls[i].x - this.x;
		var dist = Math.sqrt(dx * dx + dy * dy);
			
		if(dist < balls[i].radius) {
			explosions.push(new explosion(0, balls[i].radius*5, balls[i].x, balls[i].y, 0));
			balls.splice(i, 1);
			return false;
		}		
	}
	if(this.y < 0 || this.y > g.canvas.height || this.x < 0 || this.x > g.canvas.width) return false; // If wall reached, remove particle
	
	return true;
};

// Ship logic
ship.prototype.logic = function() {
	
	if(this.control.left)
		this.angle-=10;
	if(this.control.right)
		this.angle+=10;
	if(this.control.shoot ) 
	{
		var vx = 17 * Math.sin(d2g(this.angle));
		var vy = 17 * Math.cos(d2g(this.angle));
		var x = this.x + 20 * Math.sin(d2g(this.angle));
		var y = this.y - 20 * Math.cos(d2g(this.angle));
		particles.push(new particle(x , y, vx, - vy));
		//this.control.shoot = false;
	}
	
	if(this.control.up)
	{
		if(Math.sqrt(this.vx * this.vx + this.vy*this.vy) < 30)
		{
			this.vx+=Math.sin(d2g(this.angle));
			this.vy+=Math.cos(d2g(this.angle));
		}
		//this.control.up = false;
	}
	if(this.control.down)
	{
		if(Math.sqrt(this.vx * this.vx + this.vy*this.vy) < 30)
		{
			this.vx-=Math.sin(d2g(this.angle));
			this.vy-=Math.cos(d2g(this.angle));
		}
		//this.control.down = false;
	}
	this.vy-=gravitation;
	this.x+=this.vx;
	this.y-=this.vy;
	if(this.y < 0)
	{
		this.y = 10;
		this.vx = 0;
		this.vy = 0;
	}
	else if(this.y > g.canvas.height)
	{	
		this.y = g.canvas.height - 10;
		this.vx = 0;
		this.vy = 0;
	}
	else if(this.x < 0)
	{
		this.x = 10;
		this.vx = 0;
		this.vy = 0;
	}
	else if(this.x > g.canvas.width)
	{
		this.x = g.canvas.width-10;
		this.vx = 0;
		this.vy = 0;
	}
	
};

var logic = function()
{
	for(var i = 0;i < balls.length; i++ )
		balls[i].update();
	for(var i = 0;i < balls.length; i++ )
		balls[i].logic();
	for(i = explosions.length; i--; )
		if(!explosions[i].logic())
			explosions.splice(i, 1);
	for(i = particles.length; i--; ) {
		if(!particles[i].logic())
			particles.splice(i, 1);
	}
	shipObj.logic();
};