function clickCanvas(){

//i ClickArea (anropas i mouseUp2-funktionen) avgörs vad so händer när man trycker på knapp, nya knappar görs med drawBox-anrop nedan
//
	var c=document.getElementById("nummerCanvas");
	var ctx = c.getContext("2d");
	c.width  = window.innerWidth;
	c.height = window.innerHeight;
	//rita ruta att klicka i - gör detta som en funktion som ritar rutor
	ctx.fillStyle= "#3b5998"; //denna sätter bakgrunden på bilden med knappar

	ctx.fillRect(0,0,c.width,c.height);//bakgrundsfarg med farg från rad före
	ctx.lineWidth = "0";
	
// original mellan kommentarstaggarna nedan - ett sätt att förladda men långsammar än alt2 nedan
	//var logo1 = new Image();
//	logo1.src = 'nb_bilder/logo.png';
	//Nedan ser till att bilden laddas innan den ska visas, om inte så visas ingen bild.
	//logo1=bildBank[101];
	

	//logo1.addEventListener("load",function(){
	//ctx.drawImage(logo1,c.width/2-logo1.width/2,c.height*0.4-150,287,99);});
//var logo1 = new Image();

//logo som text istället för bild
ctx.fillStyle = "#8b9dc3";
ctx.font = "100px Verdana"
ctx.fillText("Figurbilder",c.width/2-c.width*0.7/2,c.height*0.15);

fillStyle = "#8b9dc3";
ctx.font = "italic 42px Verdana"
ctx.fillText("Memorera bilden till siffran",c.width/2-c.width*0.7/2,c.height*0.24);

//logo1.onload=function(){

//	ctx.drawImage(logo1,c.width/2-logo1.width/2,c.height*0.4-150,287,99);
	//******************************************
	//GUI rita
	//nedan, om fler rutor behövs, kom ihåg att lägga till även in mouseUp2-funktionen, koordinater.
	
	//öva-knappen
	drawBox(c.width/2-c.width*0.7/2,c.height*0.3, c.width*0.7+50,150,"#8b9dc3",String.fromCharCode(214)+"va","bold 90px Calibri","#dfe3ee","nummerCanvas");
	
//	drawBox(c.width/2-c.width*0.7/2,c.height*0.4+120, c.width*0.5,100,"#B20000","Testa vad du minns","30px Calibri","white","nummerCanvas");
	
	
	
	//function drawBox(x_start,y_start,bredd,hojd,box_color,box_text,textFont,textFarg,canvas_id)
	//liten knapp för att välja spann
	drawBox(c.width/2-c.width*0.7/2,c.height*0.3+200, 162,100,"white","0-19","42px Calibri","#00001F","nummerCanvas");
	drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+200, 162,100,"white","20-39","42px Calibri","#00001F","nummerCanvas");
	drawBox(c.width/2-c.width*0.7/2+404,c.height*0.3+200, 162,100,"white","40-59","42px Calibri","#00001F","nummerCanvas");
	drawBox(c.width/2-c.width*0.7/2+606,c.height*0.3+200, 162,100,"white","60-79","42px Calibri","#00001F","nummerCanvas");
	//rad 2 av små ikoner
	drawBox(c.width/2-c.width*0.7/2,c.height*0.3+320, 162,100,"white","80-100","42px Calibri","#00001F","nummerCanvas");
	drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+320, 162,100,"white","ALLA","42px Calibri","#00001F","nummerCanvas");

	//gamla nedan
	/*
	drawBox(30,c.height*0.3, 50,50,"white","0-19","16px Calibri","#00001F","nummerCanvas");
	drawBox(30,c.height*0.4, 50,50,"white","20-39","16px Calibri","#00001F","nummerCanvas");
	drawBox(30,c.height*0.5, 50,50,"white","40-59","16px Calibri","#00001F","nummerCanvas");
	drawBox(30,c.height*0.6, 50,50,"white","60-79","16px Calibri","#00001F","nummerCanvas");
	drawBox(30,c.height*0.7, 50,50,"white","80-100","16px Calibri","#00001F","nummerCanvas");
	drawBox(30,c.height*0.8, 50,50,"white"," Alla","16px Calibri","#00001F","nummerCanvas");
	*/
	//
	events2();
	
};

	


	
/*
färger
Röd #B20000
Blå #00001F
Vit white
*/
//fortsätt lägga till text och gör click starta functions	
//****************här var drawbox förut

function events2(){
	console.log("events2 triggered");
	var c = document.getElementById("nummerCanvas");
	c.addEventListener("mouseup", mouseUp2,false);
 // c.addEventListener("mousemove", mouseXY, false);
 // c.addEventListener("touchstart", touchDown, false);
 // c.addEventListener("touchmove", touchXY, true);
 	c.addEventListener("touchend", mouseUp2, false);
	}

