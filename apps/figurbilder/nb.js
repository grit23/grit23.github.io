

function init(){
	enGang=1;
	if(laddat_bildbank==0){
		preLoadImages();
		laddat_bildbank=1;
	}
	
	console.log("Init started");
	var c = document.getElementById("nummerCanvas");
	var ctx = c.getContext("2d");
	
	c.width  = window.innerWidth;
	c.height = window.innerHeight;

	
	//ctx.fillStyle = "red"; // denna rad gör inget för bakgrunden sätts i clickCanvas senare
	//ctx.fillRect(0,0,c.width,c.height);
	//ctx.fillStyle = "black"; //set color for next item
	//ctx.font = "bold 50px Calibri";
	//ctx.textAlign='center';
	RemoveEvents();
	clickCanvas();
	//events();
} //slut init

function preLoadImages(){
	//Laddar bilderna först här i globala array bildbank def i nb_global.js
	//funkar det här ska alla hundra bilderna laddas om det inte blir för långsamt
	//royalty free pics http://www.clker.com/clipart-4597.html

	for(i=0;i<101;i++){
		bildBank[i] = new Image();
		var kalla = "nb_bilder/"+i+".png";
		console.log("Bildbank part 1 bild "+i);
		//.addEventListener("load",function(){
		//console.log("bildbank"+i+" "+bildBank[i].complete);
		bildBank[i].src = kalla;
		};
}


function events(){
	console.log("events go!!!!!!!!!!!!!!!!!");
	var c = document.getElementById("nummerCanvas");
	c.addEventListener("mouseup", mouseUp, false);
 // c.addEventListener("mousemove", mouseXY, false);
 // c.addEventListener("touchstart", touchDown, false);
 // c.addEventListener("touchmove", touchXY, true);
 	c.addEventListener("touchend", mouseUp, false);
	}
	
function RemoveEvents(){
	console.log("Removed events");
	var c = document.getElementById("nummerCanvas");
	c.removeEventListener("mouseup", mouseUp, false);
 // c.removeEventListener("mousemove", mouseXY, false);
 // c.removeEventListener("touchstart", touchDown, false);
 // c.removeEventListener("touchmove", touchXY, true);
 	c.removeEventListener("touchend", mouseUp, false);
	}

function mouseUp(){
	console.log("mouseUp accessed");
	//alert("mouse down!");
	//console.log(event); //this shows list of all events status
	console.log(event.type);
	if (event.type=="touchend")
		{
		event.preventDefault(); //detta gör att mouseup-events inte triggas om touchend görs
		}
	
	var c=document.getElementById("nummerCanvas");
	var ctx = c.getContext("2d");
	//c.width  = window.innerWidth;
	//c.height = window.innerHeight;
	ctx.clearRect(0,0,c.width,c.height);
	ctx.fillStyle="white"; //sätter färgen på över delen av skärmen när siffror och bilder visas
	ctx.fillRect(0,0,c.height,c.width);
	//här kallas draw från ClickVal i clickCanvas.js - detta startar bildvisningen************************
	//draw(clickNumber,sifferNummer,1,8,"ja"); 
	console.log("clicknummer - startBild i mouseup"+startBild)
	//nedan ersätts av lila knappen för spann
	if(enGang==1){ //körs en gång, sen uppdateras sifferNummer och clickNummer i draw(), sätt till 1 i init igen.
		//startBild=3; //DENNA SKA OCKSÅ SÄTTAS I ANROPET SE RAD 64
		clickNumber=startBild;
		sifferNummer=startBild;
		//slutBild=7
		enGang=0; //måste ändras kommer inte funka om man kör programmet 2 ggr utan omladdning
	}
	
	console.log("i mouseUpstartBild= "+startBild+" slutBild= "+slutBild);
	draw(clickNumber,sifferNummer,startBild,slutBild,"ja"); //2,8 HÄR SKA SÄTTAS I ANROPET, DVS STARTBILD SLUTBILD SÄTTS VIA KNAPPAR PÅ STARTSIDAN.
	//slutbild=5 betyder att bild 4 är den sista som visas.
	//console.log("after draw()");
	}

function touchUp(){ //denna får anropa mouseup oxå, gör det i event istället!!
	console.log("touchUp accessed");
	//mouseUp();
	}


