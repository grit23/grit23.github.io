ball.prototype.draw = function() {		
	this.x = this.nextX;
	this.y = this.nextY;
	g.save();
	g.translate(this.x, this.y);
	g.fillStyle = this.ballColor;
	g.beginPath();
	g.arc(0,0,this.radius,0,2*Math.PI);
	g.fill();
	g.restore();
};
canon.prototype.draw = function() {
	g.save();
	g.translate(30, g.canvas.height - 30);
	g.rotate(-d2g(this.angle));
	g.drawImage(canonImg, -11, -12, canonImg.width, canonImg.height);
	g.restore();
	
	g.save();
	g.translate(14, g.canvas.height - 23);
	g.drawImage(canonFunImg, -11, -12, canonFunImg.width, canonFunImg.height);
	g.restore();
	
};

explosion.prototype.draw = function() {
	// clip the right part of the image based on current frame
	var pos = (15 - this.frame) * 64;
	var s2 = this.size / 2;
	g.save();
	g.translate(this.x, this.y);
	g.rotate(-d2g(this.angle));
	if(this.xAdjust)
	{
		g.drawImage(explosionImg, pos / 256, pos % 256, 64, 64, this.xAdjust, -s2, this.size, this.size);
	}
	else
	{
		g.drawImage(explosionImg, pos / 256, pos % 256, 64, 64, -s2, -s2, this.size, this.size);
	}
	g.restore();
};
ship.prototype.draw = function() {		
	g.save();
	g.translate(this.x, this.y);
	g.rotate(d2g(this.angle));
	g.beginPath();
	g.moveTo(0, -13);
	g.lineTo(10, 12);
	g.lineTo(-10, 12);
	g.closePath();
	var gradient=g.createLinearGradient(-10,13,10,12);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");

	// Fill with gradient
	g.strokeStyle=gradient;
	//g.strokeStyle = "blue";
	g.lineWidth = 4;
	g.stroke();
	g.fill();
	if(this.control.up)
	{
		g.beginPath();
		g.moveTo(10, 12);
		g.lineTo(0, 20);
		g.lineTo(-10, 12);
		g.closePath();
		g.lineWidth = 1;
		g.strokeStyle = "red";
		g.fillStyle = "red";
		g.stroke();
		g.fill();
		g.beginPath();
		g.moveTo(5, 12);
		g.lineTo(0, 30);
		g.lineTo(-5, 12);
		g.closePath();
		g.strokeStyle = "yellow";
		g.fillStyle = "yellow";
		g.stroke();
		g.fill();
		
	}
	g.restore();
};

particle.prototype.draw = function() {
	g.save();
	g.translate(this.x, this.y);
	g.beginPath();
	g.arc(0, 0, 3, 0, 2 * Math.PI, false);
	g.fill();
	g.restore();
};

var draw = function() {
	g.clearRect(0, 0, g.canvas.width, g.canvas.height);
	
	for(var i = 0; i < balls.length; i++ )
		balls[i].draw();
	for(i = explosions.length; i--; )
		explosions[i].draw();
	for(i = particles.length; i--; )
		particles[i].draw();
	shipObj.draw();
	canonObj.draw();
};