function removeEvents2(){;
	var c = document.getElementById("nummerCanvas");
	c.removeEventListener("mouseup", mouseUp2,false);
 // c.removeEventListener("mousemove", mouseXY, false);
 // c.removeEventListener("touchstart", touchDown, false);
 // c.removeEventListener("touchmove", touchXY, true);
 	c.removeEventListener("touchend", mouseUp2, false);
}
	
function clickArea(x_start,y_start,bredd,hojd,val){ //denna ändras inte när man lägger till ny knapp, lägg till i clickVal.

	//console.log("i if-satsen clientX: "+event.clientX);
	//console.log("i if-satsen clientY: "+event.clientY);
	
	// nedan: ser till att klick i rutan ritatd av clickArea aktiverar t ex en alert eller annant funktion, x och y räknas från vä övre hörn.
	//-2 och -10 gör att det stämmer av nån anledning, resize window förstör rektangeln.
	if(event.clientX>= x_start-2 && event.clientX<=x_start+bredd-2 && event.clientY>=y_start-10 && event.clientY<=y_start+hojd-10){
		clickVal(val);
		}
}
	//nedan väljs vad som händer när man trycker på knapparna på clickCanvas
function clickVal(val){  //här görs val baserat på vad som skickas från clickArea som variabeln val

	//val 1 och 2 är stora knapparna öva och träna eller vad jag nu döpt dom till
	//resten 3.4.5... är val av spannet 0-20 osv.
		if (val=="1"){
			removeEvents2();
			events();
			console.log("val 1 valt");
			mouseUp();
			}
		if (val=="2"){
			removeEvents2();
			events();
			console.log("val 2 valt");
			mouseUp();
			}
			//nedan: slutbild=20 gör att bild 19 är den sista som visas.
			//farg_toggle är global variabel
		if (val=="3"){
			startBild = 0; //en lägre än numret blir första bilden - globala variabler, måste var jämnt annars fuckar det ur!
			slutBild =20; //en innan siffran här blir sista bilden
			
			//ändra färg på boxen nedan vid click
			
			
			
			
			var c  = document.getElementById("nummerCanvas"); //behövs för anropet av drawBox nedan
			var ctx=c.getContext("2d");
				if(farg_toggle_val3==0){
					
					reset_farg_spann_knappar(); //alla knappar sätt i oklickad färg sen ändras denna knapp till grey, dvs klickad
					
					drawBox(c.width/2-c.width*0.7/2,c.height*0.3+200, 162,100,"grey","0-19","42px Calibri","white","nummerCanvas"); //färg vid click
					farg_toggle_val3=1;
					console.log("farg_toggle_val3 "+ farg_toggle_val3)
					}
					else{
					//ctx.clearRect(30,c.heigth*0.3,50,50);
					drawBox(c.width/2-c.width*0.7/2,c.height*0.3+200, 162,100,"white","0-19","42px Calibri","black","nummerCanvas"); //färg vid click
					farg_toggle_val3=0;
					console.log("else i toggle värde val3 "+farg_toggle_val3);
					}
			//slut färgtoggling värdet ska sättas en gång baserat på alla knappars state
			
			console.log("val 3 valt");
			console.log("knapp 3 startBild= "+startBild+" slutbild= "+slutBild);
			}
		if (val=="4"){
			startBild = 20; //en lägre än numret blir första bilden - globala variabler, måste var jämnt annars fuckar det ur!
			slutBild =40; //en innan siffran här blir sista bilden
			console.log("val 4 valt");
			console.log("knapp 4 startBild= "+startBild+" slutbild= "+slutBild);
			
			//ändra färg på boxen nedan vid click
			
			var c  = document.getElementById("nummerCanvas"); //behövs för anropet av drawBox nedan
			var ctx=c.getContext("2d");
				if(farg_toggle_val4==0){
					
					reset_farg_spann_knappar(); //alla knappar sätt i oklickad färg sen ändras denna knapp till grey, dvs klickad
					
					drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+200, 162,100,"grey","20-39","42px Calibri","white","nummerCanvas"); //färg vid click
					farg_toggle_val4=1;
					console.log("farg_toggle_val4 "+ farg_toggle_val4)
					}
					else{
					//ctx.clearRect(30,c.heigth*0.3,50,50);
					drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+200, 162,100,"white","20-39","42px Calibri","black","nummerCanvas"); //färg vid click
					farg_toggle_val4=0;
					console.log("else i toggle värde val4 "+farg_toggle_val4);
					}
			//slut färgtoggling värdet ska sättas en gång baserat på alla knappars state
			
			}
		if (val=="5"){
			startBild = 40; //en lägre än numret blir första bilden - globala variabler, måste var jämnt annars fuckar det ur!
			slutBild =60; //en innan siffran här blir sista bilden
			console.log("val 5 valt");
			console.log("knapp 5 startBild= "+startBild+" slutbild= "+slutBild);
			
			//ändra färg på boxen nedan vid click
			
			var c  = document.getElementById("nummerCanvas"); //behövs för anropet av drawBox nedan
			var ctx=c.getContext("2d");
				if(farg_toggle_val5==0){
					
					reset_farg_spann_knappar(); //alla knappar sätt i oklickad färg sen ändras denna knapp till grey, dvs klickad
					
					drawBox(c.width/2-c.width*0.7/2+404,c.height*0.3+200, 162,100,"grey","40-59","42px Calibri","white","nummerCanvas"); //färg vid click
					farg_toggle_val5=1;
					console.log("farg_toggle_val5 "+ farg_toggle_val5)
					}
					else{
					//ctx.clearRect(30,c.heigth*0.3,50,50);
					drawBox(c.width/2-c.width*0.7/2+404,c.height*0.3+200, 162,100,"white","40-59","42px Calibri","black","nummerCanvas"); //färg vid click
					farg_toggle_val5=0;
					console.log("else i toggle värde val5 "+farg_toggle_val5);
					}
			//slut färgtoggling värdet ska sättas en gång baserat på alla knappars state
			
			}
		if (val=="6"){
			startBild = 60; //en lägre än numret blir första bilden - globala variabler, måste var jämnt annars fuckar det ur!
			slutBild =80; //en innan siffran här blir sista bilden
			console.log("val 6 valt");
			console.log("knapp 6 startBild= "+startBild+" slutbild= "+slutBild);
			
			//ändra färg på boxen nedan vid click
			
			var c  = document.getElementById("nummerCanvas"); //behövs för anropet av drawBox nedan
			var ctx=c.getContext("2d");
				if(farg_toggle_val6==0){
					
					reset_farg_spann_knappar(); //alla knappar sätt i oklickad färg sen ändras denna knapp till grey, dvs klickad
					
					drawBox(c.width/2-c.width*0.7/2+606,c.height*0.3+200, 162,100,"grey","60-79","42px Calibri","white","nummerCanvas"); //färg vid click
					farg_toggle_val6=1;
					console.log("farg_toggle_val6 "+ farg_toggle_val6)
					}
					else{
					//ctx.clearRect(30,c.heigth*0.3,50,50);
					drawBox(c.width/2-c.width*0.7/2+606,c.height*0.3+200, 162,100,"white","60-79","42px Calibri","black","nummerCanvas"); //färg vid click
					farg_toggle_val6=0;
					console.log("else i toggle värde val6 "+farg_toggle_val6);
					}
			//slut färgtoggling värdet ska sättas en gång baserat på alla knappars state
			
			}
		if (val=="7"){
			startBild = 80; //en lägre än numret blir första bilden - globala variabler, måste var jämnt annars fuckar det ur!
			slutBild =101; //en innan siffran här blir sista bilden
			console.log("val 7 valt");
			console.log("knapp 7 startBild= "+startBild+" slutbild= "+slutBild);
			
			//ändra färg på boxen nedan vid click
			
			var c  = document.getElementById("nummerCanvas"); //behövs för anropet av drawBox nedan
			var ctx=c.getContext("2d");
				if(farg_toggle_val7==0){
					
					reset_farg_spann_knappar(); //alla knappar sätt i oklickad färg sen ändras denna knapp till grey, dvs klickad
					
					drawBox(c.width/2-c.width*0.7/2,c.height*0.3+320, 162,100,"grey","80-100","42px Calibri","white","nummerCanvas"); //färg vid click
					farg_toggle_val7=1;
					console.log("farg_toggle_val7 "+ farg_toggle_val6)
					}
					else{
					//ctx.clearRect(30,c.heigth*0.3,50,50);
					drawBox(c.width/2-c.width*0.7/2,c.height*0.3+320, 162,100,"white","80-100","42px Calibri","black","nummerCanvas"); //färg vid click
					farg_toggle_val7=0;
					console.log("else i toggle värde val7 "+farg_toggle_val7);
					}
			//slut färgtoggling värdet ska sättas en gång baserat på alla knappars state
			
			}
			
		if (val=="8"){ //alla bilder
			startBild = 0; //en lägre än numret blir första bilden - globala variabler, måste var jämnt annars fuckar det ur!
			slutBild =101; //en innan siffran här blir sista bilden
			console.log("val 8 valt");
			console.log("knapp 8 startBild= "+startBild+" slutbild= "+slutBild);
			
						//ändra färg på boxen nedan vid click
			
			var c  = document.getElementById("nummerCanvas"); //behövs för anropet av drawBox nedan
			var ctx=c.getContext("2d");
				if(farg_toggle_val8==0){
					
					reset_farg_spann_knappar(); //alla knappar sätt i oklickad färg sen ändras denna knapp till grey, dvs klickad
					
					drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+320, 162,100,"grey"," ALLA","42px Calibri","white","nummerCanvas"); //färg vid click
					farg_toggle_val8=1;
					console.log("farg_toggle_val8 "+ farg_toggle_val8)
					}
					else{
					//ctx.clearRect(30,c.heigth*0.3,50,50);
					drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+320, 162,100,"white"," ALLA","42px Calibri","black","nummerCanvas"); //färg vid click
					farg_toggle_val8=0;
					console.log("else i toggle värde val8 "+farg_toggle_val8);
					}
			//slut färgtoggling värdet ska sättas en gång baserat på alla knappars state
			
			}