function intervallText(){
//skriver en text bara
		var c = document.getElementById("nummerCanvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle = "#3b5998";
		ctx.fillRect(10,10,c.width-20,c.height-20);
		//ctx.fillStyle = "red"; //set color for next item
		ctx.font = "bold 80px Calibri";
		ctx.fillStyle = "white";
		ctx.fillText("All right, igen!",c.width/3,c.height*0.5,c.width*0.9);
		}
		
function draw(klick,siffra,startBild,slutBild,Slumpa){ //variablen nummer är till för att rätt bild och siffra ska visas på canvas, klick för räkna totala klick
//Viktig - denna funktion visar bilder och text
		console.log("!!clickNummer in i draw: "+klick);
		console.log("!!sifferNummer in i draw: "+sifferNummer);
		var c = document.getElementById("nummerCanvas");
		var ctx = c.getContext("2d");
		//rensa canvas, den inre ramen blir vit
		
		//ctx.fillStyle = "blue";
		//ctx.fillRect(100,100,c.width-200,c.height-200);
		var bildBredd=300; //Används för att få rätt placering och stl på bild och siffra för ipad och iphone, web lokal var
		var bildHojd=300;	//dessa variabler blir ändrade nedan så detta är bara init-värden.
		var bildPosX=c.width/2-100;
		var bildPosY=c.height*0.2;
		var textPosX=c.width/2; //ska sättas så siffran blir centrerad, ta hänsyn till stringlängden - inte löst än!!
		var textPosY=bildBredd+100+c.height*0.2;

		if(c.width>670 && c.height>600){ //sätter storlek på bild och position på siffran beroende på canvas size.
						bildBredd=300;
						bildHojd=300;
						bildPosX=c.width/2-bildBredd/2;
						bildPosY=c.height*0.2;
						textPosX= c.width/2-100; //0 ska bytas mot halva stringlängden för siffra, ej löst än
						textPosY= bildHojd+100+bildPosY+100;
						//c.heigt/2 beror på att bildpositionen sätts så nedan dvs siffra är relativ bildposition
						}
					else{
						bildBredd=200;
						bildHojd=200;
						bildPosX=c.width/2-bildBredd/2;
						bildPosY=c.height*0.2;
						textPosX= c.width/2-100; //0 ska bytas mot halva stringlängden för siffra, ej löst än
						textPosY= bildHojd+42+bildPosY+42;
						console.log("textPosY "+textPosY);
						}

						//orig:    if(sifferNummer<11){			//stoppar vid siffran 10 och börjar om.
		if(sifferNummer<slutBild+1){			//stoppar vid siffran 10 och börjar om. +1 här gör att den visar sista bilden oxå.
					if (klick % 2 ==0){ //modulus är true om numret är jämnt
							//visa siffra
										//nedan if-sats ska visa text och sen börja om igen.
								if(sifferNummer==slutBild){
						
									console.log("intervalltext gosub");
									intervallText(); //visar skärm efter sista bilden, sen startmenyn igen
									clickNumber=clickNumber+1; //global variabel
									sifferNummer++; //global variabel
								}
					
						else{
							//visa siffran
							ctx.fillStyle = "#3b5998"; //färg på inre ram, visas när man bara ser siffran
							ctx.fillRect(10,10,c.width-20,c.height-20); //gör vit ram när bilder visas
							ctx.fillStyle = "white"; //textfärg
							ctx.font = "bold 60px Calibri"; //font när bara siffra visas
							// sista argum är maxplats för text, siffran-1 är för att se varje siffra, varannat click är nummer jämnt och går in i första if (inte else)
							// original: ctx.fillText("Siffra "+siffra, c.width/2, c.height*0.7,c.width*0.9); 
							ctx.fillText("Siffra "+siffra, textPosX, textPosY,c.width*0.9); 
							// orig:   ctx.fillText("Siffra "+siffra, c.width/2, c.height-150); //siffran-1 är för att se varje siffra, varannat click är nummer jämnt och går in i första if (inte else)
							clickNumber=clickNumber+1; //global variabel
							sifferNummer++; //global variabel
						}
					}
				else{
					//visa bild och text
					//nedan sista argumenten tvingar storleken till 300, 300 t ex, skala mot canvas size istället
					//orig:   ctx.drawImage(bildBank[siffra-1],c.width/2-100,c.height*0.2,300,300);//är -1 här eftersom sifferNummer räknas upp i if-satsen vilket motsvarar siffra i anropet
										
					console.log("VISAR BILD bildstl bredd "+bildBredd);
					console.log("bildstl höjd "+bildHojd);
					ctx.drawImage(bildBank[siffra-1],bildPosX,bildPosY,bildBredd,bildHojd);//är -1 här eftersom sifferNummer räknas upp i if-satsen vilket motsvarar siffra i anropet
					//nedan skriver text som säger vad bilden visar
					ctx.save();
					ctx.fillStyle = "#3b5998";
					ctx.font = "bold 60px Calibri" //sätter font på text när bilden visas med förklarande text
					//nedan visar siffran och bildtexten
					ctx.fillText(siffra-1+". "+textBank[siffra-1], textPosX, textPosY,c.width*0.9) //samma pos som siffran i else-ovan rad 141
					//ctx.fillText("Bilden föreställer ", 100, 100,c.width*0.9); 
					ctx.restore(); //återställer fillStyle till det innan den sattes ovan
					//slut text
					clickNumber=clickNumber+1;
					}
		}
		else{
			var c = document.getElementById("nummerCanvas");
			var ctx = c.getContext("2d");
			
			//sifferNummer=0;
			//clickNumber=0;
			init();
			console.log("slutsiffra vid slut av bildvis:"+slutBild+"startBild "+startBild);
			console.log("init triggad från draw() else rad 189");
			//RemoveEvents(); //tar bort events för bildvisningen************************
			//events2(); //laddar events för knappsidan
			}
}
