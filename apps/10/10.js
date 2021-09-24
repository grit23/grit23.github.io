//10-övergångsscriptet

function init(){

//det gör att ekvationen och input-fältet syns, inte täcks av tangentbordet på iphone.
//ipad mini 1024x768
//iphone 5 568x320
//detta funkar tillsammans med scroll down rad 99
if(screen.height<800){
	document.getElementById("mainsection").style.height="150px";
	document.getElementById("inputarea").style.height="150px";
	console.log("Iphone "+window.innerHeight);
	console.log("Iphone mainsection height"+document.getElementById("mainsection").style.height);	
}
/*
else{
	document.getElementById("mainsection").style.height="350px";
	document.getElementById("inputarea").style.height="80px";
	console.log("Ipad mainsection height "+document.getElementById("mainsection").style.height);
	//document.getElementById("mainsection").style.height="350px";
	}
*/
stateStart();
//i=0; //Används till index för array där svaren sparas i function visaSvar

}



//States - olika skärmar
function stateStart(){ //name i radio button ska vara samma annars kan man välja flera


//lägger till multiplikationsgenväg
var stateStartHTML='<a href="../index.html"><table><tr><td>Meny<span style="font-size:30px"> &#8680</span></td></tr></table><br><br></a>';
//slut multiplikationsgenväg

if(screen.height<800){
	stateStartHTML+='<h4>10-tals&#246;verg&#229;ng</h4>'; //iphone view
	}
else{
	stateStartHTML+='<h1>10-tals&#246;verg&#229;ng</h1>'; //ipad mini
	}






stateStartHTML+='<form><p id="radiotext">Bara plus <input type="radio" id="baraPlus" name="samma" checked></p>';	
stateStartHTML+='<p id="radiotext">Bara minus <input type="radio" id="baraMinus" name="samma" ></p>';
//stateStartHTML+='<p id="radiotext">B&#229;de plus och minus <input type="radio" id="plusOchMinus" name="samma"></p>';
stateStartHTML+="<br><input type='button' id='knappen' value='Starta' id='svarsknapp' onclick='Starta()'>";
stateStartHTML+='</form>';
//ovan triggas Starta() när man trycker på knappen som ritas upp ovan.	
document.getElementById("mainsection").innerHTML=stateStartHTML;



}

function Starta(){

	t1_G= new Date().getTime();	
	console.log("t1 "+t1_G)
	//if (document.getElementById("plusOchMinus").checked)
	//{val_G="plusminus";}
	if (document.getElementById("baraPlus").checked)
	{val_G="plus";}
	if (document.getElementById("baraMinus").checked)
	{val_G="minus";}	
	
	console.log("radiobutton "+val_G);
	
	visaEkvation(val_G);


}

function visaEkvation(radioButtonVal){
	window.scrollBy(0,-200); //SCROLLAR upp eftersom annars syns inte övre del när man kör försök igen.
	if (radioButtonVal=="plus")
		{
		//BARA PLUS
		tal1_G=Math.floor((Math.random() * 9) + 1);
		//console.log("bara plus "+radioButtonVal);
		//nedan - ex tal1=1 ger tal2=0 + 10, 6 ger tal2=från 5 mellan och fem st dvs till 10
		tal2_G=Math.floor((Math.random() * (tal1_G-1)) + 11-tal1_G); //större tal än tal1 så att svaret blir över 10
		//SLUT BARA PLUS
		ekvation_G=tal1_G+" + "+tal2_G;
		//nedan ritar upp ekvationen men inte svaret
		stateSvara(ekvation_G,"");
		stateSkrivSvar();
		}
	if(radioButtonVal=="minus"){
		//BARA MINUS
		console.log("minus!");
		tal1_G=Math.floor((Math.random() * 8) + 11); //ska ge tal mellan 10 och 19
		//console.log("tal1 "+tal1_G);
		//nedan - ex tal1=1 ger tal2=0 + 10, 6 ger tal2=från 5 mellan och fem st dvs till 10
		tal2_G=Math.floor((Math.random() * (9)) + tal1_G-10+1); //större tal än tal1 så att svaret blir över 10
		
		ekvation_G=tal1_G+" - "+tal2_G;
		//nedan ritar upp ekvationen men inte svaret
		stateSvara(ekvation_G,"");
		stateSkrivSvar();

	}
	//else{alert("Det valet funkar inte");} //finns ifall man lägger till fler radio buttons med val
	}

