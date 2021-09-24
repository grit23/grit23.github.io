function start(){
/*
	circle(200,150,70,"blue");
	rectangle(300,150, 70,35,"red");
	triangle(400,150,450,150,425,200,"green");
	ring(200,150,40,10,"yellow");
	line(0,150,500,150,5,"black");
	picture(0,0,"1618.png");


function visaBild(){
	picture(0,0,"1618.png");
}
*/
circleX=0;
circleY=0;

maximizeCanvas();
//visaBild();
//window.setTimeout("visaBild()",200);
//update();

}

	
function update(){
	clearScreen();
	//circle(circleX,circleY,250,"red");
	picture(circleX,circleY,"mindmethods6.png");

	circleX++;
	circleY++;
}

/*
function maximizeCanvas()
{
  canvas.width = window.innerWidth-1;
  canvas.height = window.innerHeight-1;
  totalWidth = canvas.width;
  totalHeight = canvas.height;
}
*/