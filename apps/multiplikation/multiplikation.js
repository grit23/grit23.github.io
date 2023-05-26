//multiplikationsscriptet

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

stateStart();
//i=0; //Används till index för array där svaren sparas i function visaSvar
}


//States - olika skärmar
function stateStart(){ //name i radio button ska vara samma annars kan man välja flera

//lägger till knapp till Menyn
var stateStartHTML='<a href="../index.html"><table><tr><td><span style="font-size:30px"> &#8678 </span> Meny</td></tr></table><br><br></a>';
//slut menyknapp
if(screen.height<800) //iphone får knappar inte radio buttons
	{
	stateStartHTML+='<h4>Multiplikationstabeller</h4>'; //iphone view
	//stateStartHTML+="<br><input type='button' id='nummerKnapp' value='Ettan' onclick='Starta_Iphone(1)>";
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Ettan" onclick="Starta_Iphone(1)">';
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Tv&#229;an" onclick="Starta_Iphone(2)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Trean" onclick="Starta_Iphone(3)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Fyran" onclick="Starta_Iphone(4)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Femman" onclick="Starta_Iphone(5)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Sexan" onclick="Starta_Iphone(6)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Sjuan" onclick="Starta_Iphone(7)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value=" &#197;ttan" onclick="Starta_Iphone(8)">';	
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Nian" onclick="Starta_Iphone(9)">';
	stateStartHTML+='<input type="button" id="nummerKnapp" value="Nian" onclick="Starta_Iphone(10)">';	//ny kod 1
	//stateStartHTML+='<table>';
	//stateStartHTML+='<tr><td>testtext</td></tr>';
	//stateStartHTML+='</table>';
	
	}
else{ //stor skärm får inte radiobuttons heller nu
	
	stateStartHTML+='<h4 class="ipadTitel">Multiplikationstabeller</h4>'; //iphone view
	//stateStartHTML+="<br><input type='button' id='nummerKnapp' value='Ettan' onclick='Starta_Iphone(1)>";
	stateStartHTML+='<br><input type="button" id="nummerKnappIpadVanster" value="Ettan" onclick="Starta_Iphone(1)">';
	stateStartHTML+='<input type="button" id="nummerKnappIpadHoger" value="Tv&#229;an" onclick="Starta_Iphone(2)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadVanster" value="Trean" onclick="Starta_Iphone(3)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadHoger" value="Fyran" onclick="Starta_Iphone(4)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadVanster" value="Femman" onclick="Starta_Iphone(5)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadHoger" value="Sexan" onclick="Starta_Iphone(6)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadVanster" value="Sjuan" onclick="Starta_Iphone(7)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadHoger" value=" &#197;ttan" onclick="Starta_Iphone(8)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadVanster" value="Nian" onclick="Starta_Iphone(9)">';	
	stateStartHTML+='<input type="button" id="nummerKnappIpadHoger" value="Tian" onclick="Starta_Iphone(9)">'; //ny kod 1
	//stateStartHTML+='<table>';
	//stateStartHTML+='<tr><td>testtext</td></tr>';
	//stateStartHTML+='</table>';
	
	}
	/* ORIGNAL FÖR IPAD
	stateStartHTML+="<h1>Multiplikationstabeller</h1>"; //ipad mini
	
	stateStartHTML+='<form><p id="radiotext">1<input type="radio" id="ett" name="samma" checked>4<input type="radio" id="fyra" name="samma">7<input type="radio" id="sju" name="samma">'
	stateStartHTML+='<form><p id="radiotext">2<input type="radio" id="tva" name="samma" >5<input type="radio" id="fem" name="samma">8<input type="radio" id="atta" name="samma">'
	stateStartHTML+='<form><p id="radiotext">3<input type="radio" id="tre" name="samma" >6<input type="radio" id="sex" name="samma">9<input type="radio" id="nio" name="samma">'
	stateStartHTML+='</p>';	
	stateStartHTML+="<br><input type='button' id='knappen' value='Starta' id='svarsknapp' onclick='Starta()'>";
	stateStartHTML+='</form>';
	//ovan triggas Starta() när man trycker på knappen som ritas upp ovan.	
	//document.getElementById("mainsection").innerHTML=stateStartHTML;
	stateStartHTML+="<br><input type='button' id='knappen' value='Starta' onclick='Starta()'>";
	stateStartHTML+='</form>';
	}
ORIGINAL FÖR IPAD SLUT


stateStartHTML+='<form><p id="radiotext">1<input type="radio" id="ett" name="samma" checked>4<input type="radio" id="fyra" name="samma">7<input type="radio" id="sju" name="samma">'
stateStartHTML+='<form><p id="radiotext">2<input type="radio" id="tva" name="samma" >5<input type="radio" id="fem" name="samma">8<input type="radio" id="atta" name="samma">'
stateStartHTML+='<form><p id="radiotext">3<input type="radio" id="tre" name="samma" >6<input type="radio" id="sex" name="samma">9<input type="radio" id="nio" name="samma">'
stateStartHTML+='</p>';	
*/
//stateStartHTML+="<br><input type='button' id='knappen' value='Starta' id='svarsknapp' onclick='Starta()'>";
//stateStartHTML+='</form>';
//ovan triggas Starta() när man trycker på knappen som ritas upp ovan.	
document.getElementById("mainsection").innerHTML=stateStartHTML;


/* START ORIGNALDEL AV stateStart
if(screen.height<800){
	stateStartHTML+="<h4>Multiplikationstabeller</h4>"; //iphone view
	}
else{
	stateStartHTML+="<h1>Multiplikationstabeller</h1>"; //ipad mini
	}



stateStartHTML+='<form><p id="radiotext">1<input type="radio" id="ett" name="samma" checked>4<input type="radio" id="fyra" name="samma">7<input type="radio" id="sju" name="samma">'
stateStartHTML+='<form><p id="radiotext">2<input type="radio" id="tva" name="samma" >5<input type="radio" id="fem" name="samma">8<input type="radio" id="atta" name="samma">'
stateStartHTML+='<form><p id="radiotext">3<input type="radio" id="tre" name="samma" >6<input type="radio" id="sex" name="samma">9<input type="radio" id="nio" name="samma">'
stateStartHTML+='</p>';	

stateStartHTML+="<br><input type='button' id='knappen' value='Starta' id='svarsknapp' onclick='Starta()'>";
stateStartHTML+='</form>';
//ovan triggas Starta() när man trycker på knappen som ritas upp ovan.	
document.getElementById("mainsection").innerHTML=stateStartHTML;

*/ 
//slut original

}
function Starta_Iphone(tabell){
if (tabell==1){val_MG="ett";}
if (tabell==2){val_MG="tva";}
if (tabell==3){val_MG="tre";}
if (tabell==4){val_MG="fyra";}
if (tabell==5){val_MG="fem";}
if (tabell==6){val_MG="sex";}
if (tabell==7){val_MG="sju";}
if (tabell==8){val_MG="atta";}
if (tabell==9){val_MG="nio";}
if (tabell==10){val_MG="tio";} //ny kod 1
Starta();	
}