function reset_farg_spann_knappar(){
			//sätter status och färger till färgen när knappen inte är klickad, anv för att nollställa knappar när en ny knapp klickas
								
			drawBox(c.width/2-c.width*0.7/2,c.height*0.3+200, 162,100,"white","0-19","42px Calibri","#00001F","nummerCanvas");
			drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+200, 162,100,"white","20-39","42px Calibri","#00001F","nummerCanvas");
			drawBox(c.width/2-c.width*0.7/2+404,c.height*0.3+200, 162,100,"white","40-59","42px Calibri","#00001F","nummerCanvas");
			drawBox(c.width/2-c.width*0.7/2+606,c.height*0.3+200, 162,100,"white","60-79","42px Calibri","#00001F","nummerCanvas");
			drawBox(c.width/2-c.width*0.7/2,c.height*0.3+320, 162,100,"white","80-100","42px Calibri","#00001F","nummerCanvas");
			drawBox(c.width/2-c.width*0.7/2+202,c.height*0.3+320, 162,100,"white","ALLA","42px Calibri","#00001F","nummerCanvas");
		
			
			
			farg_toggle_val3=0;
			farg_toggle_val4=0;
			farg_toggle_val5=0;
			farg_toggle_val6=0;
			farg_toggle_val7=0;
			farg_toggle_val8=0;
			
			}			

		//lägg in dom val som inte ska ta bort event2
		/*
		if (val!="3"){	//tar bort events när man trycker på knapp som visar ny skärm, ej vid spann-knappar
		console.log("events2 unload clickC 104 - val!=3")
		removeEvents2(); //tar bort event som gör click i rutan actions, utan denna removal så visas inte bilderna!! events läggs till när clickCanvas körs igen.
		}
		*/
}