function stateSkrivSvar(radioButtonVarde){
//inputen här är minus, plus, eller plusminus. Detta avgöra om ekvationerna innehåller dessa.

//START ritar upp svarsfältet
svarsFaltetHTML='<center><form>'; 
svarsFaltetHTML+='<input type="number" min="0" inputmode="numeric" pattern="[0-9]*" id="svaret" maxlength="2" autofocus></form></center>';
document.getElementById("inputarea").innerHTML=svarsFaltetHTML;
//SLUT ritar upp svarsfältet
document.getElementById("svaret").focus(); //sätter fokus på input-fältet efter man svarat
//ev if-sats för screen.height så det bara scrollar på iphone, verkar inte behövas 
//window.scrollBy(0,-400); //scrollar uppåt så input-fältet syns SCROLL UPP DVS MINUSVÄRDE

//EVENT!!!!
document.getElementById("svaret").addEventListener("input", visaSvar); //event input är samma som oninput, bättre än keyup med html5
}
function visaSvar(){
	svar_G=document.getElementById("svaret").value;
	if(val_G=="plus"){
		rattSvar_G=tal1_G+tal2_G;
		rattSvar_string=rattSvar_G.toString().length;
	}
	else{
		if(val_G=="minus"){
		rattSvar_G=tal1_G-tal2_G;
		rattSvar_string=rattSvar_G.toString().length;
		}
	}
	
	//Ljud för rätt och fel
	if (svar_G.length==rattSvar_string){ //stod 2 här förut men nu funkar för olika antal siffror, length funkar för string
		
		if (svar_G==rattSvar_G)
			{rattSvarat=1;
			var spelaRattLjud=document.getElementById("rattLjud");
			spelaRattLjud.play();
			}
		else{
			rattSvarat=0;
			rattSvarForstaForsok_G=0;
			var spelaFelLjud=document.getElementById("felLjud");
			spelaFelLjud.play();
		}
		
		console.log("i= "+i+" rattSvarat= "+rattSvarat);//funkar den räknar upp
	//ÄNDRINGAR FÖR ATT VISA SAMMA EKVATION IGEN OM SVARET VAR FEL
		
				
		if (rattSvarat==1){ //RITAR UPP NY EKVATION MED NYA TAL
		svarsMatris_G[i]=[ekvation_G,svar_G,rattSvar_G,rattSvarat*rattSvarForstaForsok_G]; //sätter sista variablen till 0 om första försöket var fel.
		rattSvarForstaForsok_G=1; //nollställer så att nästa försök kan räknas som rätt på första försök
		visaEkvation(val_G); //fixa här så ny svar inte visas utan först ny ekvation!!!!!!!!!!!
		svar_G=""; //detta rensar svar så att ny ekvationen inte har svar efter lika med tecknet
		document.getElementById("svaret").focus(); //sätter fokus på input-fältet efter man svarat

		i++;
		}
		//i++; //SKA BARA RÄKNA UPP OM SVARET VAR RÄTT, DVS rattSvarat=1 ANNARS VISA SAMMA EKVATION IGEN
		//console.log("array "+svarsMatris_G[i][0]);
		else {  //OM FEL SVAR
			if(val_G=="plus"){
				ekvation_G=tal1_G+" + "+tal2_G; //SAMMA TAL IGEN EFTERSOM SVAR VAR FEL GÖR FÖR MINUS OCKSÅ
				//nedan ritar upp ekvationen men inte svaret
				stateSvara(ekvation_G,"");
				svar_G="";
				stateSkrivSvar(); //I DENNA FINNS EVENTET SOM LÄSER AV INPUT, SVARET OCH LAUNCHAR visaSvar igen alltså startar om denna funktion tills svaret är rätt.
			}
			else{
				ekvation_G=tal1_G+" - "+tal2_G; //SAMMA TAL IGEN EFTERSOM SVAR VAR FEL GÖR FÖR MINUS OCKSÅ
				//nedan ritar upp ekvationen men inte svaret
				stateSvara(ekvation_G,"");
				svar_G="";
				stateSkrivSvar(); //I DENNA FINNS EVENTET SOM LÄSER AV INPUT, SVARET OCH LAUNCHAR visaSvar igen alltså startar om denna funktion tills svaret är rätt.
			}
		
		
		}
	

	
	}
	
	
	if(i>4) //Antal ekvationer som ska visas 10 st sätt värdet 9
		{
		t2_G= new Date().getTime();
		console.log("t2 "+t2_G);	
		var tidSvar=t2_G-t1_G;	
		i=0;
		visaResultat(tidSvar);
		}

}
//document.getElementById("svaret").addEventListener("keyup", visaEkvation(radiobuttonVarde)); //event input är samma som oninput, bättre än keyup med html5

function stateSvara(ekvation,svar){
var stateSvaraHTML="";


if(rattSvarForstaForsok_G==1) {
	stateSvaraHTML+="<br><br><br><br>"; //flyttar ner texten några rader obs ändra i funktionen visaEkvation rad 135 rad 180 också
	stateSvaraHTML+="<p>";
	stateSvaraHTML+=ekvation+" = "+svar;
	stateSvaraHTML+="</p>";
	document.getElementById("mainsection").innerHTML=stateSvaraHTML;
}
else{  //(nedan rätt anv ''  -  visar orange och feltext när man svarar fel.
	stateSvaraHTML+='<p>F&#246;rs&#246;k igen!</p>'; //flyttar ner texten några rader obs ändra i funktionen visaEkvation rad 135 rad 180 också
	stateSvaraHTML+='<p class="orange_feltext">';   // ekvationen blir orange om man svarar fel.
	stateSvaraHTML+=ekvation+" = "+svar;
	stateSvaraHTML+="</p>";
	document.getElementById("mainsection").innerHTML=stateSvaraHTML;

}



	//window.scrollBy(0,-500); //SCROLLA

}