function Starta(){ 
	h=0;
	t1_MG= new Date().getTime();	
	console.log("t1 "+t1_MG)
	//if (document.getElementById("plusOchMinus").checked)
	//{val_G="plusminus";}
	
	/* Detta var bara användbart när ipad hade radiobuttons, nu har båda länkar direkt.
	if(screen.height<800){
	//inget val_MG är redan satt i Starta_Iphone()
		}
	else{
		if (document.getElementById("ett").checked)
		{val_MG="ett";}	
		if (document.getElementById("tva").checked)
		{val_MG="tva";}
		if (document.getElementById("tre").checked)
		{val_MG="tre";}		
		if (document.getElementById("fyra").checked)
		{val_MG="fyra";}
		if (document.getElementById("fem").checked)
		{val_MG="fem";}
		if (document.getElementById("sex").checked)
		{val_MG="sex";}
		if (document.getElementById("sju").checked)
		{val_MG="sju";}
		if (document.getElementById("atta").checked)
		{val_MG="atta";}
		if (document.getElementById("nio").checked)
		{val_MG="nio";}			
		}
	*/
	slumpTal=Math.floor((Math.random() * 15) + 1);	//för att välja array med tal en gång per omgång.

	console.log("radiobutton multi "+val_MG);
	
	visaEkvation(val_MG);

//BÖRJA HÄR NU.

}