function drawBox(x_start,y_start,bredd,hojd,box_color,box_text,textFont,textFarg,canvas_id){
	var c=document.getElementById(canvas_id);
	var ctx=c.getContext("2d");
	ctx.fillStyle = box_color;
	ctx.fillRect(x_start,y_start,bredd,hojd);
	ctx.fillStyle = textFarg;
	ctx.font = textFont;
	ctx.fillText(box_text,x_start+0.1*bredd,y_start+hojd/2+8);
}
	
	//nedan lägger till koordinater för 2 rutor, lägg till fler om fler rutor behövs. OBS! se till att clickArea-koordinaterna är samma
	//som där knapparna ritas, rad 32 ovan, drawBox-anropen.
	function mouseUp2(event) {
		
		var x = event.clientX;
		console.log("mouseUp X: "+x)
		var c=document.getElementById("nummerCanvas"); 
		clickArea(c.width/2-c.width*0.7/2,c.height*0.3, c.width*0.7+50,150,"1");
		
		
		
		//clickArea(c.width/2-c.width*0.7/2,c.height*0.4+120, c.width*0.5,100,"2");
		clickArea(c.width/2-c.width*0.7/2,c.height*0.3+200, 162,100,"3"); //för lila knappen för spann 1
		clickArea(c.width/2-c.width*0.7/2+202,c.height*0.3+200, 162,100,"4"); //för lila knappen för spann 1
		clickArea(c.width/2-c.width*0.7/2+404,c.height*0.3+200, 162,100,"5"); //för lila knappen för spann 1
		clickArea(c.width/2-c.width*0.7/2+606,c.height*0.3+200, 162,100,"6"); //för lila knappen för spann 1
		clickArea(c.width/2-c.width*0.7/2,c.height*0.3+320, 162,100,"7"); //för lila knappen för spann 1
		clickArea(c.width/2-c.width*0.7/2+202,c.height*0.3+320, 162,100,"8"); //för lila knappen för spann 1 knappen för alla bilder
		
	}