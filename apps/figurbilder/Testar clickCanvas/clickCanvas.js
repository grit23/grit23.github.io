function clickCanvas(){
	var c=document.getElementById("clickCanvas");
	var ctx = c.getContext("2d");
	c.width  = window.innerWidth;
	c.height = window.innerHeight;
	//rita ruta att klicka i - gör detta som en funktion som ritar rutor
	ctx.fillStyle= "#00001F";
	ctx.fillRect(0,0,c.width,c.height);//bakgrundsfarg med farg från rad före
	ctx.lineWidth = "0";
	//var farg="red";
	//ctx.fillStyle = farg;
	
	var logo1 = new Image();
	//Nedan ser till att bilden laddas innan den ska visas, om inte så visas ingen bild.
	logo1.addEventListener("load",function(){
	ctx.drawImage(logo1,c.width/2-logo1.width/2,c.height*0.4-150,287,99);});
	
	logo1.src = 'logo.png';
	//nedan, om fler rutor behövs, kom ihåg att lägga till även in mouseUp-funktionen, koordinater.
	drawBox(c.width/2-c.width*0.7/2,c.height*0.4, c.width*0.7,100,"#B20000","test text1","30px Calibri","white","clickCanvas");
	drawBox(c.width/2-c.width*0.7/2,c.height*0.4+120, c.width*0.7,100,"#B20000","test text2","30px Calibri","white","clickCanvas");
	
	events();
	}
	
/*
färger
Röd #B20000
Blå #00001F
Vit white
*/
//fortsätt lägga till text och gör click starta functions	
function drawBox(x_start,y_start,bredd,hojd,box_color,box_text,textFont,textFarg,canvas_id){
	var c=document.getElementById(canvas_id);
	var ctx=c.getContext("2d");
	ctx.fillStyle = box_color;
	ctx.fillRect(x_start,y_start,bredd,hojd);
	ctx.fillStyle = textFarg;
	ctx.font = textFont;
	ctx.fillText(box_text,x_start+0.1*bredd,y_start+hojd/2)
}

function events(){
	console.log("event triggered");
	var c = document.getElementById("clickCanvas");
	c.addEventListener("mouseup", mouseUp, false);
 // c.addEventListener("mousemove", mouseXY, false);
 // c.addEventListener("touchstart", touchDown, false);
 // c.addEventListener("touchmove", touchXY, true);
 	c.addEventListener("touchend", mouseUp, false);
	}
	
function clickArea(x_start,y_start,bredd,hojd,val){

	//console.log("i if-satsen clientX: "+event.clientX);
	//console.log("i if-satsen clientY: "+event.clientY);
	
	// nedan: ser till att klick i rutan ritatd av clickArea aktiverar t ex en alert eller annant funktion, x och y räknas från vä övre hörn.
	//-2 och -10 gör att det stämmer av nån anledning, resize window förstör rektangeln.
	if(event.clientX>= x_start-2 && event.clientX<=x_start+bredd-2 && event.clientY>=y_start-10 && event.clientY<=y_start+hojd-10){
		clickVal(val);
		}
	}
	
	function clickVal(val){  //här görs val baserat på vad som skickas från clickArea som variabeln val
		if (val=="1"){
			alert("Valet är 1");
			}
		if (val=="2"){
			alert("2 valdes");
			}
	}
	
	//nedan lägger till koordinater för 2 rutor, lägg till fler om fler rutor behövs.
	function mouseUp(event) {
		var x = event.clientX;
		console.log("mouseUp X: "+x)
		var c=document.getElementById("clickCanvas"); //kom ihåg att ändra denna när koden flyttas till programmet
		clickArea(c.width/2-c.width*0.7/2,c.height*0.4, c.width*0.7,100,"1");
		clickArea(c.width/2-c.width*0.7/2,c.height*0.4+120, c.width*0.7,100,"2");
	}