function visaEkvation(radioButtonVal){
	
	//var slumpTal= Math.floor(Math.random()*9+1);
	//tabell01_MG=[];
	var tabell=1;	
	//console.log("slumptal "+k+" varde "+slumpVector_MG[k]);
	
	
		//SlumpVector_MG[i]=Math.floor(Math.random()*9+1)
		//console.log("i= "+i);
		//console.log("slumptal "+ i+" värde "+slumpVector_MG[i]);
		
	console.log("RADIO: "+radioButtonVal);
	switch(radioButtonVal){
		case "ett":
			tabell=1;
//			slumpTal=Math.floor((Math.random() * 15) + 1);
			break;
		case "tva":
			tabell=2;
//			slumpTal=Math.floor((Math.random() * 15) + 1);
			break;
		case "tre":
			tabell=3;
//			slumpTal=Math.floor((Math.random() * 15) + 1);
			break;	
		case "fyra":
			tabell=4;
//			slumpTal=Math.floor((Math.random() * 15) + 1);
			break;
		case "fem":
			tabell=5;
//			slumpTal=Math.floor((Math.random() * 15) + 1);
			break;
		case "sex":
			tabell=6;
//			slumpTal=Math.floor((Math.random() * 15) + 1);
			break;
		case "sju":
			tabell=7;
//			slumpTal=Math.floor((Math.random() * 15) + 1);		
			break;
		case "atta":
			tabell=8;
//			slumpTal=Math.floor((Math.random() * 15) + 1);		
			break;
		case "nio":
			tabell=9;
//			slumpTal=Math.floor((Math.random() * 15) + 1);			
			break;
		case "tio":
			tabell=10;
//			slumpTal=Math.floor((Math.random() * 15) + 1);			
			break;
		default:
			tabell=4;
//			slumpTal=Math.floor((Math.random() * 15) + 1);	
	}
	switch(slumpTal){
		case 1:
			serie=serie1_MG;
			break;
		case 2:
			serie=serie2_MG;
			break;
		case 3:
			serie=serie3_MG;
			break;
		case 4:
			serie=serie4_MG;
			break;
		case 5:
			serie=serie5_MG;
			break;			
		case 6:
			serie=serie6_MG;
			break;
		case 7:
			serie=serie7_MG;
			break;
		case 8:
			serie=serie8_MG;
			break;
		case 9:
			serie=serie9_MG;
			break;
		case 10:
			serie=serie10_MG;
			break;
		case 11:
			serie=serie11_MG;
			break;
		case 12:
			serie=serie12_MG;
			break;
		case 13:
			serie=serie13_MG;
			break;
		case 14:
			serie=serie14_MG;
			break;
		case 15:
			serie=serie15_MG;
			break;
		default:
			serie=serie3_MG;
			break;
	}	
			
	tal1_MG=tabell;
	//var slumpTal=Math.floor((Math.random() * 15) + 1);
	//var serieTemp="serie"+slumpTal+"_MG";
	
	tal2_MG=serie[h];//ska var slinga i ....***********NÖSTA
	console.log("h "+h);
	h++;
	console.log("serie "+serie[h])
	console.log("slumptal "+slumpTal);
	
		ekvation_MG=tal1_MG+" &middot; "+tal2_MG; //middot är ascii 183, ändra på rad 299 också.
		//nedan ritar upp ekvationen men inte svaret
		stateSvara(ekvation_MG,"");
		stateSkrivSvar();
	
	}