function visaResultat(tiden){ //visa hur man svarat, röd text vid fel, grön vid rätt, antal stjärnor räkan tiden
console.log("visaResultat aktiverad");
document.getElementById("svaret").removeEventListener("input", visaSvar); //EVENT BORTA
document.getElementById("inputarea").innerHTML=""; //tar bort svarsfältet när resultatet visas
var resultatText="";

//INGÅR I MATRISEN: svarsMatris_G[i]=[ekvation_G,svar_G,rattSvar_G,rattSvarat*rattSvarForstaForsok];
var antalRatt=0;
for(k=0; k<5; k++){  //k<5 är för 5 frågor 
//Visar svaren en if-sats per ekvation - grön om rätt röd om fel
	if(svarsMatris_G[k][3]==0){
		resultatText+='<h3 class="orange">';//h2 röd text h3 grön text h5 orange
		resultatText+=svarsMatris_G[k][0]+" = "+svarsMatris_G[k][1];
		resultatText+=" !"; //text vid resultat för svar som inte var rätt direkt
		resultatText+="</h3>";
		}
		
	else{ //vid rätt svar
		resultatText+="<h3>";//h2 röd text h3 grön text h5 är orange
		resultatText+=svarsMatris_G[k][0]+" = "+svarsMatris_G[k][1];
		resultatText+="</h3>";
		antalRatt=antalRatt+1; //räknar rätt svar
		console.log("antalRatt "+antalRatt);
		}
}

tiden=(tiden/1000); //från milli till sekunder
tiden=tiden.toFixed(0);
resultatText+="<h4>";
resultatText+="<BR>Det tog "+tiden+" sekunder  -  ";
//resultatText+="</h4>";

resultatText+=antalRatt+" r&#228;tt av 5 p&#229; f&#246;rsta f&#246;rs&#246;ket.";
resultatText+="</h4>";

//räkna antal rätt, lägg till knapp för starta igen, lägg till tiden, stjärnor
//en stjärna 2 grå
if(antalRatt>1 && antalRatt<=2){ //1 stjärna
	resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
	resultatText+="      ";
	resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
	resultatText+="      ";
	resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
	//resultatText+="<h4> F&#246;r att f&#229; 2 stj&#228;rnor beh&#246;ver du ha minst 5 r&#228;tt.</h4>";
	}
else{
	if(antalRatt>2 && antalRatt<=4){ //2 stjärnor
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
		//resultatText+="<h4> F&#246;r att f&#229; 3 stj&#228;rnor beh&#246;ver du ha minst 9 r&#228;tt och vara snabbare &#228;n 40 sekunder!</h4>";
		}
	else{
		if(antalRatt>4 && tiden<40){ //3 stjärnor
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="<h4> Fantastiskt! Nu kan du detta j&#228;ttebra!</h4>";
		}
		else{
			if(antalRatt>4 && tiden>=40){ //2 stjärnor om man har många rätt men är för långsam
			resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
			resultatText+="      ";
			resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
			resultatText+="      ";
			resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
			//resultatText+="<h4> F&#246;r att f&#229; 3 stj&#228;rnor beh&#246;ver du ha minst 9 r&#228;tt och vara snabbare &#228;n 40 sekunder!</h4>";
			}
			else{ //0 stjärnor
				resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
				resultatText+="      ";
				resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
				resultatText+="      ";
				resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
				//resultatText+="<h4> F&#246;r att f&#229; 1 stj&#228;rna beh&#246;ver du ha minst 3 r&#228;tt.</h4>";
			}
			}
		}
	}

//resultatText+='<a id="botten"><a/>';
resultatText+="<br><br><input id='knappen' type='button' value='Igen!' id='svarsknapp2' onclick='StartaOmIgen()'>";
resultatText+="  <input id='knappen2' type='button' value='Menyn' id='svarsknapp' onclick='init()'>";

document.getElementById("mainsection").innerHTML=resultatText;

}
function Scrolla(xx,yy){ //positiva nummer = scrollar neråt.
//	window.scrollBy(xx,yy);
	document.getElementById("knappen").focus(); //sätter fokus på en knapp så det ska scrolla ner till knapparna på iphone.
	console.log("scrollat "+pageYOffset)
}
function StartaOmIgen(){
	t1_G= new Date().getTime();	
	console.log("t1 "+t1_G)
	visaEkvation(val_G);
	/*
	var spelaRattLjud=document.getElementById("rattLjud");
	spelaRattLjud.play();
	*/
}