function stateSkrivSvar(radioButtonVarde){
//inputen här är minus, plus, eller plusminus. Detta avgöra om ekvationerna innehåller dessa.
//alert("ta fram uppgift/ekvation baserat på radiobuttons, algoritm för att ge 10-övergångsscriptet");

//START ritar upp svarsfältet
svarsFaltetHTML='<center><form>'; 
svarsFaltetHTML+='<input type="number" min="0" inputmode="numeric" pattern="[0-9]*" id="svaret" maxlength="2" autofocus></form></center>';
document.getElementById("inputarea").innerHTML=svarsFaltetHTML;
//SLUT ritar upp svarsfältet
document.getElementById("svaret").focus(); //sätter fokus på input-fältet efter man svarat
//ev if-sats för screen.height så det bara scrollar på iphone, verkar inte behövas 


//EVENT!!!!
document.getElementById("svaret").addEventListener("input", visaSvar); //event input är samma som oninput, bättre än keyup med html5
}

//visaEkvation(radioButtonVarde);

function visaSvar(){
	/* DETTA ÄR ORIGINAL NEDAN NYA FRÅN PLUSVERSIONEN MED GÖRA OM FEL SVAR
	svar_MG=document.getElementById("svaret").value;
	rattSvar_MG=tal1_MG*tal2_MG;
	rattSvar_string=rattSvar_MG.toString().length;
		
	if (svar_MG.length==rattSvar_string){ //stod 2 här förut men nu funkar för olika antal siffror, length funkar för string
		
		if (svar_MG==rattSvar_MG)
			{rattSvarat=1;}
		else{rattSvarat=0;}
		
		console.log("i= "+i);//funkar den räknar upp
		svarsMatris_MG[i]=[ekvation_MG,svar_MG,rattSvar_MG,rattSvarat];
		i++;
		//console.log("array "+svarsMatris_G[i][0]);
		visaEkvation(val_MG); //fixa här så ny svar inte visas utan först ny ekvation!!!!!!!!!!!
		svar_MG=""; //detta rensar svar så att ny ekvationen inte har svar efter lika med tecknet
		document.getElementById("svaret").focus(); //sätter fokus på input-fältet efter man svarat
	
	}
	
		document.getElementById("mainsection").innerHTML="<br><br><br><br><p>"+tal1_MG+" &middot; "+tal2_MG+" = "+svar_MG+"</p>"; //ändra också StateSvara rad162
	
	*/ //SLUT PÅ ORIGINAL
	
//NYTT FRÅN PLUSVERSIONEN

	svar_MG=document.getElementById("svaret").value;
	rattSvar_MG=tal1_MG*tal2_MG;
	rattSvar_string=rattSvar_MG.toString().length;
		
	if (svar_MG.length==rattSvar_string){ //stod 2 här förut men nu funkar för olika antal siffror, length funkar för string
		
		if (svar_MG==rattSvar_MG)
			{rattSvarat=1;
			var spelaRattLjud=document.getElementById("rattLjud");
			spelaRattLjud.play();
			}
		else{
			rattSvarat=0;
			rattSvarForstaForsok_MG=0;
			var spelaFelLjud=document.getElementById("felLjud");
			spelaFelLjud.play();
			}
		
		console.log("i= "+i);//funkar den räknar upp
		
		if (rattSvarat==1){ //RITAR UPP NY EKVATION MED NYA TAL
		svarsMatris_MG[i]=[ekvation_MG,svar_MG,rattSvar_MG,rattSvarat*rattSvarForstaForsok_MG]; //sätter sista variablen till 0 om första försöket var fel.
		rattSvarForstaForsok_MG=1; //nollställer så att nästa försök kan räknas som rätt på första försök
		visaEkvation(val_MG); //fixa här så ny svar inte visas utan först ny ekvation!!!!!!!!!!!
		svar_MG=""; //detta rensar svar så att ny ekvationen inte har svar efter lika med tecknet
		document.getElementById("svaret").focus(); //sätter fokus på input-fältet efter man svarat

		i++;
		}
		
		else   //OM FEL SVAR
			{
				ekvation_MG=tal1_MG+" &middot; "+tal2_MG; //SAMMA TAL IGEN EFTERSOM SVAR VAR FEL GÖR FÖR MINUS OCKSÅ
				//nedan ritar upp ekvationen men inte svaret
				stateSvara(ekvation_MG,"");
				svar_MG="";
				stateSkrivSvar(); //I DENNA FINNS EVENTET SOM LÄSER AV INPUT, SVARET OCH LAUNCHAR visaSvar igen alltså startar om denna funktion tills svaret är rätt.
			}
		
		
		
		
		
		/*
		svarsMatris_MG[i]=[ekvation_MG,svar_MG,rattSvar_MG,rattSvarat];
		i++;
		//console.log("array "+svarsMatris_G[i][0]);
		visaEkvation(val_MG); //fixa här så ny svar inte visas utan först ny ekvation!!!!!!!!!!!
		svar_MG=""; //detta rensar svar så att ny ekvationen inte har svar efter lika med tecknet
		document.getElementById("svaret").focus(); //sätter fokus på input-fältet efter man svarat
	
	}
	
		document.getElementById("mainsection").innerHTML="<br><br><br><br><p>"+tal1_MG+" &middot; "+tal2_MG+" = "+svar_MG+"</p>"; //ändra också StateSvara rad162
	*/
	
	
	




//SLUT PÅ NYTT FRÅN PLUSVERSIONEN	






	//lika som i plusversionen.
	if(i>9)
		{
		t2_MG= new Date().getTime();
		console.log("t2 "+t2_MG);	
		var tidSvar=t2_MG-t1_MG;	
		i=0;
		visaResultat(tidSvar);
		}
	}
}

//document.getElementById("svaret").addEventListener("keyup", visaEkvation(radiobuttonVarde)); //event input är samma som oninput, bättre än keyup med html5

function stateSvara(ekvation,svar){
var stateSvaraHTML="";
//notera att för att centrera table i html5 anv margin-left:auto och margin-right:auto;
//stateSvaraHTML+='<table style="border:solid;text-align:center;margin-left:auto;margin-right:auto;"><tr><td id="ekvationCell">'+ekvation+'</td><td id="svarCell">'+svar+'</td></tr></table>';

//console.log("screen height "+screen.height+" width: "+screen.width);
/*ORIGINAL KOD
stateSvaraHTML+="<br><br><br><br>"; //flyttar ner texten några rader obs ändra i funktionen visaEkvation rad 135 också
stateSvaraHTML+="<p>";
stateSvaraHTML+=ekvation+" = "+svar;
stateSvaraHTML+="</p>";
document.getElementById("mainsection").innerHTML=stateSvaraHTML;

*/ //END ORIGINALKOD
if(rattSvarForstaForsok_MG==1) {
	stateSvaraHTML+="<br><br><br><br>"; //avstånd under ekvation till svarsfält styrs i index.html mainsection div size, dett är för space ovanför ekvationen
	stateSvaraHTML+="<p>";
	stateSvaraHTML+=ekvation+" = "+svar;
	stateSvaraHTML+="</p>";
	document.getElementById("mainsection").innerHTML=stateSvaraHTML;
	console.log("html stateSvaraHTLM"+stateSvaraHTML);
}
else{  //(nedan rätt anv ''  -  visar orange och feltext när man svarar fel.
	stateSvaraHTML+='<p>F&#246;rs&#246;k igen!</p>'; //flyttar ner texten några rader obs ändra i funktionen visaEkvation rad 135 rad 180 också 
	stateSvaraHTML+='<p class="orange_feltext">';   // ekvationen blir orange om man svarar fel.
	stateSvaraHTML+=ekvation+" = "+svar;
	stateSvaraHTML+="</p>";
	console.log("i else för orange text");
	document.getElementById("mainsection").innerHTML=stateSvaraHTML;
	}
}

function visaResultat(tiden){ //visa hur man svarat, röd text vid fel, grön vid rätt, antal stjärnor räkan tiden
console.log("visaResultat aktiverad");
document.getElementById("svaret").removeEventListener("input", visaSvar); //EVENT BORTA
document.getElementById("inputarea").innerHTML=""; //tar bort svarsfältet när resultatet visas
var resultatText="";

//INGÅR I MATRISEN: svarsMatris_G[i]=[ekvation_G,svar_G,rattSvar_G,rattSvarat];
var antalRatt=0;
for(k=0; k<10; k++){
//Visar svaren en if-sats per ekvation - grön om rätt röd om fel
	if(svarsMatris_MG[k][3]==0){
		resultatText+='<h3 class="orange">';//h2 röd text h3 grön text h5 orange
		resultatText+=svarsMatris_MG[k][0]+" = "+svarsMatris_MG[k][1];
		resultatText+=" !"; //text vid resultat för svar som inte var rätt direkt
		resultatText+="</h3>";
		}
		
	else{ //vid rätt svar
		resultatText+="<h3>";//h2 röd text h3 grön text h5 är orange
		resultatText+=svarsMatris_MG[k][0]+" = "+svarsMatris_MG[k][1];
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

resultatText+=antalRatt+" r&#228;tt av 10 p&#229; f&#246;rsta f&#246;rs&#246;ket.";
resultatText+="</h4>";

//räkna antal rätt, lägg till knapp för starta igen, lägg till tiden, stjärnor
//en stjärna 2 grå
if(antalRatt>2 && antalRatt<=4){ //1 stjärna
	resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
	resultatText+="      ";
	resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
	resultatText+="      ";
	resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
	//resultatText+="<h4> F&#246;r att f&#229; 2 stj&#228;rnor beh&#246;ver du ha minst 5 r&#228;tt.</h4>";
	}
else{
	if(antalRatt>4 && antalRatt<=8){ //2 stjärnor
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
		//resultatText+="<h4> F&#246;r att f&#229; 3 stj&#228;rnor beh&#246;ver du ha minst 9 r&#228;tt och vara snabbare &#228;n 40 sekunder!</h4>";
		}
	else{
		if(antalRatt>8 && tiden<40){ //3 stjärnor
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="      ";
		resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
		resultatText+="<h4> Fantastiskt! Nu kan du detta j&#228;ttebra!</h4>";
		}
		else{
			if(antalRatt>8 && tiden>=40){ //2 stjärnor om man har många rätt men är för långsam
			resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
			resultatText+="      ";
			resultatText+="<img src='yellowStar.png' heigth='50px' width='50px'>";
			resultatText+="      ";
			resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
		//	resultatText+="<h4> F&#246;r att f&#229; 3 stj&#228;rnor beh&#246;ver du ha minst 9 r&#228;tt och vara snabbare &#228;n 40 sekunder!</h4>";
			}
			else{ //0 stjärnor
				resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
				resultatText+="      ";
				resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
				resultatText+="      ";
				resultatText+="<img src='greyStar.png' heigth='50px' width='50px'>";
			//	resultatText+="<h4> F&#246;r att f&#229; 1 stj&#228;rna beh&#246;ver du ha minst 3 r&#228;tt.</h4>";
			}
			}
		}
	}

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
	t1_MG= new Date().getTime();	
	console.log("val_MG "+val_MG);
	h=0; //sätts inte detta blir andra tall undefined
	//man får samma slumptal igen här fixa
	//visaEkvation(val_MG); //med denna så slumpas det inte på igen-knappen, kör Starta() istället
	Starta(); //gör att ny tabell slumpas för knapp Igen istället för att få samma serie.

}
